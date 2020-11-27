const users = require("../models/users.json");

const getUsers = async (userId) => {
  return users.find(({ id }) => id === userId);
};

module.exports = getUsers;
