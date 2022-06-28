const connection = require('../database/db');

//Guardar registro
exports.save  = (req, res) => {
    const nombre_cli = req.body.nombre_cli;
    const deuda_cli = req.body.deuda_cli;
    const fecha_cli = req.body.fecha_cli;
    connection.query('INSERT INTO clientes SET ?', {nombre_cli:nombre_cli, deuda_cli:deuda_cli, fecha_cli:fecha_cli}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect ('create_cli');
        }
    })
}

//Editar registro
exports.update = (req, res) => {
    const id_cli = req.body.id_cli;
    const nombre_cli = req.body.nombre_cli;
    const deuda_cli = req.body.deuda_cli;
    const fecha_cli = req.body.fecha_cli;
    connection.query('UPDATE clientes SET ? WHERE id_cli = ?',[{nombre_cli:nombre_cli, deuda_cli:deuda_cli, fecha_cli:fecha_cli}, id_cli], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('create_cli');         
        }
    })
}














