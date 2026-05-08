const express = require("express");
const app = express()
const cors = require("cors");


app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
  res.json({message:"hello world"})
})


app.use((req, res, next) => {
  res.json({message:"router is not found", status:404})
})
module.exports = app;