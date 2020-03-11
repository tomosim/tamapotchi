const { client_id, redirect_uri } = require("../config.js");
const {
  checkPotExists,
  postTamapotchi
} = require("../models/tamapotchi.models.js");

const makeTamapotchi = (req, res) => {
  checkPotExists()
    .then(potExists => {
      if (potExists) {
        // return postTamapotchi();
      }
    })
    .then(() => {
      res.send({ msg: "tamapotchi made" });
    });
};

module.exports = { makeTamapotchi };
