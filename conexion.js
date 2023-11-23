const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/radar');
const objetobd=mongoose.connection
objetobd.on('connected', ()=>{console.log('Conexion correcta a mongodb')})
objetobd.on('Error', ()=>{console.log('Error en la conexion a mongodb')})

module.exports= mongoose
