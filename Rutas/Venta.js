const express = require("express");
const router = express.Router();
const ventas = require("../Controladores/Venta");

router.get("/", (req, res) => {
  res.send(`API VENTAS`);
});
router.get("/read/:cliente", ventas.verVentasC);

module.exports = router;
