const { client_id, redirect_uri } = require("../config.js");
const { setAccessTokens } = require("../models/auth.models.js");

const getAuthCode = (req, res) => {
  res.redirect(
    `https://auth.monzo.com?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
  );
};

const getAccessTokens = (req, res) => {
  const { code } = req.query;
  setAccessTokens(code)
    .then(() => {
      res.redirect("/");
    })
    .catch(err => console.log(err, "\n ^^^^^^^^^^ERROR^^^^^^^^^^"));
};

module.exports = { getAuthCode, getAccessTokens };
