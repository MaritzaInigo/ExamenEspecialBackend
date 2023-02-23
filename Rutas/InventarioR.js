const express = require("express");
const router = express.Router();
const inventario = require("../Controladores/Inventario");

router.get("/", (req, res) => {
  res.send(`API INVENTARIO`);
});

router.get("/read", inventario.leerInventarioC);
router.get("/read/:id", inventario.leeInventarioProductoC);
router.post(
  "/create/:id/:existencia/:reserva/:minimoEx/:estado",
  inventario.creaInventarioC
);
router.put("/update/:id/:reserva/:estado", inventario.modificarReservaC);
router.put("/update/:id/:estado", inventario.modificarEstadoPC);
module.exports = router;
