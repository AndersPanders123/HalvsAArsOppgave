const express = require('express')
const sequelize = require("./database") // Dette er den første greia i meldingen igjen
const Brukere = require("./models/brukere")
const Items = require("./models/items"); // hent in modellen
const app = express()
const port = 3000

Brukere.init(sequelize) // Legg til ordre i database
Brukere.sync() // Gjør at strukturen er lik. Det er et optional parameter her som heter "force". Om den er True vil den slette innholden og lage et nytt table med den oppdaterte formaten du lager i models
Items.init(sequelize) // Legg til ordre i database
Items.sync() 

app.use(express.static('public'))
app.get("/", (req, res)=> {
  res.send("hello World")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



