const express = require("express");
const productos = require("./Rutas/productoR");
const ventas = require("./Rutas/Venta");
const admin = require("./Rutas/adminR");
const carrito = require("./Rutas/carritoCompras");
const cliente = require("./Rutas/clienteR");
const inventario = require("./Rutas/InventarioR");
const cors = require("cors");

const app = express();
//const port = 4000;
const fs = require("fs");
const https = require("https");
process.env.port = 4000;
const llavePrivada = fs.readFileSync("private.key");
const Certificado = fs.readFileSync("certificate.crt");

const credenciales = {
  key: llavePrivada,
  cert: Certificado,
  //  passphrase: "password",
};
const httpsServer = https.createServer(credenciales, app);
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send(
    `Acceder al API /Productos \n
     Acceder al API /Cliente\n Acceder al API /Administradores\nAcceder al API /CarritoCompras\nAcceder al API /Inventario\nAcceder al API /Venta`
  );
});
app.use("/Productos", productos);
//----------------------------------------------------------------------------------------------------------
app.use("/Administradores", admin);
//----------------------------------------------------------------------------------------------------
app.use("/Cliente", cliente);
//----------------------------------------------------------------------------------------------------
app.use("/Inventario", inventario);
//----------------------------------------------------------------------------------
app.use("/CarritoCompras", carrito);
//----------------------------------------------------------------------------------
app.use("/Venta", ventas);
//----------------------------------------------------------------------------------
httpsServer
  //app
  .listen(process.env.port, () => {
    console.log("Servidor escuchando por el puerto: # ", process.env.port);
    //db.authenticate().then(console.log("Base de datos conectada "));
    /* db.sequelize
       .sync()
       .then(() => {
         console.log("Base de datos Conectada");
       })
       .catch((err) => {
         console.log("Conexion a base de datos fallo: " + err.message);
       });
   }*/
  })
  .on("error", (err) => {
    console.log("Error al iniciar servidor : ", err);
  });
