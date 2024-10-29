import { NoteHandler } from './modulos/NoteHandler.js';
import { Noteconsumer } from './modulos/NoteConsumer.js';
import { UI } from './modulos/ui.js';

let notes = null;

// Función para inicializar el formulario y recoger datos
let  initializeForm = () => {
  const form = document.getElementById('noteForm');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();  // Previene el envío del formulario

    // Recoge los datos del formulario
    const noteData = {
      content: document.getElementById('content').value,
      creationDate: document.getElementById('creationDate').value,
      type: document.getElementById('type').value,
    };

    // Llama a sendNote con los datos del formulario
    NoteHandler.getInstance('http://localhost:3000').sendNote(noteData, () => {
      // Si el envío es exitoso, carga todas las notas
      loadNotes();
    });
  });
}

// Función para cargar todas las notas y mostrarlas en el HTML
let loadNotes = () => {
  NoteHandler.getInstance('http://localhost:3000').getAllNotes((datos) => {
    notes = Noteconsumer.consum(datos.lista);

    // Limpiar el contenedor antes de redibujar las notas
    const notesContainer = document.getElementById('note');
    notesContainer.innerHTML = '';

    // Dibujar las notas en el HTML
    UI.drawNotes(notes, notesContainer);
  }, (error) => {
    console.error('Error fetching notes:', error);
  });
}

// Inicializa el formulario y carga las notas existentes en el inicio
initializeForm();
loadNotes();
