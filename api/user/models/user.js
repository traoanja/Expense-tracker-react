'use strict';


module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    firstName: {
      type: 'string',
      required: true,
      maxLength: 45
    },
    lastName: {
      type: 'string',
      required: true,
      maxLength: 45
    },
    role: {
      type: 'string',
      enum: ['user', 'admin'],
      defaultsTo: 'user'
    },
    // Autres attributs...
  },
};
