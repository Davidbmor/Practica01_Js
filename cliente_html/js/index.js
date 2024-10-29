import { NoteHandler} from './modulos/NoteHandler.js';
import { Noteconsumer } from './modulos/NoteConsumer.js';
import { UI } from './modulos/ui.js';

let notes = null;

NoteHandler.getInstance('http://localhost:3000').sendNote();

NoteHandler.getInstance('http://localhost:3000').getAllNotes((datos)=> {
  notes = Noteconsumer.consum(datos.lista);
  UI.drawNotes(notes, document.getElementById('note'));
});
