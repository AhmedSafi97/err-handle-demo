const fs = require("fs");

const readFilePromise = (path) =>
  new Promise((res, rej) => {
    fs.readFile(path, (err, content) => {
      if (err) rej(err);
      else res(content);
    });
  });

module.exports = readFilePromise;
