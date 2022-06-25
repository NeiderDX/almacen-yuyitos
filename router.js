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


module.exports = router;

