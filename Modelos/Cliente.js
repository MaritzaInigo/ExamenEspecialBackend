const cliente = function (Nombre, email, pass) {
  this.Nombre = Nombre;
  this.email = email;
  this.pass = pass;
};
const clienteLog = "";
const clientes = [
  new cliente("Maritza", "Maritza.inigo@uabc.edu.xm", "maritza123"),
  new cliente("Misael", "MJCS@outlook.com", "misael123"),
];
//Funcion para agregar un cliente
const altaClienteM = function (nombre, email, pass) {
  clientes.push(new cliente(nombre, email, pass));
  return "Cliente agregado";
};
//funcion para consultar todos los clientes registrados
const consultarClientesM = function () {
  return clientes;
};
//funcion para consultar un cliente en especifico
const consultarClienteM = function (Nombre) {
  let cliAux = "";
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].Nombre === Nombre) {
      return clientes[i];
    }
  }
  //return cli.encontrarClienteDB(Nombre);
};
//funcion para modificar el correo de un cliente
const modificarContraM = function (Nombre, contra) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].Nombre === Nombre) {
      clientes[i].pass = contra;
      return "Contrase;a modificada";
    }
  }
  //return clientesBD.actualizarCorreoDB(Nombre, email);
};
//funcion para modificar al cliente
const modificarClienteM = function (Nombre, NombreN, emailN) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].Nombre === Nombre) {
      clientes[i].Nombre = NombreN;
      clientes[i].email = emailN;
      return "cliente modificado";
    }
  }
};
//funcion para eliminar un cliente
const bajaClienteM = function (Nombre) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].Nombre === Nombre) {
      const index = clientes.findIndex((x) => x.Nombre === Nombre);
      clientes.splice(index, 1);
      return "Cliente eliminado";
    }
  }
  // return clientesBD.encontrarClienteDB(Nombre);
};
const login = function (Nombre, contras) {
  let ban = false;
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].Nombre === Nombre && clientes[i].pass === contras) {
      ban = true;
      clientelog = Nombre;
    }
  }
  return ban;
};

const ClienteloginRegistro = function () {
  return clienteLog;
};
// return clientesBD.encontrarClienteDB(Nombre);

//console.log(consultarClienteM());

//altaClienteM("Estefania", "estafaniais@ceu16.com");
/*consultarClientes();
consultarCliente('Misael');
modificarCliente('Estefania','Estefani','silvaani@gmail.com');
modificarCorreo('Maritza','Janethinigo@gmail.com');
bajaCliente('Estefani');
consultarClientes();*/
exports.altaClienteM = altaClienteM;
exports.consultarClienteM = consultarClienteM;
exports.consultarClientesM = consultarClientesM;
exports.modificarClienteM = modificarClienteM;
exports.modificarContraM = modificarContraM;
exports.bajaClienteM = bajaClienteM;
exports.login = login;
exports.ClienteloginRegistro = ClienteloginRegistro;
