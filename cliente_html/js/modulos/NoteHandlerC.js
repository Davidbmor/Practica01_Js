
export class NoteHandlerC {

    constructor(url) {
        this._url = url;
        this._lastQueryStatus = null;
    }


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

    getAllNotes(onSuccesCallBack, onErrorCallBack) {
        fetch(`${this._url}/`)
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

    // async getAllCarsV2() {
    //     let b = null;
    //     await fetch(`${this._url}/`)
    //         .then(async (datos) => {
    //              await datos.json().then((datos) => {
    //                 this._lastQueryStatus = true;
    //                 b = datos;
    //             }, (error) => {
    //                 this._lastQueryStatus = false;
    //                 return null;
    //             })
    //         }, (error) => {
    //             this._lastQueryStatus = false;
    //             return null;
    //         });
    //     return b;
    // }
}