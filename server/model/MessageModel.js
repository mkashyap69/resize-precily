const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    maxLength: [150, 'Cannot be of more than 150 words'],
    required: [true, 'Field is required'],
    trim: true,
  },
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
