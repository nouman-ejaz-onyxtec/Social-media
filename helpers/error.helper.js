// helpers/error.helper.js
const { DUPLICATE_USERNAME_EMAIL, DUPLICATE_USERNAME, DUPLICATE_EMAIL } = require('../constants/constants');

/**
 * Extracts a specific error message from a Sequelize unique constraint error.
 * @param {Error} error - The Sequelize error object.
 * @returns {string} - A specific error message based on the duplicate fields.
 */
exports.getUniqueConstraintErrorMessage = (error) => {
  let errorMessage = 'Duplicate value error';

  if (error && error.errors && Array.isArray(error.errors)) {
    const errorFields = error.errors.map((item) => item.path);
    if (errorFields.includes('username') && errorFields.includes('email')) {
      errorMessage = DUPLICATE_USERNAME_EMAIL;
    } else if (errorFields.includes('username')) {
      errorMessage = DUPLICATE_USERNAME;
    } else if (errorFields.includes('email')) {
      errorMessage = DUPLICATE_EMAIL;
    }
  }

  return errorMessage;
};
