// rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');

// creacion de usuario
router.post('/', 
    [
        check('email', 'Agregar un email válido').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength(6)
    ],
    authController.autenticarUsuario
);

module.exports = router;