const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {

    // revisar errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    // extrigo email y pass
    const {email, password} = req.body;

    try {
        // verificar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({email});   

        if(usuario){
            return res.status(400).json({msg: 'El usuario ya existe'});
        }

        // crear usuario
        usuario = new Usuario(req.body);

        // Hashear password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        // guardar en la DB
        await usuario.save();

        // crear y firmarl el JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600 // una hora
        }, (error, token) => {
            if(error) throw error;

            res.json({token});
        })

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
    
}