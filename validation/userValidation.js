const { Joi } = require('celebrate');

const updateUserSchema = Joi.object({
  username: Joi.string(),
  email: Joi.string().email(),
});

module.exports = {
  updateUserSchema,
};