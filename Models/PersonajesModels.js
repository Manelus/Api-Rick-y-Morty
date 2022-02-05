let db = require('../db');

PersonajesModel = {};

//Defino las funciones que se ejecutaran en los endpoints
PersonajesModel.findAll = () => db;

PersonajesModel.findById = (id) => db.find(personaje => personaje.id == id);

PersonajesModel.findByName = (name) => db.find(personaje => personaje.name == name);

PersonajesModel.findByStatus = (status) => db.find(personaje => personaje.status == status);

PersonajesModel.findByGender = (gender) => db.find(personaje => personaje.gender == gender);

PersonajesModel.findByOrigin = (origin) => db.find(personaje => personaje.origin == origin);

PersonajesModel.findByImage = (image) => db.find(personaje => personaje.image == image);

PersonajesModel.post = (newPersonaje) => {
    db.push(newPersonaje);
    return newPersonaje;
}

PersonajesModel.update = (newPersonaje) => {
    let personajes = db.filter(personaje => personaje.id != newPersonaje.id);
    personaje.push(newPersonaje);
    db = personajes;
    return newPersonaje;
}

PersonajesModel.delete = (id) => {
    let personajes = db.filter(personaje => personaje.id != id);
    db = personajes;
    return `Registro ${id} eliminado correctamente`;
}

//Exporto la funcionalidad del modelo de datos
module.exports = PersonajesModel;