const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');

const app = express();
const PORT = process.env.PORT || 3000; //Configuramos puerto heroku

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//Rutas
app.get('/', (req, res) => {res.send('Bienvenidos a Express');});
const router = require('./router.js');
app.use(router);
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
});