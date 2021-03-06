const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const bioSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    apiID: {
        type: String,
        required: false
    },
    team: {
        type: String,
        required: true
    },

    full_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    jersey_number: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: false
    },
    home_town: {
        type: String,
        required: false
    },
    experience: {
        type: Number,
        required: true
    },
    birthdate: {
        type: String,
        required: false
    },
    draftstatus: {
        type: String,
        required: false
    }
});
var Bio = Mongoose.model("playerBio", bioSchema);
module.exports = Bio;
