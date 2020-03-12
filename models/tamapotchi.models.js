const request = require("request-promise-native");
const { getAccessTokens } = require("./auth.models.js");
const db = require("../firestore");
const { client_id } = require("../config");

const getPotID = () => {
  return getAccessTokens()
    .then(({ access_token, refresh_token }) => {
      console.log(access_token);
      return request
        .get("https://api.monzo.com/pots")
        .auth(null, null, true, access_token);
    })
    .then(body => {
      const { pots } = JSON.parse(body);
      const tamapotchiPot = pots.find(
        pot => pot.name === "Tamapotchi" && pot.deleted === false
      );
      if (tamapotchiPot === undefined) {
        return Promise.reject({ msg: "No Tamapotchi Pot!", status: 404 });
      } else return tamapotchiPot.id;
    });
};

const postTamapotchi = pot_id => {
  return db
    .collection("tamapotchis")
    .doc(client_id)
    .set(
      {
        pot_id
      },
      { merge: true }
    );
};

module.exports = { getPotID, postTamapotchi };
