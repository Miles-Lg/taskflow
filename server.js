import express from 'express'
import DB from './config/database.js'

const app = express()
const PORT = 3000

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", async (req, res) => {
  try {
    const result = await DB.query("select * from tasks")

    console.log(result.rows)
    res.status(200).send("TaskFlow is running")
  } catch (error) {
    console.log("Error:", error.message)
    res.status(500).send("Error!")
  }
})

app.listen(PORT, () => {
  console.log(`TaskFlow running on http://localhost:${PORT}`)
})

