'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Pre-compute hashed passwords
    const saltRounds = 10;
    const passwordJohn = await bcrypt.hash('password123', saltRounds);
    const passwordJane = await bcrypt.hash('password456', saltRounds);

    return queryInterface.bulkInsert('Users', [
      {
        id: 'f5ee2d10-1111-1111-1111-111111111111', // Fixed UUID for reference
        username: 'john_doe',
        email: 'john@example.com',
        password: passwordJohn,
        bio: 'I am John Doe',
        profilePicture: 'https://example.com/john.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd5ee2d10-2222-2222-2222-222222222222',
        username: 'jane_doe',
        email: 'jane@example.com',
        password: passwordJane,
        bio: 'I am Jane Doe',
        profilePicture: 'https://example.com/jane.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
