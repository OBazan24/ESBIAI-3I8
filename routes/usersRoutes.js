const express = require("express");
const router = express.Router();

const users = require("../data/users");

// Creating a GET route for the entire users database.
router.get("/", (req, res) => {
  res.json(users);
});

// Creating a simple GET route for individual users,

router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
});

module.exports = router;
