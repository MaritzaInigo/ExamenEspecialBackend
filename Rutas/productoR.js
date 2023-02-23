const express = require("express");
const router = express.Router();
const productos = require("../Controladores/Productos.js");

router.get("/", (req, res) => {
  res.send(`API PRODUCTOS`);
});

router.get("/read", productos.leerTodosProductosC);
router.get("/read/:id", productos.leerProductoC);
router.post("/create/:id/:sku/:des/:uni/:cost/:prec", productos.crearProductoC);
router.patch(
  "/update/:id/:sku/:des/:uni/:cost/:prec",
  productos.modificarProductoC
);
router.put("/update/:id/:uni", productos.modificarUnidadProductoC);
router.delete("/delete/:id", productos.eliminarProductoC);

module.exports = router;
