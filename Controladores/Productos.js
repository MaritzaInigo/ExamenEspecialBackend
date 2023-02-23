const Producto = require("../Modelos/Producto.js");

const crearProductoC = async function (req, res) {
  await res.json(
    Producto.crearProductoM(
      parseInt(req.params.id),
      req.params.sku,
      req.params.des,
      req.params.uni,
      parseInt(req.params.cost),
      parseInt(req.params.prec)
    )
  );
};
const leerProductoC = async function (req, res) {
  //return req.params.id;
  await res.json(Producto.leerProductoM(parseInt(req.params.id)));
};
const leerTodosProductosC = async function (req, res) {
  await res.json(Producto.leerTodosProductosM());
};
const modificarProductoC = async function (req, res) {
  await res.json(
    Producto.modificarProductoM(
      parseInt(req.params.id),
      parseInt(req.params.id),
      req.params.sku,
      req.params.des,
      req.params.uni,
      parseInt(req.params.cost),
      parseInt(req.params.prec)
    )
  );
};
const modificarUnidadProductoC = async function (req, res) {
  await res.json(
    Producto.modificarUnidadProductoM(parseInt(req.params.id), req.params.uni)
  );
};
const eliminarProductoC = async function (req, res) {
  await res.json(Producto.eliminarProductoM(parseInt(req.params.id)));
};
exports.crearProductoC = crearProductoC;
exports.leerProductoC = leerProductoC;
exports.leerTodosProductosC = leerTodosProductosC;
exports.modificarProductoC = modificarProductoC;
exports.modificarUnidadProductoC = modificarUnidadProductoC;
exports.eliminarProductoC = eliminarProductoC;
