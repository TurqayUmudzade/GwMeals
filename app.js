require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes")
const { sequelize } = require("./models")
const cors = require("cors")

const app = express()
const port = process.env.PORT

app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(routes)

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
  await sequelize.authenticate()
})
