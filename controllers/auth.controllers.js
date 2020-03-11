const { client_id, redirect_uri } = require("../config.js");
const { saveAuthCode } = require("../models/auth.models.js");
let accessToken;
let refreshToken;

const getAuthCode = (req, res) => {
  res.redirect(
    `https://auth.monzo.com?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
  );
};

const getAccessToken = (req, res) => {
  const { code } = req.query;
  saveAuthCode(code)
    .then(() => {
      res.redirect("/");
    })
    .catch(err => console.log(err, "\n ^^^^^^^^^^ERROR^^^^^^^^^^"));
};

module.exports = { getAuthCode, getAccessToken };
