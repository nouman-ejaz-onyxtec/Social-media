'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        id: 'a1ee2d10-3333-3333-3333-333333333333',
        content: 'Hello world! This is my first post.',
        mediaUrl: null,
        userId: 'f5ee2d10-1111-1111-1111-111111111111', // John Doe's UUID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b1ee2d10-4444-4444-4444-444444444444',
        content: 'Enjoying the sunny day!',
        mediaUrl: 'https://example.com/sunny.jpg',
        userId: 'd5ee2d10-2222-2222-2222-222222222222', // Jane Doe's UUID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
