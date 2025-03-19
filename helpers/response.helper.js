// helpers/response.helper.js

/**
 * Sends a success response.
 * @param {Object} res - Express response object.
 * @param {any} data - The data to return.
 * @param {string} [message='Success'] - Optional success message.
 * @param {number} [statusCode=200] - HTTP status code.
 */
exports.success = (res, data, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
  };
  
  /**
   * Sends an error response.
   * @param {Object} res - Express response object.
   * @param {Error|string} error - The error object or message.
   * @param {string} [message='Error'] - Optional error message.
   * @param {number} [statusCode=500] - HTTP status code.
   */
  exports.error = (res, error, message = 'Error', statusCode = 500) => {
    return res.status(statusCode).json({
      status: 'error',
      message,
      error: error.message || error,
    });
  };
  
  /**
   * Sends an informational response.
   * @param {Object} res - Express response object.
   * @param {any} data - The data to return.
   * @param {string} [message='Information'] - Optional information message.
   * @param {number} [statusCode=200] - HTTP status code.
   */
  exports.info = (res, data, message = 'Information', statusCode = 200) => {
    return res.status(statusCode).json({
      status: 'info',
      message,
      data,
    });
  };
  
  /**
   * Sends a warning response.
   * @param {Object} res - Express response object.
   * @param {any} data - The data to return (if applicable).
   * @param {string} [message='Warning'] - Optional warning message.
   * @param {number} [statusCode=400] - HTTP status code.
   */
  exports.warning = (res, data, message = 'Warning', statusCode = 400) => {
    return res.status(statusCode).json({
      status: 'warning',
      message,
      data,
    });
  };
  
  /**
   * Sends a created response (when a resource is successfully created).
   * @param {Object} res - Express response object.
   * @param {any} data - The created resource data.
   * @param {string} [message='Resource created successfully'] - Optional message.
   * @param {number} [statusCode=201] - HTTP status code.
   */
  exports.created = (res, data, message = 'Resource created successfully', statusCode = 201) => {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
  };
  
  /**
   * Sends a not found response.
   * @param {Object} res - Express response object.
   * @param {string} [message='Resource not found'] - Optional message.
   * @param {number} [statusCode=404] - HTTP status code.
   */
  exports.notFound = (res, message = 'Resource not found', statusCode = 404) => {
    return res.status(statusCode).json({
      status: 'error',
      message,
    });
  };
  
  /**
   * Sends a no content response.
   * @param {Object} res - Express response object.
   * @param {string} [message='No content'] - Optional message.
   * @param {number} [statusCode=204] - HTTP status code.
   */
  exports.noContent = (res, message = 'No content', statusCode = 204) => {
    return res.status(statusCode).json({
      status: 'success',
      message,
    });
  };
  