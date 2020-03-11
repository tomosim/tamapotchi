const request = require("request-promise-native");
const { client_id, redirect_uri, client_secret } = require("../config.js");
const db = require("../firestore");

const saveAuthCode = code => {
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
      db.collection("auth_tokens")
        .doc(client_id)
        .set({
          access_token,
          refresh_token,
          user_id
        });
    });
};

module.exports = { saveAuthCode };
