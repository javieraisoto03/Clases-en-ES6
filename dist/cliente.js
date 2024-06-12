class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
        this._nombre = nombre;
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(monto) {
        this._montoBrutoAnual = monto;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(deducciones) {
        this._deducciones = deducciones;
    }

    calcularImpuesto() {
        return (this._montoBrutoAnual - this._deducciones) * 0.21;
    }
}

export default Cliente;
