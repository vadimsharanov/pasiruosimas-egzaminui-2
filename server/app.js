import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()
const PORT = 3002
app.use(cors())
app.use(express.urlencoded( {
  extended:true
}))
app.use(express.json());
const connection = mysql.createConnection( {
    host: "localhost",
    user: "bandomasis_egzaminas",
    database: "agurkas",
    password: "bandomasis_egzaminas",
}) 

connection.connect(err => {
    if (err) {
        throw err
    }
    console.log("PAVYKO!!!!!!!");
})

app.get("/cows", (req, res) => {
    connection.query("SELECT * FROM agurkas.cow_farm order by  id desc", (err, result)=> {
        if (err) {
            throw err
        }
        res.json(result);
    })
})

app.post('/cows', (req, res) => {
    console.log(req.body);
  let sql = `
  INSERT INTO agurkas.cow_farm
  (name, weight, total_milk, last_milking_time)
   VALUES (?,?,?,?);
  `
  connection.query(sql,[
    req.body.cowName,
    req.body.cowWeight,
     0,
     req.body.cowDate,
    ], (err,result) => {
    if (err) {console.log("klaida");}
    res.send(result)
  })
})

app.delete('/cows/:id', (req, res) => {
  let sql = `
    delete from cow_farm
    where id = ?
  `
  connection.query(sql,[req.params.id], (err,result) => {
    if (err) {throw err}
    res.send(result)
    console.log("Deleted");
  })
})

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/cows/:id', (req, res) => {
    console.log(req.body);
  let sql = `
    update cow_farm
    set  weight = ?, total_milk = ?, last_milking_time=?
    where id = ?
  `
  connection.query(sql,[
    req.body.newWeight,
    req.body.newTotalMilk,
    req.body.newMilkingTime,
    req.params.id,
    ], (err,result) => {
    if (err) {console.log(err) }
    res.send(result)
    console.log("updadddted!");
  })
})



app.get("/cows/count", (req, res) => {
    connection.query("SELECT COUNT(id) as cowCount FROM cow_farm", (err, result)=> {
        if (err) {
            throw err
        }
        res.json(result);
    })
})



app.get("/cows/totalMilk", (req, res) => {
    connection.query("SELECT SUM(total_milk) as totalMilk FROM cow_farm;", (err, result)=> {
        if (err) {
            throw err
        }
        res.json(result);
    })
})


app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
})