const express = require('express');
const router = express.Router();
const postController = require('./controllers/postController');
const { celebrate } = require('celebrate');
const { createPostSchema, updatePostSchema } = require('./validation/postValidation');
const authenticateJWT = require('./middleware/authenticateJWT');

router.get('/', authenticateJWT, postController.getAllPosts);
router.post('/', authenticateJWT, celebrate({ body: createPostSchema }), postController.createPost);
router.get('/:id', authenticateJWT, postController.getPostById);
router.put('/:id', authenticateJWT, celebrate({ body: updatePostSchema }), postController.updatePost);
router.delete('/:id', authenticateJWT, postController.deletePost);

module.exports = router;