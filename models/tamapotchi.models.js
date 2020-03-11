const request = require("request-promise-native");
const db = require("../firestore");
const { client_id } = require("../config");

const checkPotExists = () => {
  const clientRef = db.collection("auth_tokens").doc(client_id);
  return clientRef
    .get()
    .then(doc => {
      const { access_token, refresh_token } = doc.data();
      console.log(access_token);
      return request
        .get("https://api.monzo.com/pots")
        .auth(null, null, true, access_token);
    })
    .then(body => {
      const pots = JSON.parse(body);
      const tamapotchiPot = pots.find(pot => pot.name === "Tamapotchi");
      if (tamapotchi === undefined) {
        return false;
      }
      if (tamapotchiPot.deleted === true) {
        return false;
      }
      return true;
    })
    .catch(err => console.log(err.message));
};

const postTamapotchi = () => {};

module.exports = { checkPotExists, postTamapotchi };
