
export class NoteHandlerC {

    constructor(url) {
        this._url = url;
        this._lastQueryStatus = null;
    }

//Envía una nueva nota al servidor mediante una petición POST.
    async sendNote(noteData, onSuccesCallBack) {
        await fetch(`${this._url}/newNote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(noteData), 
        }).then((response) => {
          if (response.ok) {
            console.log('Nota enviada con éxito');
            onSuccesCallBack();
          } else {
            console.log('Error al enviar la nota');
          }
        }).catch((error) => {
          console.error('Error en la petición:', error);
        });
      }
//Obtiene todas las notas del servidor mediante una petición GET.
    getAllNotes(onSuccesCallBack, onErrorCallBack) {
        fetch(`${this._url}`)
            .then((datos) => {
                datos.json().then((datos) => {
                    this._lastQueryStatus = true;
                    onSuccesCallBack(datos);
                }, (error) => {
                    this._lastQueryStatus = false;
                    onErrorCallBack('JSONException');
                })
            }, (error) => {
                this._lastQueryStatus = false;
                onErrorCallBack('ConnectionException');
            });
    }

 
}