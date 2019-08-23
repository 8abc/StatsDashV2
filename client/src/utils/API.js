import axios from "axios";

export default {
  // Gets all players
  getPlayers: function() {
    return axios.get("/api/players");
  },
  // Gets the book with the given id
  getPlayer: function(id) {
    return axios.get("/api/player/" + id);
  },
  // Deletes the book with the given id
  deletePlayer: function(id) {
    return axios.delete("/api/player/" + id);
  },
  // Saves a book to the database
  savePlayer: function(playerData) {
    return axios.post("/api/player", playerData);
  }
};
