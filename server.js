import express from 'express'

const app = express()
const PORT = 3000

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TaskFlow is running")
})

app.listen(PORT, () => {
  console.log(`TaskFlow running on http://localhost:${PORT}`)
})