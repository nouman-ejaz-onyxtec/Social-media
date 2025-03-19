'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Friendships', [
      {
        id: 'f1ee2d10-9999-9999-9999-999999999999',
        requesterId: 'f5ee2d10-1111-1111-1111-111111111111', // John sends request
        addresseeId: 'd5ee2d10-2222-2222-2222-222222222222', // to Jane
        status: 'accepted',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Friendships', null, {});
  }
};
