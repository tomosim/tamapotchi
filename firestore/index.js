const admin = require("firebase-admin");

let serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

// db.collection("auth_tokens")
//   .doc("oauth2client_00009kTGY0reTVGgM5gkEb")
//   .get()
//   .then(x => console.log(x.data().access_token))
//   .catch(console.log);

module.exports = db;
