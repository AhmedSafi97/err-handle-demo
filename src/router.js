const router = require("express").Router();

const { getUsers, addUser, getUserById } = require("./models/Users");
const { validate, boomify } = require("./utils");

/*
GET: /users
POST: /users
GET: /users/{id}
*/

router.get("/users", (req, res, next) => {});

router.post("/users", (req, res, next) => {});

router.get("/users/:id", (req, res, next) => {});

// requesting none-existing resource
router.use((req, res, next) => {});

// error middleware
router.use((err, req, res, next) => {});

module.exports = router;
