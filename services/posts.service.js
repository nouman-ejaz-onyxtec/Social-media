// services/posts.service.js
const { Post, Comment, Like, User } = require('../models');

exports.getPosts = async () => {
  return await Post.findAll({
    include: [
      {
        model: Like,
        attributes: ['id', 'userId'],
      },
      {
        model: Comment,
        attributes: ['id', 'content', 'userId'],
      },
      {
        model: User,
        attributes: ['id', 'username'],
      }
    ]
  });
};
