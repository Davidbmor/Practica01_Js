const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Note = require('./Models/Note');

app.use(cors());
app.use(express.json());
const initialNotes = [
  {
    content: 'Contenido de la primera nota',
    creationDate: '2005-01-19',
    type: 'crítica'
  },
  {
    content: 'Contenido de la segunda nota',
    creationDate: '2023-02-10',  // Corrige la fecha si es necesaria
    type: 'normal'
  },
  {
    content: 'Contenido de la tercera nota',
    creationDate: '2023-10-22',
    type: 'normal'
  },
  {
    content: 'Contenido de la cuarta nota',
    creationDate: '2023-10-01',
    type: 'crítica'
  }
];
// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/NotesConnection')
  .then(async () => {
    console.log('Conectado a MongoDB');
    // Comprueba si la base de datos tiene notas
    const noteCount = await Note.countDocuments();
    // Inserta las notas iniciales solo si no hay notas en la base de datos para hacer pruebas
    if (noteCount === 0) {
      await Note.insertMany(initialNotes);
      console.log('Notas iniciales insertadas en la base de datos');
    } else {
      console.log('La base de datos ya contiene notas');
    }
  })
  .catch((err) => console.error('Error de conexión a MongoDB:', err));
// Ruta para obtener todas las notas
app.get('/', async (req, res) => {
  try {
    const notes = await Note.find(); // Obtiene todas las notas de la base de datos
    res.send({ lista: notes });
  } catch (error) {
    console.error('Error al obtener notas:', error);
    res.status(500).send('Error al obtener las notas');
  }
});
// Ruta para añadir una nueva nota
app.post('/newNote', async (req, res) => {
  const { content, creationDate, type } = req.body; //Extraa los valores del cliente y los almacena en variables
  const newNote = new Note({ content, creationDate, type }); // Crea una nueva nota
  try {
    await newNote.save(); // Guarda la nueva nota en MongoDB
    console.log("Nota guardada:", newNote);
    res.send('Nota añadida correctamente');
  } catch (error) {
    console.error('Error al guardar la nota:', error);
    res.status(500).send('Error al guardar la nota');
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
