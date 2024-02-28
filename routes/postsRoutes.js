const express = require("express");
const router = express.Router();

const posts = require("../data/posts");

// Creating a GET route for the entire posts database.
router.get("/", (req, res) => {
  res.json(posts);
});

// Creating a simple GET route for individual posts,

router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (post) res.json(post);
});

module.exports = router;
