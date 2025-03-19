const { User } = require('../models');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (userData) => {
  // Hash the user's password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
  
  // Create and return the new user
  const newUser = await User.create({
    id: uuidv4(),
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
    bio: userData.bio || null,
    profilePicture: userData.profilePicture || null,
  });
  
  return newUser;
};
