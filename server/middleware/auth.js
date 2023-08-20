const admin = require("../config/firebase-config")

async function decodeToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]

    const decodeToken = admin.auth().verifyIdToken(token)

    if (decodeToken){
        const data = await decodeToken
        
        return res.json({ statusCode: 200, message: "Authorized", userData: data })
    }

    return res.json({ statusCode: 404, message: "Unauthorized" })
}

module.exports = decodeToken