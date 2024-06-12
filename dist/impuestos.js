import Cliente from './cliente.js';

class Impuestos {
    constructor(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        } else {
            throw new Error("Debe proporcionar una instancia de Cliente.");
        }
    }

    calcularImpuestoTotal() {
        return this._cliente.calcularImpuesto();
    }
}

export default Impuestos;
