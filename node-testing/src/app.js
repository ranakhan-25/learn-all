const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const app = express();

app.use(cors());
app.use(express.json())

app.use("/api",userRouter)



app.use((req, res, next) => {
  return res.json({message:"router is not found", status:404})
});

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
    status:500
  })
})


module.exports = app;
