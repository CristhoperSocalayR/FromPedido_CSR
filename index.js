/*Importar Librerias */
var express = require("express");
var mysql = require("mysql");
var cors =  require("cors");
const res = require("express/lib/response");
var app = express();

/*Configuracionse */
app.use(express.json());
app.use(cors());

/*Conexion a Base de Datos*/
var conexion = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "dbRestaurante"
    }
);

conexion.connect(function(error){
        if(error){
            throw error;
        } else{
            console.log("Conexion Exitosa")
        }
    }
);

const port = process.env.PUERTO || 3000;
app.listen(
    port, function() {
    console.log("Servidor funcionando en puerto: "+ port)
    }
);

// LOCALHOST:3000/api/pedido/
app.post(
    "/api/pedido",(req, res) =>{
        let data = {
            userped: req.body.USERPED,
            emausped: req.body.EMAUSPED,
            celusped: req.body.CELUSPED,
            msgped: req.body.MSGPED,
        }
    let sql = "INSERT INTO pedido SET ?";
    conexion.query(
        sql, data, function(error, resultados){
            if(error){
                throw error;
        } else {
            console.log(data),
            res.send(data)
        }
        }
     );
    }
);
