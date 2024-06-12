import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

// Ejemplo de uso
const cliente1 = new Cliente("Javiera", 100000, 20000);
const impuestosCliente1 = new Impuestos(cliente1);
console.log(`El impuesto total a pagar por ${cliente1.nombre} es: ${impuestosCliente1.calcularImpuestoTotal()}`);
