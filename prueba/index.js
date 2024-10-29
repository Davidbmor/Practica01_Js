const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const mensaje = {
  lista: [
    {
      id: '1',
      content: 'PEPA DSAPO^M ÑDAON K;DSLKÑJLKJNM ÑLKJMNAS DLK¨SDAÑLKMDSAALSDMLASDMLÑKSMADÑLKMDSA ñlkajds, sdñlkmadslj  ñlkmasd ',
      creationDate: '19/01/2005',
      type: 'carro.'
    },
    {
      id: '2',
      content: 'pÑAOISJNd  aslñdn asldjnne x,nm dsa`w ,. masdñljw ljnasd elñkjnas dflkjna,n sdadsa',
      creationDate: '30/02/2023',
      type: 'carro.'
    },
    {
      id: '3',
      content: 'lkjnasd ñqlne asldn qñolne as.x  apokj dwasd walñenn sadñlkwasd wñadns asd ',
      creationDate: '22/10/20023',
      type: 'motor.'
    },
    {
      id: '4',
      content: 'aDa sdñlm Das vid asi asioos pqeios qu meoirasd lm, easdr ased',
      creationDate: 'rojo',
      type: 'motor.'
    }
  ]
};

app.get('/', (req, res) => {
  res.send(mensaje);
});

app.post('/newNote', (req, res) => {
  const newNote = req.body;
  mensaje.lista.push(newNote); 
  console.log("Nota recibida:", newNote);
  res.send('Nota añadida correctamente'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
