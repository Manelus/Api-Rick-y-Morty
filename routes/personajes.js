var express = require('express');
var router = express.Router();

//Importo modelo de datos
const PersonajesController = require('../controllers/PersonajesControllers');

// End-points CRUD movies
router.get('/', PersonajesController.getAll);
router.get('/id/:id', PersonajesController.getById);
router.get('/name/:name', PersonajesController.getByName);
router.get('/status/:status', PersonajesController.getByStatus);
router.get('/gender/:gender', PersonajesController.getByGender);
router.get('/origin/:origin', PersonajesController.getByOrigin);
router.get('/image/:image', PersonajesController.getByImage);
router.post('/', PersonajesController.create);
router.put('/:id', PersonajesController.update);
router.delete('/:id', PersonajesController.delete);

module.exports = router;