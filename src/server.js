const express = require("express");
const server = express()


//configurar pasta pública
server.use(express.static("Public"))

//utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//configurar caminhos da minha aplicação
//página inicial
server.get("/", (req,res) =>{
 return res.render("index.html")
})

server.get("/cadastro", (req,res) =>{
 return res.render("cadastro.html")
})

server.get("/search", (req,res) =>{
  return res.render("search-cadastro.html")
})
//ligar o servidor
server.listen(3333)