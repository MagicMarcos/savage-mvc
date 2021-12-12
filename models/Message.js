const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
   name: {
    type: String,
    required: true,
  },
  thumbUp: {
    type: Number,
    required: true,
  },
 }
 )

module.exports = mongoose.model('Message', MessageSchema)
