const express = require("express");
const {
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
