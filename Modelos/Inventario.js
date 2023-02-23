const producto = require("./Producto");
const Inventario = function (ID, existencia, reserva, minimoEx, estado) {
  this.ID = ID;
  this.existencia = existencia;
  this.reserva = reserva;
  this.minimoEx = minimoEx;
  this.estado = estado;
};

const inventarioP = [
  new Inventario(producto.leerProductoM(1).Id, 10, 0, 1, "Existencia"),
  new Inventario(producto.leerProductoM(2).Id, 10, 0, 1, "Existencia"),
];
const creaInventarioM = function (ID, existencia, reserva, minimoEx, estado) {
  inventarioP.push(
    new Inventario(
      producto.leerProductoM(ID).Id,
      existencia,
      reserva,
      minimoEx,
      estado
    )
  );
  return "INVENTARIO AGREGADO";
};
const consultarInventarioM = function () {
  return inventarioP;
};
const consultarInventarioProductoM = function (id) {
  for (let i = 0; i < inventarioP.length; i++) {
    if (inventarioP[i].ID === id) {
      return inventarioP[i];
    }
  }
};
const modificarEstadoM = function (id, Estado) {
  for (let i = 0; i < inventarioP.length; i++) {
    if (inventarioP[i].ID == id) {
      inventarioP[i].estado = Estado;
      return inventarioP[i];
    }
  }
};
const modificarReservaM = function (id, Reserva, Estado) {
  for (let i = 0; i < inventarioP.length; i++) {
    if (inventarioP[i].ID == id) {
      if (inventarioP[i].existencia >= Reserva) {
        inventarioP[i].reserva = Reserva;
        modificarExistenciaM(id, inventarioP[i].existencia - Reserva);
        modificarEstadoM(id, Estado);
        return inventarioP[i];
      } else {
        return `No existe la cantidad suficiente para reservar el producto, hay ${inventarioP[i].existencia} Productos`;
      }
    }
  }
};
const modificarExistenciaM = function (id, Existencia) {
  for (let i = 0; i < inventarioP.length; i++) {
    if (inventarioP[i].ID === id) {
      inventarioP[i].existencia = Existencia;
      return inventarioP[i];
    }
  }
};
console.log(modificarEstadoM(1, "reserva"));
exports.creaInventarioM = creaInventarioM;
exports.consultarInventarioM = consultarInventarioM;
exports.consultarInventarioProductoM = consultarInventarioProductoM;
exports.modificarEstadoM = modificarEstadoM;
exports.modificarReservaM = modificarReservaM;
exports.modificarExistenciaM = modificarExistenciaM;
