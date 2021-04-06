const { Router } = require('express');
const router = Router();
const { usuariosController } = require('../controllers/usuarios')


router.get('/', usuariosController.usuariosGet);

router.put('/:identificador', usuariosController.usuariosPut);

router.post('/', usuariosController.usuariosPost);


router.delete('/', usuariosController.usuariosDelete);

router.patch('/', usuariosController.usuariosPatch);


module.exports = router;