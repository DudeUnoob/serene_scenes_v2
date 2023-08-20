const express = require("express")
const router = express.Router()
const decodeToken = require("../middleware/auth")

router.post('/auth', (req, res, next) => {
    decodeToken(req, res, next)
}, (req, res, next) => {
    return res.json({ statusCode: 200, message: "Authorized" })
})


module.exports = router