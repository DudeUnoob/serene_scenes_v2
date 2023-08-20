const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountCopy.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
