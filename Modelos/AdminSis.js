const administrador = function (Nombre, email, pass) {
  this.Nombre = Nombre;
  this.email = email;
  this.pass = pass;
};
const administradores = [
  new administrador("Conrado", "Conrado.inigo@gmail.com", "con123"),
  new administrador("maria silva", "msp7@gmail.com", "mar123"),
];
//Funcion para agregar un admin
const altaAdmin = function (nombre, email, pass) {
  administradores.push(new administrador(nombre, email, pass));
  return "Administrador agregado";
};
//funcion para consultar todos los admin registrados
const consultarAdministradores = function () {
  return administradores;
};
//funcion para eliminar un cliente
const bajaAdmin = function (Nombre) {
  for (let i = 0; i < administradores.length; i++) {
    if (administradores[i].Nombre === Nombre) {
      const index = administradores.findIndex((x) => x.Nombre === Nombre);
      administradores.splice(index, 1);
      return "Admin eliminado";
    }
  }
};
/*altaAdmin("Vanessa", "Vanessais@uabc.edu.mx");
consultarAdministradores();
bajaAdmin("Maritza")
*/
exports.altaAdminM = altaAdmin;
exports.consultarAdministradoresM = consultarAdministradores;
exports.bajaAdminM = bajaAdmin;
