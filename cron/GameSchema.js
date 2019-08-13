const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const gameSchema = new Schema({
    date: {
        type: [String],
        required: true
    },
    matchup: {
        type: [String],
        required: true
    },
    homeTeam: {
        type: String,
        required: true
    },
    awayTeam: {
        type: String,
        required: true
    },
    //event could be make,miss,rebound,steal, turnover
    espnGameId: {
        type: String,
        required: true
    },
    //score starts out as 0-0 but will be updated after each play injection
    combinedScore: {
        type: String,
        required: true
    },
    //an array of all the plays
    plays: [
        {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Play"
        }
    ]
});
var Game = Mongoose.model("game", gameSchema);
module.exports = Game;
