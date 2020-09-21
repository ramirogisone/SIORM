const mongoose = require('mongoose');

const ImagenSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: Boolean,
        default: false
    },
    creado:{
        type: Date,
        default: Date.now()
    },
    seccion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seccion'
    }
});

module.exports = mongoose.model('Imagen', ImagenSchema);