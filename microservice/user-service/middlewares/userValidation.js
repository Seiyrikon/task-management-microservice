const Joi = require('joi');

exports.userSchema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().max(100).required(),
  password: Joi.string().min(6).max(255).required(),
});
