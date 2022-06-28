const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/clientes', (req, res)=>{     
    conexion.query('SELECT * FROM clientes',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('clientes.ejs', {results:results});            
        }   
    })
})

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

router.get('/inventario', (req, res)=>{     
    conexion.query('SELECT * FROM inventario',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('inventario.ejs', {results:results});            
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

router.get('/ventas', (req, res)=>{     
    conexion.query('SELECT * FROM ventas',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('ventas.ejs', {results:results});            
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

const crud = require('./controllers/crud');
const connection = require('./database/db');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;

