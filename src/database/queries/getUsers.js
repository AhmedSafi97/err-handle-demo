const users = require("../models/users.json");

const getUsers = async () => {
  return users;
};

module.exports = getUsers;
