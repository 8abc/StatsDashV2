const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const PlaySchema = new Schema({
    player: {
        type: [],
        required: true
    },
    quarter: {
        type: String,
        required: true
    },
    minute: {
        type: String,
        required: true
    },
    stat: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },
    combinedScore: {
        type: String,
        required: true
    }
});
var Play = Mongoose.model("play", PlaySchema);
module.exports = Play;
