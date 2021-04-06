/* 
Esta clase representa un servidor
*/

const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Middlewares
    this.middlewares();


    //Rutas de mi app
    this.routes();
  }

  middlewares() {

    //CORS - Cross Origin Resource Sharing, es un middleware
    this.app.use( cors() );

    //Lectura y parseo del body
    //todo lo que venga en la petición se convertirá a formato json
    this.app.use(express.json());


    //Directorio publico
    this.app.use(express.static('public'));


  }

  routes() {
    //delimitamos la ruta hacia /api/usuarios, por ejemplo si el usuario accessara
    // a http://localhost/api/usuarios
    //el require toma el objeto Router() de express que maneja cada petición
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server corriendo en el puerto ${this.port}`);
    });
  }

}

module.exports = Server;