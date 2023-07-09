const { Joi } = require('celebrate');

const registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};