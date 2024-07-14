const db = require('../data/db.js');
const {DataTypes} = require('sequelize');

const productosModel = db.define ('productos',{
    nombre : {type: DataTypes.STRING},
    descripcion : {type: DataTypes.STRING},
    precio : {type: DataTypes.INTEGER},
    stock : {type: DataTypes.INTEGER},
    image : {type: DataTypes.STRING}
})

module.exports = productosModel;