const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

// conectar la db
conectarDB();

// habilitar cors
app.use(cors());

// habilitar json
app.use(express.json({extended: true}));

const PORT = process.env.PORT || 4000;

// import usuarios
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/secciones', require('./routes/secciones'));
app.use('/api/imagenes', require('./routes/imagenes'));

// pagina principal
app.get('/', (req, res) => {
    res.send('Hola roto')
});

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

