const express = require("express");

const db = require("../data/db");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const posts = await db.find();
      return res.status(200).json(posts);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    }
  })
  .post(async (req, res) => {
    const { title, contents } = req.body;
    if (!title || !contents)
      return res.status(400).json({
        errorMessage: "Please provide title and contents for the post."
      });
    try {
      const newPostId = await db.insert(req.body);
      const newPost = await db.findById(newPostId.id);
      return res.status(201).json(newPost);
    } catch (error) {}
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const post = await db.findById(req.params.id);
      if (post) {
        return res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
      return res.status(200).json(post);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    }
  })
  .delete(async (req, res) => {
    try {
      const deleted = await db.remove(req.params.id);
      if (deleted === 0)
        return res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      const posts = await db.find();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ error: "The post could not be removed" });
    }
  })
  .put(async (req, res) => {
    const { title, contents } = req.body;
    if (!title || !contents)
      return res.status(400).json({
        errorMessage: "Please provide title and contents for the post."
      });
    try {
      const updated = await db.update(req.params.id, req.body);
      if (updated === 0) {
        return res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
      const updatedPost = await db.findById(req.params.id);
      return res.status(200).json(updatedPost);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "The post information could not be modified." });
    }
  });

module.exports = router;
