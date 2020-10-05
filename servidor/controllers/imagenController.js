const Imagen = require('../models/Imagen');
const Seccion = require('../models/Seccion');
const {validationResult} = require('express-validator');

// agregar nueva imagen
exports.nuevaImagen = async (req, res) => {
    // revisar errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    try {
        const {seccion} = req.body;

        const existeSeccion = await Seccion.findById(seccion);
        if(!existeSeccion) {
            return res.status(404).json({msg: 'Sección no encontrada'})
        }

        // valido el creador de la seccion
        if(existeSeccion.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        // alta de la imagen
        const imagen = new Imagen(req.body);
        await imagen.save();
        res.json({imagen});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// obtener imagenes por seccion
exports.obtenerImagenes = async (req, res) => {
    try {
        const {seccion} = req.body;

        const existeSeccion = await Seccion.findById(seccion);
        if(!existeSeccion) {
            return res.status(404).json({msg: 'Sección no encontrada'})
        }

        // valido el creador de la seccion
        if(existeSeccion.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        const imagenes = await Imagen.find({seccion});
        res.json ({imagenes});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// actualizar imagenes
exports.actualizarImagen = async (req, res) => {
    try {
        const {seccion, nombre, descripcion, link, estado} = req.body;

        let imagen = await Imagen.findById(req.params.id);

        if(!imagen) {
            return res.status(404).json({msg: 'Imágen no encontrada'})
        }
        
        const existeSeccion = await Seccion.findById(seccion);
        
        // valido el creador de la seccion
        if(existeSeccion.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        // creo objeto con la nueva info
        const nuevaImagen = {};

        if(nombre) nuevaImagen.nombre = nombre;
        if(descripcion) nuevaImagen.descripcion = descripcion;
        if(link) nuevaImagen.link = link;
        if(estado) nuevaImagen.estado = estado;

        // guardar imagen
        imagen = await Imagen.findOneAndUpdate({_id: req.params.id}, nuevaImagen, {new: true});
        res.json({imagen});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// eliminar imagenes
exports.eliminarImagen = async (req, res) => {
    try {
        const {seccion, nombre, descripcion, link, estado} = req.body;

        let imagen = await Imagen.findById(req.params.id);

        if(!imagen) {
            return res.status(404).json({msg: 'Imágen no encontrada'})
        }
        
        const existeSeccion = await Seccion.findById(seccion);
        
        // valido el creador de la seccion
        if(existeSeccion.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        // eliminar
        await Imagen.findOneAndRemove({_id : req.params.id});
        res.json({msg: 'Imágen eliminada'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}