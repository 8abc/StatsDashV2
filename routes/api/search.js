const express = require("express");
const router = express.Router();

const playerStats = require("../../models/PlayerStatSchema");

router.get("/", (req, res) => {
    console.log("hit route");
    //will show the query or damion lee for dmo purposes
    playerStats.findOne(
        { full_name: req.body.name || "Damion Lee" },
        (err, result) => {
            if (err) throw err;
            res.json(result);
            console.log(result);
        }
    );

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
router.get("/search", (req, res) => {
  playerStats.findOne({ "full-name": req.body.name }, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});
module.exports = router;
