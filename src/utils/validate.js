const validate = async ({ username, email }) => {
  if (!username) throw new Error("username is required");
  if (!email) throw new Error("email is required");
};

module.exports = validate;
