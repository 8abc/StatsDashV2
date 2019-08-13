var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var PlayerSchema = new Schema({
  // `title` is of type String
  name: String,
  // `body` is of type String
  age: String,

  team: String,

  height: String
});

// This creates our model from the above schema, using mongoose's model method
var Player = mongoose.model("Player", PlayerSchema);

// Export the Note model
module.exports = Player;
