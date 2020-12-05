const validate = ({ username, email }) =>
  new Promise((res, rej) => {
    if (!username) return rej("username is required");
    if (!email) return rej("email is required");
    res();
  });

module.exports = validate;
