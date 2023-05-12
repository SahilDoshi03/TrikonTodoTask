const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  comment: {
    type: String,
    required: [true, 'must provide comment'],
    maxlength: [100, 'name can not be more than 100 characters'],
  },
  date: {
    type: Date,
    default: Date.now()
  },
})

module.exports = mongoose.model('Todo', todoSchema)
