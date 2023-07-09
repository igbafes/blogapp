const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const { celebrate } = require('celebrate');
const { updateUserSchema } = require('./validation/userValidation');
const authenticateJWT = require('./middleware/authenticateJWT');

router.get('/', authenticateJWT, userController.getAllUsers);
router.get('/:id', authenticateJWT, userController.getUserById);
router.put('/:id', authenticateJWT, celebrate({ body: updateUserSchema }), userController.updateUser);

module.exports = router;