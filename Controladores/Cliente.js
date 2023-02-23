const cliente = require("../Modelos/Cliente");

const altaClienteC = async function (req, res) {
  await res.json(
    cliente.altaClienteM(req.params.nombre, req.params.email, req.params.pass)
  );
};
const consultarClienteC = async function (req, res) {
  await res.json(cliente.consultarClienteM(req.params.nombre));
};
const consultarClientesC = async function (req, res) {
  await res.json(cliente.consultarClientesM());
};
const modificarClienteC = async function (req, res) {
  await res.json(
    cliente.modificarClienteM(
      req.params.nombre,
      req.params.nombreN,
      req.params.email
    )
  );
};
const modificarContraC = async function (req, res) {
  await res.json(
    cliente.modificarContraM(req.params.nombre, req.params.contra)
  );
};
const bajaClienteC = async function (req, res) {
  await res.json(cliente.bajaClienteM(req.params.nombre));
};
const login = async function (req, res) {
  await res.json(cliente.login(req.params.nombre, req.params.contra));
};
exports.altaClienteC = altaClienteC;
exports.bajaClienteC = bajaClienteC;
exports.loginC = login;
exports.modificarClienteC = modificarClienteC;
exports.modificarContraC = modificarContraC;
exports.consultarClienteC = consultarClienteC;
exports.consultarClientesC = consultarClientesC;
