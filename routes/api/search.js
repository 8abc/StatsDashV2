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
});
module.exports = router;
