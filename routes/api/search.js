// const express = require("express");
// const router = express.Router();

// const PlayerCtrl = require("../../controllers/playerController");

// router.get("/players", PlayerCtrl.getPlayers);

// module.exports = router;

const express = require("express");
const router = express.Router();

const Bio = require("../../models/PlayerBioSchema");

router.get("/search", function(req, res) {
  playerBio.find({}, function(err, allPlayers) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
