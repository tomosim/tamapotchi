const { client_id, redirect_uri } = require("../config.js");
const { sendAuthCode } = require("../models/auth.models.js");
let accessToken;
let refreshToken;

const getAuthCode = (req, res) => {
  res.redirect(
    `https://auth.monzo.com?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
  );
};

const getAccessToken = (req, res) => {
  const { code } = req.query;
  console.log(code);
  sendAuthCode(code)
    .then(({ access_token, refresh_token }) => {
      // add tokens to db
    })
    .catch(err => console.log(err, "\n ^^^^^^^^^^ERROR^^^^^^^^^^"));
};

module.exports = { getAuthCode, getAccessToken };
