const {Sequelize} = require('sequelize');

const db = new Sequelize('productos_db','root','root',{
host: 'localhost',
dialect :'mysql',
port:3306
});

module.exports = db;