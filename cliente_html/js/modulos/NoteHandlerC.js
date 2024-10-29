
export class NoteHandlerC {

    constructor(url) {
        this._url = url;
        this._lastQueryStatus = null;
    }


    async sendNote(){
       await fetch(`${this._url}/newNote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : 'Opeeel',
                content: '6334fe5',
                creationDate: 'vedfsfdsrde',
                type: 'dffdsfds.'
            }),
          }).then((response) => {
            if(response.ok) {
                console.log('Se ha enviado el coche');
            } else {
                console.log('No se ha podido enviar el coche');
            }
          })
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