import { Note } from "./Note.js";

export class Noteconsumer {
    //transformar los datos de las notas recibidas en objetos de la clase Note
    static consum(datos){
        let notes = [];
        datos.forEach(element => {
            notes.push(new Note(element.id, element.content, element.creationDate, element.type));
        });
        return notes;
    }
}
