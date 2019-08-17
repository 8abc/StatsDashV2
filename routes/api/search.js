const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const playerStats = require("../../models/PlayerStatSchema");

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
