import {  Note } from "./Note.js";

export class Noteconsumer {
    static consum(datos){
        let notes=[];
        datos.forEach(element => {
            notes.push(new Note(element.id,element.content,element.creationDate,element.type));
        });
        return notes
    }
}