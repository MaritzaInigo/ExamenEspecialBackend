const Productos = require("./CarritoCompras");
const Clientes = require("./Cliente");
const ventas = [];

let subV = 0;
let impV = 0;
const productosImpYSUB = function () {
  const p = Productos.obtenerProductosCPM();
  for (let i = 0; i < p.length; i++) {
    subV = subV + p[i].subtotal;
    impV = impV + p[i].impuestosST;
  }
};
const ventaR = function (productoVR, clienteVR) {
  this.productoVR = productoVR;
  this.clienteVR = clienteVR;
};
const crearVentaM = function (producto, cliente) {
  productosImpYSUB();
  ventas.push(new ventaR(producto, cliente));
};
const comprobarCliente = function (cliente) {
  if (Clientes.consultarClienteM(cliente).Nombre == cliente) {
    return cliente.no;
  }
};
const verVentaC = function (cliente) {
  crearVentaM(Productos.obtenerProductosCPM(), cliente); //comprobarCliente(cliente));
  return ventas;
};
exports.crearVentaM = crearVentaM;
exports.verVentaC = verVentaC;
