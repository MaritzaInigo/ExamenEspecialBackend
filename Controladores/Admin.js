const admin = require("../Modelos/AdminSis");
const altaAdminC = async function (req, res) {
  await res.json(
    admin.altaAdminM(req.params.nombre, req.params.email, req.params.pass)
  );
};
const bajaAdminC = async function (req, res) {
  await res.json(admin.bajaAdminM(req.params.nombre));
};
const consultarAdministradoresC = async function (req, res) {
  await res.json(admin.consultarAdministradoresM());
};

exports.altaAdminC = altaAdminC;
exports.bajaAdminC = bajaAdminC;
exports.consultarAdministradoresC = consultarAdministradoresC;
