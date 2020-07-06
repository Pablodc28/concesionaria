
//rutas de sucursales
//  /sucursales
//  /sucursales/:sucursal

//express
const express = require('express');
const router = express.Router();

const sucursalController = require('../controllers/sucursalesController')

router.get('/',sucursalController.index);
router.get('/:NombreSucursal',sucursalController.detalle);



module.exports = router;