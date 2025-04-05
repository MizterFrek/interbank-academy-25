// Esta clase tiene el objetivo de manipular la coleccion de objetos tipo Transaccion 
// y relalizar operaciones respectivas a esa coleccion.

class Transacciones {

    // Se instancia el servicio con la propiedad transacciones vacia
    constructor(data = []) {
        this.transacciones = Array.from(data); 
    }
    
    // Funcion para agregar una transaccion nueva en memoria
    pushTransaccion(transaccion) {
        this.transacciones.push({
            id: parseInt(transaccion.id),
            tipo: transaccion.tipo,
            monto: parseFloat(transaccion.monto),
        });
    }

    // Funcion para calcular el balance final de todas las transacciones guardadas en memoria
    calcularBalanceFinal() {
        let debito = 0;
        let credito = 0;
    
        const operator = {
            "Crédito": (monto) => credito += monto,
            "Débito": (monto) => debito += monto,
            default: () => {},
        };
    
        this.transacciones.map(({tipo,monto}) => operator[tipo](monto) || operator.default());
        return  (credito - debito).toFixed(2);
    }
    
    // Funcion para buscar la mayor transaccion guardada en memoria
    buscarMayorTransaccion() {
        return [... this.transacciones].reduce((max, item) => item.monto > max.monto ? item : max, { id: 0, monto: 0 });
    }
    
    // Funcion para contar el numero de transacciones por Tipo
    contarTransaccionesPorTipo() {
        let nDebito = 0;
        let nCredito = 0;
    
        const operator = {
            "Crédito": () => nCredito++,
            "Débito": () => nDebito++,
            default: () => {},
        };
        
        this.transacciones.map(({tipo}) => operator[tipo]() || operator.default());
    
        return { nDebito, nCredito };
    }
    
    obtenerReporte() {
        // Se ejecutan las funciones necesarias para obtener los datos necesarios en el tipo de Reporte 
        const { id, monto } = this.buscarMayorTransaccion();
        const { nDebito, nCredito } = this.contarTransaccionesPorTipo();
        const balance = this.calcularBalanceFinal();

        return `
        Reporte de Transaciones
        ----------------------------------------
        Balance Final: ${balance}
        Transacción de Mayor Monto: ID ${id} - ${monto}
        Conteo de Transacciones: Crédito: ${nCredito} - Débito: ${nDebito}
        `;
    }
}

module.exports = Transacciones;