// rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middlaware/auth');

// autenticacion de usuario
router.post('/', 
    authController.autenticarUsuario
);

// obtener usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
)

module.exports = router;