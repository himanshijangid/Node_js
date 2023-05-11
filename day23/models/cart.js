const Sequelize = require('sequelize');
 const sequelize = require('../util/database');

 const Cart = sequelize.define('cart', {
    id :{
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
    }, 
     quantity: Sequelize.INTEGER
 });
 module.exports = Cart;