// models/user.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // A user has many posts
      User.hasMany(models.Post, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      // A user has many comments
      User.hasMany(models.Comment, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      // A user has many likes
      User.hasMany(models.Like, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      // For friendships, one user can send many requests and receive many requests.
      User.hasMany(models.Friendship, {
        foreignKey: 'requesterId',
        as: 'RequestedFriendships',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      User.hasMany(models.Friendship, {
        foreignKey: 'addresseeId',
        as: 'ReceivedFriendships',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: DataTypes.TEXT,
    profilePicture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
