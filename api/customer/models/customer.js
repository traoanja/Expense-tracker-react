'use strict';

module.exports = {
  attributes: {
    address: {
      type: 'string',
      required: true,
      maxLength: 45
    },
    phone: {
      type: 'string',
      maxLength: 45
    },
    // Autres attributs...
  },
};
