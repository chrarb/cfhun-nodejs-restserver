//importamos este response/request de express, para que
//vscode nos autocomplete en los objetos req, res
const { request, response } = require('express');


//igualamos res = response para que vscode nos de autocompletado
//solamente, es completamente innecesario de otra forma
const usuariosGet = (req = request, res = response) => {
  res.json({msg: 'get API - controlador'});

  //obteniendo parametros del paramquery  ej. ?a=abc&b=z&c=x ...
  // const parametros = req.query;
  // console.log(parametros.nombre);
  // console.log(parametros.numero);

  // //con destructuración y parametros default por si no envia nada en el parametro
  // const { mode = 15, c : currency  = 'MXN' } = req.query;
  // //currency es un alias para el parametro c
  // console.log(mode, currency);


}


//o también con JSDoc funciona el autocompletado desde vscode
/**
 * Maneja una petición de POST para los usuarios
 * 
 * @param {request} req - el objeto request
 * @param {response} res - el objeto response
 */
const usuariosPost = (req, res) => {

  // const bodyPayload = req.body;

  // //o tambien podemos destructurarlo
  // const { nombre :elnombre } = req.body;
  // console.log(elnombre);

  // res.json(
  //   {
  //     msg: 'post API - controlador',
  //     payload: bodyPayload,
  //   });

  res.json({msg: 'post API - controlador'});
}

/**
 * Maneja una petición PUT para los usuarios
 * @param {request} req el objeto request
 * @param {response} res el objeto response
 */
const usuariosPut = (req, res) => {

  // const id = req.params.identificador;
  // res.json({msg: 'put API - controlador , ID = ' + id});

  res.json({msg: 'put API - controlador , ID = '});

}


/**
 * Maneja una petición DELETE para los usuarios
 * @param {request} req el objeto request
 * @param {response} res el objeto response
 */
const usuariosDelete = (req, res) => {
  res.json({msg: 'delete API - controlador'});
}

/**
 * Maneja una petición PATCH para los usuarios
 * @param {request} req el objeto request
 * @param {response} res el objeto response
 */
const usuariosPatch = (req, res) => {
  res.json({msg: 'patch API - controlador'});
}




module.exports = {
  usuariosController : {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
  }
}