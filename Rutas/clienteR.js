const express = require("express");
const router = express.Router();
const cliente = require("../Controladores/Cliente");

router.get("/", (req, res) => {
  res.send(`API CLIENTES`);
});

router.get("/read", cliente.consultarClientesC);
router.get("/read/:nombre", cliente.consultarClienteC);
router.post("/create/:nombre/:email/:pass", cliente.altaClienteC);
router.patch("/update/:nombre/:nombreN/:email", cliente.modificarClienteC);
router.put("/update/:nombre/:contra", cliente.modificarContraC);
router.delete("/delete/:nombre", cliente.bajaClienteC);
router.get("/login/:nombre/:contra", cliente.loginC);
module.exports = router;
