const Productos = require("./Producto");
const Inventario = require("./Inventario");

const Impuestos = 0.08;
let total = 0;
let totalImpu = 0;
const producto = [];
const p = function (idP, cantidadP, precioP, subtotal, impuestosST, total) {
  this.idP = idP;
  this.cantidadP = cantidadP;
  this.precioP = precioP;
  this.subtotal = subtotal;
  this.impuestosST = impuestosST;
  this.total = total;
};

const agregarProducto = function (id, cantidad) {
  Inventario.modificarReservaM(id, cantidad, "Reservado");
  let productoAGREGADO = new p(
    Productos.leerProductoM(id).Id,
    cantidad,
    Productos.leerProductoM(id).Precio,
    Productos.leerProductoM(id).Precio * cantidad,
    Productos.leerProductoM(id).Precio * cantidad * Impuestos,
    Productos.leerProductoM(id).Precio * cantidad +
      Productos.leerProductoM(id).Precio * cantidad * Impuestos
  );
  producto.push(productoAGREGADO);
  return productoAGREGADO;
};

//agregarProducto(1, 2);
//agregarProducto(2, 2);

const totalCPM = function () {
  for (let i = 0; i < producto.length; i++) {
    total = total + producto[i].subtotal + producto[i].impuestosST;
  }
  return total;
};
const totalImpM = function () {
  for (let i = 0; i < producto.length; i++) {
    totalImpu = totalImpu + producto[i].impuestosST;
  }
  return totalImpu;
};
const obtenerProductosCPM = function () {
  return producto;
};

const CPM = function (producto) {
  totalCPM();
  totalImpM();
  return {
    producto: producto,
    impuestos: totalImpu,
    total: total,
  };
};
const eliminarCompra = function (id) {
  for (let i = 0; i < producto.length; i++) {
    if (producto[i].idP == id) {
      const index = producto.findIndex((x) => x.idP === id);
      producto.splice(index, 1);
      return "Producto eliminado";
    }
  }
};
const leerCompra = function () {
  if (producto.length != 0) {
    return producto;
  } else return "no hay productos en el carrito";
  //eturn producto.length;
};
//CPM(producto);
//console.log(CPM(producto))
exports.totalCPM = totalCPM;
exports.CPM = CPM;
exports.agregarProductoM = agregarProducto;
exports.eliminarCompra = eliminarCompra;
exports.obtenerProductosCPM = obtenerProductosCPM;
exports.leerCompra = leerCompra;
