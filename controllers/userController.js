const User = require('../models/User');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { username, email } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: userId, _id: req.user.userId },
      { username, email },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    next(error);
  }
};