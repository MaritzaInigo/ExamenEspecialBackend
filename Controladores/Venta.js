const ventas = require("../Modelos/Venta");
const verVentasC = async function (req, res) {
  await res.json(ventas.verVentaC(req.params.cliente));
};
module.exports.verVentasC = verVentasC;
