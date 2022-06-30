const connection = require('../database/db');

//Guardar registro CLIENTE
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

//Editar registro CLIENTE
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


//Guardar registro VENTAS
exports.save_ventas  = (req, res) => {
    const producto_ventas = req.body.producto_ventas;
    const tipo_ventas = req.body.tipo_ventas;
    const cantidad_ventas = req.body.cantidad_ventas;
    const valor_ventas = req.body.valor_ventas;
    connection.query('INSERT INTO ventas SET ?', {producto_ventas:producto_ventas, tipo_ventas:tipo_ventas, cantidad_ventas:cantidad_ventas, valor_ventas:valor_ventas}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect ('ventas');
        }
    })
}


//Editar registro VENTAS
exports.update_ventas = (req, res) => {
    const id_ventas = req.body.id_ventas;
    const producto_ventas = req.body.producto_ventas;
    const tipo_ventas = req.body.tipo_ventas;
    const cantidad_ventas = req.body.cantidad_ventas;
    const valor_ventas = req.body.valor_ventas;
    connection.query('UPDATE ventas SET ? WHERE id_ventas = ?',[{producto_ventas:producto_ventas, tipo_ventas:tipo_ventas, cantidad_ventas:cantidad_ventas, valor_ventas:valor_ventas}, id_ventas], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('ventas');         
        }
    })
}

//Guardar registro INVENTARIO
exports.save_inventario  = (req, res) => {
    const nombre_inv = req.body.nombre_inv;
    const tipo_inv = req.body.tipo_inv;
    const cantidad_inv = req.body.cantidad_inv;
    const valor_inv = req.body.valor_inv;
    connection.query('INSERT INTO inventario SET ?', {nombre_inv:nombre_inv, tipo_inv:tipo_inv, cantidad_inv:cantidad_inv, valor_inv:valor_inv}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect ('ventas');
            res.redirect ('inventario');
        }
    })
}


//Editar registro INVENTARIO
exports.update_inventario = (req, res) => {
    const id_inv = req.body.id_inv;
    const nombre_inv = req.body.nombre_inv;
    const tipo_inv = req.body.tipo_inv;
    const cantidad_inv = req.body.cantidad_inv;
    const valor_inv = req.body.valor_inv;
    connection.query('UPDATE inventario SET ? WHERE id_inv = ?',[{nombre_inv:nombre_inv, tipo_inv:tipo_inv, cantidad_inv:cantidad_inv, valor_inv:valor_inv}, id_inv], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('ventas');   
            res.redirect ('inventario');      
        }
    })
}






