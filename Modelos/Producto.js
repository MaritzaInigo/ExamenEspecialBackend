const producto = function (Id, SKU, Descripcion, Unidad, Costo, Precio) {
  this.Id = Id;
  this.SKU = SKU;
  this.Descripcion = Descripcion;
  this.Unidad = Unidad;
  this.Costo = Costo;
  this.Precio = Precio;
};
let Productos = [
  new producto(1, "BOCSI", "Bocina con silueta", "caja", 200, 500),
  new producto(
    2,
    "CAM",
    "Camisetas para eventos",
    "Paquete individual",
    100,
    200
  ),
  new producto(3, "DUE", "Duende navideno", "caja", 30, 150),
  new producto(4, "ELEBE", "Elefante para bebes", "caja", 400, 600),
  new producto(5, "SUENAV", "Sueter Navideno", "Paquete individual", 150, 300),
  new producto(6, "SO-CO-500", "Soda cocacola 500ml", "Botella", 10, 20),
];
//CREATE, READ, UPDATE, DELETE,
// Funcion para crear productos.
const crearProducto = function (Id, SKU, Descripcion, Unidad, Costo, Precio) {
  Productos.push(new producto(Id, SKU, Descripcion, Unidad, Costo, Precio));
  return "PRODUCTO CREADO";
};
//funcion que muestra todos los productos
const leerTodosProductos = function () {
  return Productos;
};
//Funcion que muestra el producto segun el ID dado
const leerProducto = function (id) {
  for (let i = 0; i < Productos.length; i++) {
    if (Productos[i].Id === id) {
      return Productos[i];
    }
  }
};
const leerPrecioProducto = function (id) {
  for (let i = 0; i < Productos.length; i++) {
    if (Productos[i].Id === id) {
      return Productos[i].Precio;
    }
  }
};
//Funcnion para modificar la totalidad del producto segun el ID DADO
const modificarProducto = function (
  id,
  ID2,
  SKU,
  Descripcion,
  Unidad,
  Costo,
  Precio
) {
  for (let i = 0; i < Productos.length; i++) {
    if (Productos[i].Id === id) {
      Productos[i].Id = ID2;
      Productos[i].SKU = SKU;
      Productos[i].Descripcion = Descripcion;
      Productos[i].Unidad = Unidad;
      Productos[i].Costo = Costo;
      Productos[i].Precio = Precio;
      return "Producto modificado";
    }
  }
};
//FUNCION PARA MODIFICAR LA UNIDAD DEL PRODUCTO SEGUN SU ID
const modificarUnidadProducto = function (id, Unidad) {
  for (let i = 0; i < Productos.length; i++) {
    if (Productos[i].Id === id) {
      Productos[i].Unidad = Unidad;
      return "Unidad de producto actualizadas";
    }
  }
};
//FUNCION PARA ELIMINAR UN PRODUCTO DADO SU ID
const eliminarProducto = function (id) {
  for (let i = 0; i < Productos.length; i++) {
    if (Productos[i].Id == id) {
      const index = Productos.findIndex((x) => x.Id === id);
      Productos.splice(index, 1);
      return "Producto eliminado";
    }
  }
};

console.log(leerProducto(1));

exports.crearProductoM = crearProducto;
exports.leerTodosProductosM = leerTodosProductos;
exports.leerProductoM = leerProducto;
exports.leerPrecioProductoM = leerPrecioProducto;
exports.modificarProductoM = modificarProducto;
exports.modificarUnidadProductoM = modificarUnidadProducto;
exports.eliminarProductoM = eliminarProducto;
/*
async fucntion(req,res){
  await res.jsoon(funcion.)
}
*/
