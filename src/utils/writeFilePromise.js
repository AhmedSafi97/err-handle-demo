const fs = require("fs");

const writeFilePromise = (path, data) =>
  new Promise((res, rej) => {
    fs.writeFile(path, data, (err) => {
      if (err) rej(err);
      else res();
    });
  });

module.exports = writeFilePromise;
