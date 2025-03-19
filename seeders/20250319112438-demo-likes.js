'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Likes', [
      {
        id: 'l1ee2d10-7777-7777-7777-777777777777',
        userId: 'd5ee2d10-2222-2222-2222-222222222222', // Jane likes
        postId: 'a1ee2d10-3333-3333-3333-333333333333', // John\'s post
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'l2ee2d10-8888-8888-8888-888888888888',
        userId: 'f5ee2d10-1111-1111-1111-111111111111', // John likes
        postId: 'b1ee2d10-4444-4444-4444-444444444444', // Jane\'s post
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
