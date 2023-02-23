const Inventario = require("../Modelos/Inventario");

const crearInventarioC = async function (req, res) {
  await res.json(
    Inventario.creaInventarioM(
      parseInt(req.params.id),
      parseInt(req.params.existencia),
      parseInt(req.params.reserva),
      parseInt(req.params.minimoEx),
      req.params.estado
    )
  );
};
const leeInventarioProductoC = async function (req, res) {
  await res.json(
    Inventario.consultarInventarioProductoM(parseInt(req.params.id))
  );
};
const leerInventarioC = async function (req, res) {
  await res.json(Inventario.consultarInventarioM());
};
const modificarEstadoPC = async function (req, res) {
  await res.json(Inventario.modificarEstadoM(req.params.id, req.params.estado));
};
const modificarReservaC = async function (req, res) {
  await res.json(
    Inventario.modificarReservaM(
      parseInt(req.params.id),
      parseInt(req.params.reserva),
      req.params.estado
    )
  );
};
exports.creaInventarioC = crearInventarioC;
exports.leeInventarioProductoC = leeInventarioProductoC;
exports.leerInventarioC = leerInventarioC;
exports.modificarEstadoPC = modificarEstadoPC;
exports.modificarReservaC = modificarReservaC;
