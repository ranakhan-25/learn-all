const app = require("./app");
const  databaseConnect  = require("./config");
const port = process.env.PORT || 4001;
app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`)

  await databaseConnect()
  
})