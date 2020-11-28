const path = require("path");

const faker = require("faker");

const users = require("../users.json");
const { readFilePromise, writeFilePromise } = require("../utils");

const getUsers = () =>
  new Promise((res) => {
    res(users);
  });

const getUserById = (userId) =>
  new Promise((res) => {
    const user = users.find(({ id }) => id === userId);
    res(user);
  });

const addUser = ({ username, email }) => {
  const id = faker.random.uuid();
  const notes = faker.random.uuid();
  const usersPath = path.join(__dirname, "..", "users.json");

  return readFilePromise(usersPath).then((usersContent) => {
    const parsedUsers = JSON.parse(usersContent);
    parsedUsers.push({
      id,
      username,
      email,
      notes,
    });

    return writeFilePromise(usersPath, JSON.stringify(parsedUsers, null, 4));
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
};
