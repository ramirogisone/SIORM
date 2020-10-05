const express = require('express');
const router = express.Router();
const seccionController = require('../controllers/seccionController');
const auth = require('../middlaware/auth');
const {check} = require('express-validator')

// crea secciones
router.post('/',
    auth,
    [
        check('nombre', 'El nombre de la sección es obligatorio').not().isEmpty()   
    ],
    seccionController.crearSeccion
)

// obtener secciones
 router.get('/',
    auth,
    // seccionController.crearSeccion
    seccionController.obtenerSecciones
)

// actualizar secciones
router.put('/:id', 
    auth,
    [
        check('nombre', 'El nombre de la sección es obligatorio').not().isEmpty()   
    ],
    seccionController.actualizarSeccion
)

// eliminar secciones
router.delete('/:id', 
    auth,
    seccionController.eliminarSeccion
);

module.exports = router;