const {Model, DataTypes} = require("sequelize");

module.exports = class Brukere extends Model { // Hva du referer til i koden
    static init(sequelize) {
        return super.init({
            name: { // Key i database
                type: DataTypes.STRING, // Hva verdien lagres som
            },
            role:{
                type:DataTypes.STRING
            }
        },
        {
            tableName: "Brukere", // Hva den heter i database
            sequelize // Referer til det du brukte export på i den første delen jeg sente
        })
    }
}