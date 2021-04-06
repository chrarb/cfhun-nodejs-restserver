require('dotenv').config();

//importar server
const Server = require('./models/server');

//instanciar server
const server = new Server();

server.listen();



/*
const express = require('express');
const app = express();
//cargar archivo .env para las variables de entorno
require('dotenv').config();
const port = parseInt(process.env.PORT);

app.get('/', (req, res) => {

  res.send('is working!');

});
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
*/


//----------------------
//- for testing
//----------------------

// const otronombre = require('./models/aritmetica');

// // const miClase = new Aritmetica();
// // miClase.a = 5;
// // miClase.b = 6;
// // console.log(miClase.suma());


// const miclase = new otronombre();

// miclase.a = 5;
// miclase.b = 2;

// console.log(miclase.resta());





