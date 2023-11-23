const express= require('express')
const app= express()

//Importar conexion MongoDB
const archivoBD=require('./conexion')
app.get('/' , (req,res) =>{
    res.end('Bienvenid');
})
//Conf server
app.listen(5000,function(){
console.log('El servidor node está corriendo adecuadamente');
})