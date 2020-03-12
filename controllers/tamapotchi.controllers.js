const { client_id, redirect_uri } = require("../config.js");
const { getPotID, postTamapotchi } = require("../models/tamapotchi.models.js");

const makeTamapotchi = (req, res) => {
  getPotID()
    .then(potId => {
      return postTamapotchi(potId);
    })
    .then(mystery => {
      res.send({ msg: "tamapotchi made" });
    })
    .catch(err => {
      console.log(err);
      if (err.status) {
        res.status(err.status).send({ msg: err.msg });
      } else res.status(500).send({ msg: "Internal Server Error" });
    });
};

module.exports = { makeTamapotchi };
