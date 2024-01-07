const { Sequelize } = require('sequelize')


module.exports = new Sequelize({
  storage:"./db.sqlite", // Path til database filen din
  dialect: 'sqlite',
  logging:true 
});