const express = require("express");
const router = express.Router();
const customStat = require("../../models/playSchema");
const players = require("../../models/PlayerStatSchema");
router.get("/customSearch", (req, res) => {
  //find custom stat or default 3pt% with 2 to go in the 4th quarter
  let type = req.body.type || "%";
  let stat = req.body.stat || "three";
  let qtr = req.body.quarter || "4th quarter";
  let minute = req.body.minute || "2";
  switch (type) {
    //if the want a percebntage stat

    case "%":
      //we will look at active players only to shorten search
      players.find({ status: "ACT" }).array.forEach(element => {
        customStat
          .find({
            player: playerName,
            stat: stat,
            type: "make",
            quarter: qtr
            //somehow count all of these
          })
          .count();
        let missCount = customStat
          .find({
            player: player,
            stat: req.body.stat,
            type: "miss",
            quarter: req.body.quarter
            //somehow count all of these
          })
          .count();
        return madeCount / missCount;
      });
  }
});

module.exports = Router;
