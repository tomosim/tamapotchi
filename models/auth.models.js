const request = require("request-promise-native");
const { client_id, redirect_uri, client_secret } = require("../config.js");
const db = require("../firestore");

const setAccessTokens = code => {
  return request
    .post("https://api.monzo.com/oauth2/token", {
      form: {
        grant_type: "authorization_code",
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: redirect_uri,
        code: code
      }
    })
    .then(body => {
      const { access_token, refresh_token, user_id, token_type } = JSON.parse(
        body
      );
      return db
        .collection("tamapotchis")
        .doc(client_id)
        .set({
          access_token,
          refresh_token,
          user_id
        });
    });
};

const getAccessTokens = () => {
  const clientRef = db.collection("tamapotchis").doc(client_id);
  return clientRef.get().then(doc => {
    return doc.data();
  });
};

module.exports = { setAccessTokens, getAccessTokens };
