// const Bio = require("../models/PlayerBioSchema");

// // createPlayer = (req, res) => {
// //   const body = req.body;
// //   if (!body) {
// //     return res.status(400).json({
// //       success: false,
// //       error: "You must provide a player name"
// //     });
// //   }

// //   const player = new player(body);
// //   if (!player) {
// //     return res.status(400).json({ success: false, error: err });
// //   }

// //   player
// //     .save()
// //     .then(() => {
// //       return res.status(201).json({
// //         success: true,
// //         id: player._id,
// //         message: "Player Added"
// //       });
// //     })
// //     .catch(error => {
// //       return res.status(400).json({
// //         error,
// //         message: "Player not Created"
// //       });
// //     });
// // };

// // deletePlayer = async (req, res) => {
// //   await Player.findOneAndDelete({ _id: req.params.id }, (err, player) => {
// //     if (err) {
// //       return res.status(400).json({ success: false, error: err });
// //     }

// //     if (!player) {
// //       return res
// //         .status(404)
// //         .json({ success: false, error: `Player not found` });
// //     }

// //     return res.status(200).json({ success: true, data: player });
// //   }).catch(err => console.log(err));
// // };

// // getPlayerById = async (req, res) => {
// //   await Player.findOne({ _id: req.params.id }, (err, player) => {
// //     if (err) {
// //       return res.status(400).json({ success: false, error: err });
// //     }

// //     if (!player) {
// //       return res
// //         .status(404)
// //         .json({ success: false, error: `Player not found` });
// //     }
// //     return res.status(200).json({ success: true, data: player });
// //   }).catch(err => console.log(err));
// // };

// getPlayers = async (req, res) => {
//   await Bio.find({ full_name: req.params.name }, (err, player) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }
//     if (!player.length) {
//       return res
//         .status(404)
//         .json({ success: false, error: `Player not found` });
//     }
//     return res.status(200).json({ success: true, data: player });
//   }).catch(err => console.log(err));
// };

// module.exports = {
//   getPlayers
// };
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
