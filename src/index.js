// Importanto los modulos y utilidades necesarios.
const fs = require('node:fs')
const csv = require('csv-parser')
const Transacciones = require('./services/Transacciones');
const Consola = require('./services/Consola');

// Se crea una instancia del Servicio que se encargara de manipular la informacion de las transacciones
const transacciones = new Transacciones(); 

// Se referencia el archivo mediante el argumento de la instruccion o por defecto se utiliza el data.csv
const file = process.argv[2] ?? './data.csv';

fs.createReadStream(file) // Se lee el archivo por partes
  .pipe(csv())            // Se utiliza el paquete csvParser para poder interpretar el archivo csv
  .on('data', row => transacciones.pushTransaccion(row))  // Por cada fila que se lea del archivo se agrega a la memoria del Servicio de Transacciones
  .on('end',() => Consola.imprimir(transacciones.obtenerReporte())) // Al completar la lectura de todas las filas se constuye el reporte e imprime en consola
;

 