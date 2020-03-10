const { client_id, redirect_uri } = require("../config.js");

const getAuth = (req, res) => {
  res.redirect(
    `https://auth.monzo.com?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
  );
};

const createTamapotchi = (req, res) => {
  const { code } = req.query;
};

module.exports = { getAuth, createTamapotchi };
