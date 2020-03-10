const { client_id, redirect_uri } = require("../config.js");

const getAuthCode = (req, res) => {
  res.redirect(
    `https://auth.monzo.com?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
  );
};

const getAccessToken = (req, res) => {
  const { code } = req.query;
};

module.exports = { getAuthCode, getAccessToken };
