const Seccion = require('../models/Seccion');
const {validationResult} = require('express-validator');

exports.crearSeccion = async (req, res) => {
    try {
        // revisar errores
        const errores = validationResult(req);
        if(!errores.isEmpty()) {
            return res.status(400).json({errores: errores.array()})
        }

        // crear nueva seccion
        const seccion = new Seccion(req.body);

        // guardar usuario creador via JWT
        seccion.creador = req.usuario.id;
        
        // guadar la seccion
        seccion.save();
        res.json(seccion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerSecciones = async (req, res) => {
        try {
            // console.log(req.usuario); //obtengo el id del usuario autenticado
            // obtiene las secciones del usuario actual
            const secciones = await Seccion.find({ creador: req.usuario.id}).sort({creado: -1});
            res.json({secciones});
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
}

// Actualiza seccion
exports.actualizarSeccion = async (req, res) => {
    // revisar errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    // extraer informacion de la seccion
    const {nombre} = req.body;
    const nuevaSeccion = {};

    if(nombre){
        nuevaSeccion.nombre = nombre;
    }

    try {
        // obtener el ID de la seccion
        let seccion = await Seccion.findById(req.params.id);
        // valido si la seccion existe o no
        if(!seccion){
            return res.status(404).json({msg: 'Seccion no encontrada'});
        }
        // valido el creador de la seccion
        if(seccion.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }
        // actualizar la seccion
        seccion = await Seccion.findByIdAndUpdate({_id: req.params.id}, {$set : nuevaSeccion}, {new: true}); 

        res.json({seccion});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}
    // eliminar seccion
    exports.eliminarSeccion = async (req, res) => {
        try {
            // obtener el ID de la seccion
            let seccion = await Seccion.findById(req.params.id);
            // valido si la seccion existe o no
            if(!seccion){
                return res.status(404).json({msg: 'Seccion no encontrada'});
            }
            // valido el creador de la seccion
            if(seccion.creador.toString() !== req.usuario.id){
                return res.status(401).json({msg: 'No autorizado'});
            }
            // eliminar una la seccion
            await Seccion.findOneAndRemove({ _id : req.params.id });
            res.json({msg: 'Sección eliminada'});

        } catch (error) {
            console.log(error);
            res.status(500).send('Error en el servidor');
        }
    }
