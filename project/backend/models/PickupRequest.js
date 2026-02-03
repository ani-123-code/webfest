const mongoose = require('mongoose');

const pickupRequestSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
    enum: ['individual', 'corporate']
  },
  company: {
    type: String,
    default: ''
  },
  designation: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('PickupRequest', pickupRequestSchema);
