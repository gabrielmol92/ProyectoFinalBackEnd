const { where } = require('sequelize');
const productoModel = require('../models/productoModel.js')
const productoCtrl = {}

productoCtrl.traerProductos = async (req, res) => {
    try {
  const productos = await productoModel.findAll();
  res.json(productos);      
    } catch (err) {
         res.json({message : err.message});
    }
}

productoCtrl.traerProducto = async (req, res) => {
    try {
       const producto = await productoModel.findByPk(req.params.id);
       res.json(producto); 
    } catch (error) {
        res.json({message : error.message});
    }
}

productoCtrl.crearProducto = async (req, res) => {
    try {
        await productoModel.create(req.body);
        res.json ({"message":"Registro creado correctamente"});
    } catch (error) {
       res.json({message : error.message}); 
    }
}

productoCtrl.actualizarProducto = async (req, res) => {
    try {
        await productoModel.update(req.body,{
            where : {id:req.params.id}
        });
        res.json ({"message":"Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message : error.message});
    }
}

productoCtrl.borrarProducto = async (req, res) => {
    try {
        await productoModel.destroy({
            where : {id:req.params.id}
        });
        res.json ({"message":"Registro borrado correctamente"}) 
    } catch (error) {
        res.json({message : error.message});
    }
}

module.exports = productoCtrl;