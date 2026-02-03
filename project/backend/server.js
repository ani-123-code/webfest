require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const {
  getAdminNotificationTemplate,
  getClientConfirmationTemplate,
  getSubscriberWelcomeTemplate,
  getSubscriberNotificationTemplate,
  getPickupRequestAdminTemplate,
  getPickupRequestConfirmationTemplate
} = require('./mail/templates');

// Import models
const ContactForm = require('./models/ContactForm');
const Subscriber = require('./models/Subscriber');
const PickupRequest = require('./models/PickupRequest');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = [
  'https://www.eco-dispose.com',
  'https://eco-dispose.com',
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
  process.env.RAILWAY_PUBLIC_DOMAIN,
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1 || origin.includes('.railway.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('❌ MONGODB_URI is not defined in .env file');
  process.exit(1);
}

// Log connection attempt (without showing full URI for security)
const uriParts = mongoURI.match(/mongodb\+srv:\/\/([^:]+)@([^/]+)\/([^?]+)/);
if (uriParts) {
  console.log(`🔌 Connecting to MongoDB: ${uriParts[2]}/${uriParts[3]}`);
}

mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 10000, // 10 seconds timeout
  socketTimeoutMS: 45000, // 45 seconds socket timeout
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  console.log(`📊 Database: ${mongoose.connection.name}`);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
  console.error('💡 Troubleshooting tips:');
  console.error('   1. Check if your MongoDB Atlas cluster is running');
  console.error('   2. Verify your IP is whitelisted in MongoDB Atlas');
  console.error('   3. Check your network connection');
  console.error('   4. Verify the connection string in .env file');
  // Don't exit in development - allow server to continue for other endpoints
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});

async function getAccessToken() {
  try {
    const { token } = await oauth2Client.getAccessToken();
    return token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL/TLS for port 465
  auth: {
    type: 'OAuth2',
    user: process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: getAccessToken,
  },
  connectionTimeout: 15000, // 15 seconds
  greetingTimeout: 10000, // 10 seconds
  socketTimeout: 10000, // 10 seconds
  tls: {
    rejectUnauthorized: false
  }
});

// Verify email service connection
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Email service connection error:', error.message);
  } else {
    console.log('✅ Email service is ready to send messages');
  }
});

app.get('/', (req, res) => {
  res.json({
    message: 'Eco-Dispose Backend API',
    status: 'running',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

app.post('/', async (req, res) => {
  const { company, designation, name, address, email, phone, description } = req.body;

  try {
    if (!name || !email || !phone || !address) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Save to MongoDB
    const contactForm = new ContactForm({
      company: company || '',
      designation: designation || '',
      name,
      address,
      email: email.toLowerCase().trim(),
      phone,
      description: description || ''
    });

    await contactForm.save();

    // Send emails
    const adminMailOptions = {
      from: `"Eco-Dispose" <${process.env.GMAIL_USER}>`,
      to: ['team@eco-dispose.com', 'aniketh0701@gmail.com'],
      subject: 'New User Registration - Eco-Dispose',
      html: getAdminNotificationTemplate({
        company,
        designation,
        name,
        address,
        email,
        phone,
        description
      })
    };

    const clientMailOptions = {
      from: `"Eco-Dispose" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Registration Confirmation - Eco-Dispose',
      html: getClientConfirmationTemplate({ name })
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    res.status(201).json({ message: "Registration successful! Check your email for confirmation." });
  } catch (error) {
    console.error('Error in registration:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
});

app.post('/addSubscribers', async (req, res) => {
  const { email } = req.body;

  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email: normalizedEmail });
    if (existingSubscriber) {
      return res.status(400).json({
        message: "This email is already subscribed to our newsletter."
      });
    }

    // Save to MongoDB
    const subscriber = new Subscriber({ email: normalizedEmail });
    await subscriber.save();

    // Send emails
    const adminMailOptions = {
      from: `"Eco-Dispose" <${process.env.GMAIL_USER}>`,
      to: 'team@eco-dispose.com',
      subject: 'New Newsletter Subscription - Eco-Dispose',
      html: getSubscriberNotificationTemplate({ email: normalizedEmail })
    };

    const subscriberMailOptions = {
      from: `"Eco-Dispose" <${process.env.GMAIL_USER}>`,
      to: normalizedEmail,
      subject: 'Welcome to Eco-Dispose Newsletter!',
      html: getSubscriberWelcomeTemplate({ email: normalizedEmail })
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(subscriberMailOptions)
    ]);

    res.status(200).json({
      message: "Thank you for subscribing! Check your email for confirmation."
    });

  } catch (error) {
    console.error('Error sending email:', error);
    if (error.code === 11000) {
      return res.status(400).json({
        message: "This email is already subscribed to our newsletter."
      });
    }
    res.status(500).json({
      message: "Sorry, there was an error processing your subscription. Please try again."
    });
  }
});

app.post('/requestPickup', async (req, res) => {
  const { userType, company, designation, name, address, email, phone, description } = req.body;

  try {
    if (!name || !email || !phone || !address) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Save to MongoDB
    const pickupRequest = new PickupRequest({
      userType: userType || 'individual',
      company: company || '',
      designation: designation || '',
      name,
      address,
      email: email.toLowerCase().trim(),
      phone,
      description: description || ''
    });

    await pickupRequest.save();

    // Send emails
    const adminMailOptions = {
      from: `"Eco-Dispose" <${process.env.GMAIL_USER}>`,
      to: 'team@eco-dispose.com',
      subject: `New E-Waste Pickup Request - ${userType === 'corporate' ? 'Corporate' : 'Individual'}`,
      html: getPickupRequestAdminTemplate({
        userType,
        company,
        designation,
        name,
        address,
        email,
        phone,
        description
      })
    };

    const clientMailOptions = {
      from: `"Eco-Dispose" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Pickup Request Confirmation - Eco-Dispose',
      html: getPickupRequestConfirmationTemplate({ name })
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    res.status(200).json({
      message: "Pickup request submitted successfully! We'll contact you within 24 hours."
    });

  } catch (error) {
    console.error('Error processing pickup request:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({
      message: "Sorry, there was an error processing your request. Please try again."
    });
  }
});

app.listen(port, () => {
  console.log(`Eco-Dispose API listening on port ${port}`);
});
