//express
const express = require('express');
const app = express();

//rutas
const routeHome = require('./routers/home');
const routeSucursales = require('./routers/sucursales');
const routeMarcas = require('./routers/marcas');
const routeAutos = require('./routers/autos');

//servidor
app.listen(3030,()=>console.log("El servidor esta funcionando en el puerto 3030"));

//uso los módulos de rutas que se ingresaran en la url del navegador como ya determino el tecto
//ejemplo sucursales em el archivo ruta no ingreso este texto "sucursales" solo la barra invertida /
app.use('/',routeHome);
app.use('/sucursales',routeSucursales);
app.use('/marcas',routeMarcas);
app.use('/autos',routeAutos);