const express = require("express");
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurar pasta pública
server.use(express.static("Public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

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
  console.log(req.query)

 return res.render("cadastro.html")
})

server.post("/saveajuda", (req,res)=>{

  //console.log(req.body)

  //inserir dados no banco de dados
  const query = `
      INSERT INTO ajudas (
        image,
        name,
        description,
        address,
        address2,
        state,
        city,
        contatos,
        contatos2,
        contatos3,
        contatos4,
        contatos5,
        contatos6
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);  
   `

    const values = [
      req.body.image,
      req.body.name,
      req.body.description,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.contatos,
      req.body.contatos2,
      req.body.contatos3,
      req.body.contatos4,
      req.body.contatos5,
      req.body.contatos6
    ]

    function afterInsertData(err){
      if (err) {
         console.log(err)
         return res.send("Erro no cadastro!")
      }
      console.log("Cadastrado com sucesso!")
      console.log(this)

      return res.render("cadastro.html", {saved: true})
    }

    db.run(query, values, afterInsertData)
  
})

server.get("/search", (req,res) =>{

  const search = req.query.search

  if(search == ""){
    //pesquisa vazia
    return res.render("search-cadastro.html", {total: 0})
  }

  //pegar os dados do banco de dados
  db.all(`SELECT * FROM ajudas WHERE city LIKE '%${search}%'`, function(err, rows){
        if (err) {
          return console.log(err)
        }
        const total = rows.length
        //mostrar a pagina html com os dados do banco de dados
        return res.render("search-cadastro.html", { ajudas: rows, total })
      })

  
})
//ligar o servidor
server.listen(3333)