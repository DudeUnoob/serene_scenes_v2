const express = require('express')
const app = express()
const cors = require("cors")
const apiRouter = require("./router/api")

app.use(cors())
app.use("/api/v1", apiRouter)

app.get("/", (req, res) => {
    res.send("adf")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening @ http://localhost:${3000}`)
})