const mongoose = require("mongoose")

const TickeSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    AgentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema',
      },

  });
  
  module.exports = mongoose.model('TicketSchema', TickeSchema);