const express = require('express');
const router = express.Router();

const productoCtrl = require('../controllers/productoControllers.js')
 
router.get('/', productoCtrl.traerProductos);
router.get('/:id', productoCtrl.traerProducto);
router.post('/', productoCtrl.crearProducto);
router.put('/:id', productoCtrl.actualizarProducto);
router.delete('/:id', productoCtrl.borrarProducto);

module.exports = router;