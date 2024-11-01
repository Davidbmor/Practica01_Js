import { NoteHandler } from './modulos/NoteHandler.js';
import { Noteconsumer } from './modulos/NoteConsumer.js';
import { UI } from './modulos/ui.js';

let notes = null;
// Referencia al selector de mes
const monthFilter = document.getElementById('monthFilter');
// Referecia al formulario
const form = document.getElementById('noteForm');
// Función para inicializar el formulario y recoger datos
let initializeForm = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Recoge los datos del formulario
    const noteData = {
      content: document.getElementById('content').value,
      creationDate: document.getElementById('creationDate').value,
      type: document.getElementById('type').value,
    };
    // Llama a sendNote con los datos del formulario
    NoteHandler.getInstance('http://localhost:3000').sendNote(noteData, () => {
      //Si se envia bien carga las notas
      loadNotes();
    });
  });
}
// Función para cargar todas las notas
let loadNotes = () => {
  NoteHandler.getInstance('http://localhost:3000').getAllNotes((datos) => {
    notes = Noteconsumer.consum(datos.lista);
    filterNotesByMonth(); // Filtra después de cargar
  }, (error) => {
    console.error('Error fetching notes:', error);
  });
};
// Función para filtrar notas por mes
let filterNotesByMonth = () => {
  const selectedMonth = monthFilter.value; // Obtiene el mes seleccionado
  let filteredNotes;
  if (selectedMonth) {
    filteredNotes = notes.filter(note => {
      const noteMonth = new Date(note.creationDate).getMonth() + 1; //Crea un objeto Date y obtiene el mes
      return String(noteMonth).padStart(2, '0') === selectedMonth;  //Formatea el mes para evitar errores  y compara con el mes seleccionado
    });
  } else {
    filteredNotes = notes; // Muestra todas las notas si no se selecciona mes
  }
  // Muestra las notas filtradas en el HTML
  const notesContainer = document.getElementById('note');
  notesContainer.innerHTML = '';
  UI.drawNotes(filteredNotes, notesContainer);
}
monthFilter.addEventListener('change', filterNotesByMonth);

// Inicializa el formulario y carga las notas existentes en el inicio
initializeForm();
loadNotes();





