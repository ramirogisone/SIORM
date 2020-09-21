const express = require('express');
const router = express.Router();
const imagenController = require('../controllers/imagenController');
const auth = require('../middlaware/auth');
const {check} = require('express-validator')

// agregar imagen
// 
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('seccion', 'La sección es obligatoria').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        check('link', 'El link es obligatorio').not().isEmpty()
    ],
    imagenController.nuevaImagen
)

// obtener imagenes por seccion
router.get('/',
    auth,
    imagenController.obtenerImagenes
)

// actualizar imagenes
router.put('/:id',
    auth,
    imagenController.actualizarImagen
)

// eliminar imagenes
router.delete('/:id',
    auth,
    imagenController.eliminarImagen
)

module.exports = router;