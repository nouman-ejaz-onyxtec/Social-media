// models/friendship.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    static associate(models) {
      // A friendship links two users
      // As a requester:
      Friendship.belongsTo(models.User, {
        foreignKey: 'requesterId',
        as: 'Requester',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      // As an addressee:
      Friendship.belongsTo(models.User, {
        foreignKey: 'addresseeId',
        as: 'Addressee',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Friendship.init({
    requesterId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    addresseeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Friendship',
  });
  return Friendship;
};
