const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

// Creating a GET route for the entire comments database.
router.get("/", (req, res) => {
    res.json(comments);
});

// Creating a simple GET route for individual comments,
// using a route parameter for the unique id.
router.get("/:id", (req, res) => {
    const comment = comments.find((c) => c.id == req.params.id);
    if (comment) res.json(comment);
});

module.exports = router;