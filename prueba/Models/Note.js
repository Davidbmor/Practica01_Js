const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },  //Se pone la fecha en la que se ha creao en el momento si no se expecifica
  type: { type: String, required: true }
});

module.exports = mongoose.model('Note', noteSchema);
