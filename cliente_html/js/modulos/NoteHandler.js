import {  NoteHandlerC } from "./NoteHandlerC.js"

export const NoteHandler = {
    carHandler:null, 
    getInstance: ( url) => {
        if (NoteHandler.carHandler === null) {
            NoteHandler.carHandler =  new NoteHandlerC(url);
        }
        return NoteHandler.carHandler;
    }
}