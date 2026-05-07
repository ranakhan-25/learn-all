const express = require("express");
const app = express()
const cors = require("cors");
const { model } = require("mongoose");


app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
  
})

app.use((req, res, next) => {
  res.json({message:"router is not found", status:404})
})

module.exports = app;