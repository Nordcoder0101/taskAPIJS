const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema({
  title: {type: String, require: true},
  description: {type: String, require: true},
  completed: {type: Boolean, default: false, required: false}
}, {timestamp: true})

module.exports = mongoose.model('Task', taskSchema)
