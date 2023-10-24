'use strict';

module.exports = {
  attributes: {
    brand: {
      type: 'string',
      required: true,
      maxLength: 255
    },
    model: {
      type: 'string',
      required: true,
      maxLength: 255
    },
    year: {
      type: 'integer',
      required: true
    },
    price: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2
    },
    isAvailable: {
      type: 'boolean',
      defaultsTo: true
    },
    // Autres attributs...
  },
};
