const getAdminNotificationTemplate = (userData) => {
  const { company, designation, name, address, email, phone, description } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New User Registration - Eco-Dispose</title>
        <style>
            body { 
                font-family: 'Times New Roman', Georgia, serif; 
                margin: 0; 
                padding: 30px; 
                background: #ffffff; 
                color: #2c2c2c; 
                line-height: 1.6;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff; 
                border: 2px solid #1a4d2e; 
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .header { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 30px; 
                text-align: center; 
                border-bottom: 3px solid #0f2818;
            }
            .header h1 { 
                margin: 0; 
                font-size: 24px; 
                font-weight: normal; 
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .header p { 
                margin: 10px 0 0; 
                font-size: 14px; 
                opacity: 0.9; 
                font-style: italic;
            }
            .content { 
                padding: 35px; 
                background: #fafafa;
            }
            .content h2 {
                color: #1a4d2e;
                font-size: 18px;
                margin: 0 0 20px 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border-bottom: 1px solid #1a4d2e;
                padding-bottom: 8px;
            }
            .user-details { 
                background: #ffffff; 
                border: 1px solid #d4d4d4; 
                padding: 25px; 
                margin: 20px 0;
            }
            .detail-row { 
                display: flex; 
                margin: 12px 0; 
                padding: 8px 0;
                border-bottom: 1px dotted #e0e0e0;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .label { 
                font-weight: bold; 
                color: #1a4d2e; 
                min-width: 110px; 
                margin-right: 15px; 
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 0.5px;
            }
            .value { 
                color: #333; 
                font-size: 14px;
            }
            .timestamp { 
                background: #e8e8e8; 
                padding: 15px; 
                text-align: center; 
                font-size: 12px; 
                color: #666; 
                margin: 25px 0;
                border-left: 4px solid #1a4d2e;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .footer { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 25px; 
                text-align: center; 
                font-size: 12px;
                border-top: 3px solid #0f2818;
            }
            .footer p {
                margin: 0;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>User Registration Notice</h1>
                <p>Eco-Dispose Management Platform</p>
            </div>
            
            <div class="content">
                <h2>Registration Details</h2>
                <p>A new user has completed registration on the Eco-Dispose platform. Please review the following information:</p>
                
                <div class="user-details">
                    ${company ? `<div class="detail-row"><span class="label">Company:</span><span class="value">${company}</span></div>` : ''}
                    ${designation ? `<div class="detail-row"><span class="label">Position:</span><span class="value">${designation}</span></div>` : ''}
                    <div class="detail-row"><span class="label">Full Name:</span><span class="value">${name}</span></div>
                    <div class="detail-row"><span class="label">Email:</span><span class="value">${email}</span></div>
                    <div class="detail-row"><span class="label">Phone:</span><span class="value">${phone}</span></div>
                    <div class="detail-row"><span class="label">Address:</span><span class="value">${address}</span></div>
                    ${description ? `<div class="detail-row"><span class="label">Additional:</span><span class="value">${description}</span></div>` : ''}
                </div>
                
                <div class="timestamp">
                    Registration Date: ${new Date().toLocaleString()}
                </div>
                
                <p style="margin-top: 25px; font-style: italic; color: #666;">
                    Please process this registration according to standard procedures and contact the applicant within the designated timeframe.
                </p>
            </div>
            
            <div class="footer">
                <p>Eco-Dispose | Sustainable E-Waste Management Solutions</p>
                <p style="margin-top: 5px; font-size: 10px; opacity: 0.8;">© 2025 All Rights Reserved</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const getClientConfirmationTemplate = (userData) => {
  const { name } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmation - Eco-Dispose</title>
        <style>
            body { 
                font-family: 'Times New Roman', Georgia, serif; 
                margin: 0; 
                padding: 30px; 
                background: #ffffff; 
                color: #2c2c2c; 
                line-height: 1.6;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff; 
                border: 2px solid #1a4d2e; 
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .header { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 30px; 
                text-align: center; 
                border-bottom: 3px solid #0f2818;
            }
            .header h1 { 
                margin: 0; 
                font-size: 24px; 
                font-weight: normal; 
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .header p { 
                margin: 10px 0 0; 
                font-size: 14px; 
                opacity: 0.9; 
                font-style: italic;
            }
            .content { 
                padding: 35px; 
                background: #fafafa;
            }
            .welcome-section { 
                background: #ffffff; 
                padding: 30px; 
                text-align: center; 
                border: 1px solid #d4d4d4; 
                margin: 20px 0;
            }
            .welcome-section h2 {
                color: #1a4d2e;
                font-size: 20px;
                margin: 0 0 15px 0;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .welcome-section p {
                margin: 0;
                font-size: 16px;
                color: #333;
            }
            .process-section { 
                background: #ffffff; 
                border: 1px solid #d4d4d4; 
                padding: 25px; 
                margin: 20px 0;
            }
            .process-section h3 {
                color: #1a4d2e;
                font-size: 16px;
                margin: 0 0 15px 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border-bottom: 1px solid #1a4d2e;
                padding-bottom: 8px;
            }
            .process-list {
                margin: 15px 0;
                padding-left: 0;
                list-style: none;
            }
            .process-list li {
                margin: 10px 0;
                padding: 8px 0 8px 25px;
                position: relative;
                color: #333;
            }
            .process-list li:before {
                content: "•";
                color: #1a4d2e;
                font-size: 18px;
                position: absolute;
                left: 0;
                top: 5px;
            }
            .contact-info {
                background: #e8e8e8;
                padding: 20px;
                text-align: center;
                margin: 25px 0;
                border-left: 4px solid #1a4d2e;
            }
            .footer { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 25px; 
                text-align: center; 
                font-size: 12px;
                border-top: 3px solid #0f2818;
            }
            .footer p {
                margin: 0;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Registration Confirmed</h1>
                <p>Welcome to Eco-Dispose</p>
            </div>
            
            <div class="content">
                <div class="welcome-section">
                    <h2>Dear ${name},</h2>
                    <p>Thank you for registering with Eco-Dispose. We are pleased to confirm that your application has been successfully received and is currently under review.</p>
                </div>
                
                <div class="process-section">
                    <h3>Next Steps in Our Process</h3>
                    <ul class="process-list">
                        <li>Our team will thoroughly review your registration details</li>
                        <li>You will be contacted within 24-48 business hours</li>
                        <li>We will provide detailed information about our services</li>
                        <li>A personalized consultation will be scheduled if applicable</li>
                    </ul>
                </div>
                
                <p style="margin: 25px 0; font-size: 15px; color: #333;">
                    At Eco-Dispose, we are committed to providing sustainable e-waste management solutions that benefit both our clients and the environment. We look forward to partnering with you in this important endeavor.
                </p>
                
                <div class="contact-info">
                    <p style="margin: 0; font-size: 14px; color: #666;">
                        <strong>Registration Date:</strong> ${new Date().toLocaleDateString()}<br>
                        For immediate assistance, please reply to this email or contact our customer service team.
                    </p>
                </div>
            </div>
            
            <div class="footer">
                <p>Eco-Dispose | Sustainable E-Waste Management Solutions</p>
                <p style="margin-top: 5px; font-size: 10px; opacity: 0.8;">© 2025 All Rights Reserved</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const getSubscriberWelcomeTemplate = (subscriberData) => {
  const { email } = subscriberData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Newsletter Subscription Confirmed - Eco-Dispose</title>
        <style>
            body { 
                font-family: 'Times New Roman', Georgia, serif; 
                margin: 0; 
                padding: 30px; 
                background: #ffffff; 
                color: #2c2c2c; 
                line-height: 1.6;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff; 
                border: 2px solid #1a4d2e; 
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .header { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 30px; 
                text-align: center; 
                border-bottom: 3px solid #0f2818;
            }
            .header h1 { 
                margin: 0; 
                font-size: 24px; 
                font-weight: normal; 
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .header p { 
                margin: 10px 0 0; 
                font-size: 14px; 
                opacity: 0.9; 
                font-style: italic;
            }
            .content { 
                padding: 35px; 
                background: #fafafa;
            }
            .confirmation-section { 
                background: #ffffff; 
                padding: 30px; 
                text-align: center; 
                border: 1px solid #d4d4d4; 
                margin: 20px 0;
            }
            .confirmation-section h2 {
                color: #1a4d2e;
                font-size: 20px;
                margin: 0 0 15px 0;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .benefits-section { 
                background: #ffffff; 
                border: 1px solid #d4d4d4; 
                padding: 25px; 
                margin: 20px 0;
            }
            .benefits-section h3 {
                color: #1a4d2e;
                font-size: 16px;
                margin: 0 0 15px 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border-bottom: 1px solid #1a4d2e;
                padding-bottom: 8px;
            }
            .benefits-list {
                margin: 15px 0;
                padding-left: 0;
                list-style: none;
            }
            .benefits-list li {
                margin: 10px 0;
                padding: 8px 0 8px 25px;
                position: relative;
                color: #333;
            }
            .benefits-list li:before {
                content: "•";
                color: #1a4d2e;
                font-size: 18px;
                position: absolute;
                left: 0;
                top: 5px;
            }
            .subscription-details {
                background: #e8e8e8;
                padding: 20px;
                text-align: center;
                margin: 25px 0;
                border-left: 4px solid #1a4d2e;
            }
            .footer { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 25px; 
                text-align: center; 
                font-size: 12px;
                border-top: 3px solid #0f2818;
            }
            .footer p {
                margin: 0;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Newsletter Subscription</h1>
                <p>Eco-Dispose Communications</p>
            </div>
            
            <div class="content">
                <div class="confirmation-section">
                    <h2>Subscription Confirmed</h2>
                    <p>Thank you for subscribing to our newsletter. You have successfully joined our community of environmentally conscious individuals and organizations.</p>
                </div>
                
               
                
                <p style="margin: 25px 0; font-size: 15px; color: #333;">
                    Our newsletter is distributed monthly and contains valuable information to help you make informed decisions about e-waste management. You may unsubscribe at any time using the link provided in each newsletter.
                </p>
             
            </div>
            
            <div class="footer">
                <p>Eco-Dispose | Sustainable E-Waste Management Solutions</p>
                <p style="margin-top: 5px; font-size: 10px; opacity: 0.8;">© 2025 All Rights Reserved</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const getSubscriberNotificationTemplate = (subscriberData) => {
  const { email } = subscriberData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Newsletter Subscription Alert - Admin</title>
        <style>
            body { 
                font-family: 'Times New Roman', Georgia, serif; 
                margin: 0; 
                padding: 30px; 
                background: #ffffff; 
                color: #2c2c2c; 
                line-height: 1.6;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff; 
                border: 2px solid #1a4d2e; 
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .header { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 30px; 
                text-align: center; 
                border-bottom: 3px solid #0f2818;
            }
            .header h1 { 
                margin: 0; 
                font-size: 24px; 
                font-weight: normal; 
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .header p { 
                margin: 10px 0 0; 
                font-size: 14px; 
                opacity: 0.9; 
                font-style: italic;
            }
            .content { 
                padding: 35px; 
                background: #fafafa;
            }
            .content h2 {
                color: #1a4d2e;
                font-size: 18px;
                margin: 0 0 20px 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border-bottom: 1px solid #1a4d2e;
                padding-bottom: 8px;
            }
            .subscriber-details { 
                background: #ffffff; 
                border: 1px solid #d4d4d4; 
                padding: 25px; 
                margin: 20px 0;
            }
            .detail-row { 
                margin: 12px 0; 
                padding: 8px 0;
                border-bottom: 1px dotted #e0e0e0;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .label { 
                font-weight: bold; 
                color: #1a4d2e; 
                margin-right: 15px; 
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 0.5px;
            }
            .value { 
                color: #333; 
                font-size: 14px;
            }
            .action-required {
                background: #e8e8e8;
                padding: 20px;
                text-align: center;
                margin: 25px 0;
                border-left: 4px solid #1a4d2e;
            }
            .footer { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 25px; 
                text-align: center; 
                font-size: 12px;
                border-top: 3px solid #0f2818;
            }
            .footer p {
                margin: 0;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Newsletter Subscription</h1>
                <p>Administrative Notification</p>
            </div>
            
            <div class="content">
                <h2>New Subscriber Alert</h2>
                <p>A new subscription has been received for the Eco-Dispose newsletter. Please review the following details and take appropriate action:</p>
                
                <div class="subscriber-details">
                    <div class="detail-row">
                        <span class="label">Email Address:</span>
                        <span class="value">${email}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Subscription Date:</span>
                        <span class="value">${new Date().toLocaleString()}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Source:</span>
                        <span class="value">Website Newsletter Form</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Status:</span>
                        <span class="value">Confirmation Email Sent</span>
                    </div>
                </div>
                
                <div class="action-required">
                    <p style="margin: 0; font-size: 14px; color: #666;">
                        <strong>Action Required:</strong> Please add this subscriber to the monthly newsletter distribution list.<br>
                        The subscriber has been automatically sent a welcome confirmation email.
                    </p>
                </div>
            </div>
            
            <div class="footer">
                <p>Eco-Dispose | Administrative System</p>
                <p style="margin-top: 5px; font-size: 10px; opacity: 0.8;">© 2025 All Rights Reserved</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const getPickupRequestAdminTemplate = (pickupData) => {
  const { userType, company, designation, name, address, email, phone, description } = pickupData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Pickup Request - Eco-Dispose</title>
        <style>
            body { 
                font-family: 'Times New Roman', Georgia, serif; 
                margin: 0; 
                padding: 30px; 
                background: #ffffff; 
                color: #2c2c2c; 
                line-height: 1.6;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff; 
                border: 2px solid #1a4d2e; 
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .header { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 30px; 
                text-align: center; 
                border-bottom: 3px solid #0f2818;
            }
            .header h1 { 
                margin: 0; 
                font-size: 24px; 
                font-weight: normal; 
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .content { 
                padding: 35px; 
                background: #fafafa;
            }
            .detail-row { 
                margin: 12px 0; 
                padding: 8px 0;
                border-bottom: 1px dotted #e0e0e0;
            }
            .label { 
                font-weight: bold; 
                color: #1a4d2e; 
                margin-right: 15px; 
                text-transform: uppercase;
                font-size: 12px;
            }
            .value { 
                color: #333; 
                font-size: 14px;
            }
            .footer { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 25px; 
                text-align: center; 
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New E-Waste Pickup Request</h1>
                <p>Eco-Dispose Administrative Notification</p>
            </div>
            <div class="content">
                <h2 style="color: #1a4d2e; border-bottom: 1px solid #1a4d2e; padding-bottom: 8px;">Request Details</h2>
                <div class="detail-row">
                    <span class="label">Request Type:</span>
                    <span class="value">${userType === 'corporate' ? 'Corporate' : 'Individual'}</span>
                </div>
                ${userType === 'corporate' ? `
                <div class="detail-row">
                    <span class="label">Company:</span>
                    <span class="value">${company || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Designation:</span>
                    <span class="value">${designation || 'N/A'}</span>
                </div>
                ` : ''}
                <div class="detail-row">
                    <span class="label">Name:</span>
                    <span class="value">${name}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Email:</span>
                    <span class="value">${email}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Phone:</span>
                    <span class="value">${phone}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Pickup Address:</span>
                    <span class="value">${address}</span>
                </div>
                <div class="detail-row">
                    <span class="label">E-Waste Items:</span>
                    <span class="value">${description || 'Not specified'}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Request Date:</span>
                    <span class="value">${new Date().toLocaleString()}</span>
                </div>
                <p style="margin-top: 25px; padding: 15px; background: #e8e8e8; border-left: 4px solid #1a4d2e;">
                    <strong>Action Required:</strong> Please contact the requester within 24 hours to schedule the pickup.
                </p>
            </div>
            <div class="footer">
                <p>Eco-Dispose | Administrative System</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const getPickupRequestConfirmationTemplate = (userData) => {
  const { name } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pickup Request Confirmation - Eco-Dispose</title>
        <style>
            body { 
                font-family: 'Times New Roman', Georgia, serif; 
                margin: 0; 
                padding: 30px; 
                background: #ffffff; 
                color: #2c2c2c; 
                line-height: 1.6;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff; 
                border: 2px solid #1a4d2e; 
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .header { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 30px; 
                text-align: center; 
            }
            .content { 
                padding: 35px; 
                background: #fafafa;
            }
            .footer { 
                background: #1a4d2e; 
                color: #ffffff; 
                padding: 25px; 
                text-align: center; 
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Pickup Request Received</h1>
            </div>
            <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for requesting an e-waste pickup with Eco-Dispose. We have received your request and our team will contact you within 24 hours to schedule your pickup.</p>
                <p>We appreciate your commitment to responsible e-waste disposal and environmental sustainability.</p>
                <p style="margin-top: 25px;">Best regards,<br>The Eco-Dispose Team</p>
            </div>
            <div class="footer">
                <p>Eco-Dispose | Sustainable E-Waste Management</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

module.exports = {
  getAdminNotificationTemplate,
  getClientConfirmationTemplate,
  getSubscriberWelcomeTemplate,
  getSubscriberNotificationTemplate,
  getPickupRequestAdminTemplate,
  getPickupRequestConfirmationTemplate
};