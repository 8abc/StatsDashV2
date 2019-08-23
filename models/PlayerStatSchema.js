const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const statsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    season: {
        type: Number,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    field_goals_made: {
        type: Number,
        required: true
    },
    field_goals_att: {
        type: Number,
        required: true
    },
    field_goals_pct: {
        type: Number,
        required: true
    },
    two_points_made: {
        type: Number,
        required: true
    },
    two_points_att: {
        type: Number,
        required: true
    },
    two_points_pct: {
        type: Number,
        required: true
    },
    three_points_made: {
        type: Number,
        required: true
    },
    three_points_att: {
        type: String,
        required: true
    },
    three_points_pct: {
        type: Number,
        required: true
    },
    blocked_att: {
        type: Number,
        required: true
    },
    free_throws_made: {
        type: Number,
        required: true
    },
    free_throws_att: {
        type: Number,
        required: true
    },
    free_throws_pct: {
        type: Number,
        required: true
    },
    offensive_rebounds: {
        type: Number,
        required: true
    },
    defensive_rebounds: {
        type: Number,
        required: true
    },
    rebounds: {
        type: Number,
        required: true
    },
    assists: {
        type: Number,
        required: true
    },
    turnovers: {
        type: Number,
        required: true
    },
    assists_turnover_ratio: {
        type: Number,
        required: true
    },
    steals: {
        type: Number,
        required: true
    },
    blocks: {
        type: Number,
        required: true
    },
    personal_fouls: {
        type: Number,
        required: true
    },
    tech_fouls: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    flagrant_fouls: {
        type: Number,
        required: true
    },
    ejections: {
        type: Number,
        required: true
    },
    foulouts: {
        type: Number,
        required: true
    },
    true_shooting_att: {
        type: Number,
        required: true
    },
    true_shooting_pct: {
        type: Number,
        required: true
    },
    efficiency: {
        type: Number,
        required: true
    },
    points_off_turnovers: {
        type: Number,
        required: true
    },
    points_in_paint: {
        type: Number,
        required: true
    },
    points_in_paint_made: {
        type: Number,
        required: true
    },
    points_in_paint_att: {
        type: Number,
        required: true
    },
    points_in_paint_pct: {
        type: Number,
        required: true
    },
    effective_fg_pct: {
        type: Number,
        required: true
    },
    double_doubles: {
        type: Number,
        required: true
    },
    triple_doubles: {
        type: Number,
        required: true
    },
    fouls_drawn: {
        type: Number,
        required: true
    },
    offensive_fouls: {
        type: Number,
        required: true
    },
    fast_break_pts: {
        type: Number,
        required: true
    },
    fast_break_att: {
        type: Number,
        required: true
    },
    fast_break_made: {
        type: Number,
        required: true
    },
    fast_break_pct: {
        type: Number,
        required: true
    },
    coach_ejections: {
        type: Number,
        required: true
    },
    second_chance_pct: {
        type: Number,
        required: true
    },
    second_chance_pts: {
        type: Number,
        required: true
    },
    second_chance_att: {
        type: Number,
        required: true
    },
    second_chance_made: {
        type: Number,
        required: true
    },
    minus: {
        type: Number,
        required: true
    },
    plus: {
        type: Number,
        required: true
    }
});
const Stat = Mongoose.model("playerstat", statsSchema);
module.exports = Stat;
