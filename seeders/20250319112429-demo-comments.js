'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Comments', [
      {
        id: 'c1ee2d10-5555-5555-5555-555555555555',
        content: 'Great post!',
        userId: 'd5ee2d10-2222-2222-2222-222222222222', // Jane commenting
        postId: 'a1ee2d10-3333-3333-3333-333333333333', // On John\'s post
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c2ee2d10-6666-6666-6666-666666666666',
        content: 'Thanks for sharing!',
        userId: 'f5ee2d10-1111-1111-1111-111111111111', // John commenting
        postId: 'b1ee2d10-4444-4444-4444-444444444444', // On Jane\'s post
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
