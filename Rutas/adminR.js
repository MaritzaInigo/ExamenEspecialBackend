const express = require("express");
const router = express.Router();
const admin = require("../Controladores/Admin");

router.get("/", (req, res) => {
  res.send(`API ADMINISTRADORES`);
});

router.get("/read", admin.consultarAdministradoresC);
router.post("/create/:nombre/:email/:pass", admin.altaAdminC);
router.delete("/delete/:nombre", admin.bajaAdminC);
module.exports = router;
