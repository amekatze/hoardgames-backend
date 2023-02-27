const memberModel = require("./member.model");

module.exports = {
  async createUser(req, res) {
    const result = await memberModel.createUser(req.body);
    res.status(201).send(result);
  },

  async loginUser(req, res) {
    const user = await memberModel.loginUser(req.body);
    res.status(500).send(user);
  },
};
