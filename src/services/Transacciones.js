class Transacciones {

    constructor(data) {
        this.transacciones = Array.from(data);
    }
    
    pushTransaccion(transaccion) {
        this.transacciones.push({
            id: parseInt(transaccion.id),
            tipo: transaccion.tipo,
            monto: parseFloat(transaccion.monto),
        });
    }

    calcularBalanceFinal() {
        let debito = 0
        let credito = 0
    
        const operator = {
            "Crédito": (monto) => credito += monto,
            "Débito": (monto) => debito += monto,
            default: () => {},
        }
    
        this.transacciones.map(({tipo,monto}) => operator[tipo](monto) || operator.default());
        return  (credito - debito).toFixed(2)
    }
    
    buscarMayorTransaccion() {
        return [... this.transacciones].reduce((max, item) => item.monto > max.monto ? item : max, { id: 0, monto: 0 });
    }
    
    contarTransacciones() {
        let nDebito = 0
        let nCredito = 0
    
        const operator = {
            "Crédito": () => nCredito++,
            "Débito": () => nDebito++,
            default: () => {},
        }
        
        this.transacciones.map(({tipo}) => operator[tipo]() || operator.default());
    
        return { nDebito, nCredito };
    }
    
    mensaje() {
        const { id, monto } = this.buscarMayorTransaccion();
        const { nDebito, nCredito } = this.contarTransacciones();
        const balance = this.calcularBalanceFinal();

        return `
        Reporte de Transaciones
        ----------------------------------------
        Balance Final: ${balance}
        Transacción de Mayor Monto: ID ${id} - ${monto}
        Conteo de Transacciones: Crédito: ${nCredito} - Débito: ${nDebito}
        `
    }
}

module.exports = Transacciones;