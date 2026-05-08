const http = require("http")
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("Hello world")
  }
  if (req.url === "/about") {
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("Hello world this is about page")
  }
})

server.listen(4000, () => {
  console.log("server is runing on port 4000")
})

