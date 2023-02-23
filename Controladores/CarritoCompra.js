const carritoC = require("../Modelos/CarritoCompras");

const CrearCompra = async function (req, res) {
  await res.json(
    carritoC.agregarProductoM(
      parseInt(req.params.id),
      parseInt(req.params.cantidad)
    )
    //
  );
};
const EliminarCompra = async function (req, res) {
  await res.json(
    carritoC.eliminarCompra(parseInt(req.params.id))
    //
  );
};
const leerCompra = async function (req, res) {
  await res.json(
    carritoC.leerCompra()
    //
  );
};
exports.CrearCompra = CrearCompra;
exports.EliminarCompra = EliminarCompra;
exports.leerCompra = leerCompra;
