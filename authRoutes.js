const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const { celebrate } = require('celebrate');
const { registerSchema, loginSchema } = require('./validation/authValidation');

router.post('/register', celebrate({ body: registerSchema }), authController.register);
router.post('/login', celebrate({ body: loginSchema }), authController.login);

module.exports = router;