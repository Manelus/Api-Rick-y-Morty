const personajes = require('./routes/personajes');
const router = require('express').Router();

//Rutas
router.use('/personaje', personajes);

module.exports = router;