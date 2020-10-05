// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');

// creacion de usuario
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agregar un email válido').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength(6)
        // check('perfil', 'El perfíl es obligatorio').not().isEmpty()
    ],
    usuarioController.crearUsuario
);

module.exports = router;