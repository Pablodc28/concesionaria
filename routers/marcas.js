//express
const express = require('express');
const router = express.Router();

const MarcaController = require('../controllers/marcasController')

router.get('/',MarcaController.index);
router.get('/:NombreDeMarca',MarcaController.detalleDeMarca);
//router.get('/bio/:id/:ok?',MarcaController.bio);


module.exports = router;