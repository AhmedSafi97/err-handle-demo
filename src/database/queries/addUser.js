const fs = require("fs");
const path = require("path");
const faker = require("faker");

const readFilePromise = (path) =>
  new Promise((res, rej) => {
    fs.readFile(path, (err, content) => {
      if (err) rej(err);
      else res(content);
    });
  });

const writeFilePromise = (path, data) =>
  new Promise((res, rej) => {
    fs.writeFile(path, data, (err) => {
      if (err) rej(err);
      else res();
    });
  });

const addUser = async ({ username, email }) => {
  const id = faker.random.uuid();
  const notes = faker.random.uuid();

  const usersPath = path.join(__dirname, "..", "models", "users.json");

  const usersContent = await readFilePromise(usersPath);

  const users = JSON.parse(usersContent);

  users.push({
    id,
    username,
    email,
    notes,
  });

  return writeFilePromise(usersPath, JSON.stringify(users, null, 4));
};

module.exports = addUser;
