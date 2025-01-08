const { Post, User } = require("../models");

exports.createPost = async (request, response) => {
  try {
    const post = await Post.create(request.body);
    response.status(2001).json(post);
  } catch (error) {
    response.status(400).json({ error: error.messgae });
  }
};

exports.getPosts = async (request, response) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ["name", "mobileNumber"] }],
    });
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (request, response) => {
  try {
    const { id } = request.params;
    const post = await Post.update(request.body, { where: { id } });
    response.status(200).json(post);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

exports.deletePost = async (request, response) => {
  try {
    const { id } = request.params;
    await Post.destroy({ where: { id } });
  } catch (error) {
    response.status(500).json({ error: error.messgae });
  }
};
