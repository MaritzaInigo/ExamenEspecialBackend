const express = require("express");
const router = express.Router();
const carritoCOMRPA = require("../Controladores/CarritoCompra");
router.get("/", (req, res) => {
  res.send(`API carritoCompra`);
});
router.get("/read", carritoCOMRPA.leerCompra);
router.post("/create/:id/:cantidad", carritoCOMRPA.CrearCompra);
router.delete("/delete/:id", carritoCOMRPA.EliminarCompra);
module.exports = router;
