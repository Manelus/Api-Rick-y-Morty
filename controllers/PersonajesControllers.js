//Importo modelo de datos
const personajes = require('../Models/PersonajesModels');

const PersonajesController = {};

PersonajesController.getAll = (req, res) => {
    res.json(personajes.findAll());
};
PersonajesController.getById = (req, res) => {
    const id = req.params.id;
    res.json(personajes.findById(id));
};
PersonajesController.getByName = (req, res) => {
    const name = req.params.name;
    res.json(personajes.findByName(name));
};
PersonajesController.getByStatus = (req, res) => {
    const status = req.params.status;
    res.json(personajes.findByStatus(status));
};
PersonajesController.getByGender = (req, res) => {
    const gender = req.params.gender;
    res.json(personajes.findByGender(gender));
};
PersonajesController.getByOrigin = (req, res) => {
    const origin = req.params.origin;
    res.json(personajes.findByOrigin(origin));
};
PersonajesController.getByImage = (req, res) => {
    const image = req.params.image;
    res.json(personajes.findByImage(image));
};
PersonajesController.create = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const status = req.body.status;
    const gender = req.body.gender;
    const origin = req.body.origin;
    const image = req.body.image;
    const personaje = {id, name, status, gender, origin, image};
    res.json(personajes.post(personaje));
};
PersonajesController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(PersonajesModel.update({id, ...body}));
};
PersonajesController.delete = (req, res) => {
    const {id} = req.params;
    res.json(PersonajesModel.delete(id));
};
module.exports = PersonajesController;