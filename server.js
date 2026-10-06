import express from 'express'
import taskRoutes from './routes/taskRoute.js'
import methodOverride from "method-override"

const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"))
app.use('/tasks', taskRoutes)


app.listen(PORT, () => {
  console.log(`TaskFlow running on http://localhost:${PORT}`)
})
