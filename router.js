const express = require('express');
const router = express.Router();

const conexion = require('./database/db');


router.get('/proveedores', (req, res)=>{     
    conexion.query('SELECT * FROM proveedores',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('proveedores.ejs', {results:results});            
        }   
    })
})

router.get('/informes', (req, res)=>{     
    conexion.query('SELECT * FROM informes',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('informes.ejs', {results:results});            
        }   
    })
})



router.get('/pedidos', (req, res)=>{     
    conexion.query('SELECT * FROM pedidos',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('pedidos.ejs', {results:results});            
        }   
    })
})



router.get('/info_generada', (req, res)=>{     
    conexion.query('SELECT * FROM clientes',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('info_generada', {results:results});            
        }   
    })
})


//---------------------------> CRUD CLIENTES <--------------------------------

router.get('/create_cli', (req, res) => {
    conexion.query('SELECT * FROM clientes',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('create_cli.ejs', {results:results});            
        }   
    })
})

router.get('/create_cli/:id_cli', (req,res)=>{    
    const id_cli = req.params.id_cli;
    connection.query('SELECT * FROM clientes WHERE id_cli=?',[id_cli] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('create_cli', {clientes:results[0]});            
        }        
    });
});

router.get('/delete/:id_cli', (req, res) => {
    const id_cli = req.params.id_cli;
    connection.query('DELETE FROM clientes WHERE id_cli=?',[id_cli], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');             
        }
    });
});




//---------------------------> CRUD VENTAS <--------------------------------

router.get('/ventas', (req, res) => {
    conexion.query('SELECT * FROM ventas',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('ventas.ejs', {results:results});            
        }   
    })
})

router.get('/ventas/:id_ventas', (req,res)=>{    
    const id_ventas = req.params.id_ventas;
    connection.query('SELECT * FROM ventas WHERE id_ventas=?',[id_ventas] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('ventas', {ventas:results[0]});            
        }        
    });
});

router.get('/delete_ventas/:id_ventas', (req, res) => {
    const id_ventas = req.params.id_ventas;
    connection.query('DELETE FROM ventas',[id_ventas], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');             
        }
    });
});


//---------------------------> CRUD INVENTARIO <--------------------------------

router.get('/inventario', (req, res)=>{     
    conexion.query('SELECT * FROM inventario',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('inventario.ejs', {results:results});          
        }   
    })
})



router.get('/inventario/:id_inv', (req,res)=>{    
    const id_inv = req.params.id_inv;
    connection.query('SELECT * FROM inventario WHERE id_inv=?',[id_inv] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('ventas', {ventas:results[0]});            
        }        
    });
});

router.get('/delete_inventario/:id_inventario', (req, res) => {
    const id_inv = req.params.id_inv;
    connection.query('DELETE FROM inventario WHERE id_inv=?',[id_inv], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');             
        }
    });
});




const crud = require('./controllers/crud');
const connection = require('./database/db');

router.post('/save', crud.save);
router.post('/update', crud.update);

router.post('/save_ventas', crud.save_ventas);
router.post('/update_ventas', crud.update_ventas);

module.exports = router;

