const express = require("express");
const server = express();
const memberController = require("./member/member.controller");
const boardgameController = require("./boardgame/boardgame.controller");

const cors = require("cors");

server.use(express.json());
server.use(cors());

const serverEndpoints = () => {
  server.get("/user/game", boardgameController.getGameList);
  server.post("/user/game", boardgameController.addGame);
  server.delete("/user/game", boardgameController.deleteGame);

  server.post("/user/login", memberController.loginUser);
  server.post("/user/signUp", memberController.createUser);

  return server;
};

module.exports = { serverEndpoints };
