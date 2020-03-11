const request = require("request-promise-native");
const { client_id, redirect_uri, client_secret } = require("../config.js");

const sendAuthCode = code => {
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
      console.log(JSON.parse(body));
      return body;
    });
};

module.exports = { sendAuthCode };
