const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const post = new Post({ title, content, userId: req.user.userId });
    await post.save();

    return res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    const post = await Post.findOneAndUpdate(
      { _id: postId, userId: req.user.userId },
      { title, content },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const post = await Post.findOneAndDelete({
      _id: postId,
      userId: req.user.userId,
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};