//Modelo de la clase Note
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    enum: ['crítica', 'normal'],
    required: true
  }
});
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
