// controllers/posts.controller.js
const postsService = require('../services/posts.service');
const responseHelper = require('../helpers/response.helper');

exports.getPosts = async (req, res) => {
  try {
    const posts = await postsService.getPosts();
    return responseHelper.success(res, posts, 'Posts retrieved successfully');
  } catch (error) {
    console.error('Error retrieving posts:', error);
    return responseHelper.error(res, error, 'Something went wrong');
  }
};