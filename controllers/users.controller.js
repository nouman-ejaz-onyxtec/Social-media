// controllers/users.controller.js
const usersService = require('../services/users.service');
const responseHelper = require('../helpers/response.helper');
const { getUniqueConstraintErrorMessage } = require('../helpers/error.helper');
const Joi = require('joi');
const { VALIDATION_ERROR, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAILED } = require('../constants/constants');

// Define a validation schema using Joi
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  bio: Joi.string().optional(),
  profilePicture: Joi.string().optional(),
});

exports.registerUser = async (req, res) => {
  // Validate request body
  const { error, value } = registerSchema.validate(req.body);
  if (error) {
    return responseHelper.error(res, error, VALIDATION_ERROR, 400);
  }

  try {
    const newUser = await usersService.createUser(value);
    return responseHelper.created(res, newUser, USER_REGISTRATION_SUCCESS);
  } catch (err) {
    console.error('Error in registering user:', err);
    if (err.name === 'SequelizeUniqueConstraintError') {
      const specificMessage = getUniqueConstraintErrorMessage(err);
      return responseHelper.error(res, err, specificMessage, 400);
    }
    return responseHelper.error(res, err, USER_REGISTRATION_FAILED);
  }
};
