const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findOne: function(req, res) {
    db.Bio.findOne({ team: "Warriors" })
      .then(dbBio => res.json(dbBio))
      .catch(err => res.status(422).json(err));
  }
};
