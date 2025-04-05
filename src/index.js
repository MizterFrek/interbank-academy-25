const fs = require('node:fs')
const csv = require('csv-parser')
const Transacciones = require('./services/Transacciones');
const Consola = require('./services/Consola');

const transacciones = new Transacciones([]);
const file = process.argv[2] ?? './data.csv'

fs.createReadStream(file)
  .pipe(csv())
  .on('data', row => transacciones.pushTransaccion(row))
  .on('end',() => Consola.imprimir(transacciones.mensaje()))
;

 