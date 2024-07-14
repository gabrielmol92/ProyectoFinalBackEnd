const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;
const productosRouter = require('./routes/productosRouter.js')
const db = require('./data/db.js');

app.use(cors())
app.use (express.json()) 

app.use ('/productos', productosRouter)

const conexiondb = async ()=>{
    try {
       await db.authenticate()
       console.log(`Conexion correcta a la base de datos`);
    } catch (error) {
       console.log(`el error es : ${error}`)
    }
   }
   
   app.listen(port,()=>{
       conexiondb()
       console.log(`Server on en el puerto ${port}`);
   })