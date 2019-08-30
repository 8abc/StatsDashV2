import axios from "axios";

const api = axios.create({
  bareURL: "http://localhost:5000/api"
});

export const insertPlayer = payload => api.post(`/player`, payload);
export const getAllPlayers = () => api.get(`/players`);
export const deletePlayerById = id => api.delete(`/player/${id}`);
export const getPlayerById = id => api.get(`/player/${id}`);

const apis = {
  insertPlayer,
  getAllPlayers,
  deletePlayerById,
  getPlayerById
};

export default apis;
