const connection = require('../database/db');

exports.save  = (req, res) => {
    const nombre_cli = req.body.nombre_cli;
    const deuda_cli = req.body.deuda_cli;
    const fecha_cli = req.body.fecha_cli;
    connection.query('INSERT INTO clientes SET ?', {nombre_cli:nombre_cli, deuda_cli:deuda_cli, fecha_cli:fecha_cli}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect ('/');
        }
    })
}















