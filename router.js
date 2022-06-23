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



module.exports = router;

