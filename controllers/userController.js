const { User } = require("../models"); // Make sure the relative path is correct

exports.createUser = async (request, response) => {
  try {
    const user = await User.create(request.body);
    response.status(201).json(user);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.update(request.body, { where: { id } });
    response.status(200).json(user);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    await User.destroy({ where: { id } });
    response.status(204).send();
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
