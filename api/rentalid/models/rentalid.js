'use strict';

module.exports = {
  attributes: {
    startDate: {
      type: 'datetime',
      required: true
    },
    endDate: {
      type: 'datetime',
      required: true
    },
    totalCost: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2
    },
    carId: {
      model: 'car',
      required: true
    },
    customerId: {
      model: 'customer',
      required: true
    },
    // Autres attributs...
  },
};
