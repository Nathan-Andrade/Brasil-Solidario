//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar objetos que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para nossas operações
//db.serialize( () => {
  //criar uma tabela
  //db.run(`
  //    CREATE TABLE IF NOT EXISTS ajudas (
  //      id INTEGER PRIMARY KEY AUTOINCREMENT,
  //      image TEXT,
  //      name TEXT,
  //      description TEXT,
  //      address TEXT,
  //      address2 TEXT,
  //      state TEXT,
  //      city TEXT,
  //      contatos TEXT,
  //      contatos2 TEXT,
  //      contatos3 TEXT,
  //      contatos4 TEXT,
  //      contatos5 TEXT,
  //      contatos6 TEXT
  //    );
  //`)

  //inserir dados na tabela
  //const query = `
  //    INSERT INTO ajudas (
  //      image,
  //      name,
  //      description,
  //      address,
  //      address2,
  //      state,
  //      city,
  //      contatos,
  //      contatos2,
  //      contatos3,
  //      contatos4,
  //      contatos5,
  //      contatos6
  //    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);  
  //  `

    //const values = [
    //  "https://media-exp1.licdn.com/dms/image/C4E03AQGXCewQI2GPUw/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=0j7DEHS_mazvtwmkrRmjsKQZU2dGKx5kpgZf7dvXQoY",
    //  "Pereira TV",
    //  "Estou passando por necessidades básicas dentro de casa e preciso de ajuda.",
    //  "Prosperidade, Rua Eldorado",
    //  "N°552",
    //  "São Paulo",
    //  "São Caetano do Sul",
    //  "https://web.whatsapp.com/",
    //  "https://mail.google.com/"

    //]

  //  function afterInsertData(err){
  //    if (err) {
  //      return console.log(err)
  //    }
  //    console.log("Cadastrado com sucesso!")
  //    console.log(this)
  //  }

  //  db.run(query, values, afterInsertData)    
  //consultar os dados da tabela
  //  db.all(`SELECT * FROM ajudas`, function(err, rows){
  //    if (err) {
  //      return console.log(err)
  //    }
  //    console.log("Aqui estão seus registros")
  //    console.log(rows)
  //  })

  //Deletar um dado da tabela
 // db.run(`DELETE FROM ajudas WHERE id = ?`, [3], function(err){
  //  if (err) {
  //    return console.log(err)
  //  }
  //  console.log("Registro deletado com sucesso")
 // })
//})