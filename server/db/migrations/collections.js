const {
  Employee,
  EmployeeReviewer,
  Review
} = require('../models');

const Promise = require('bluebird');

module.exports = {
  up: () => {
    return Promise.all([
        Employee.bulkCreate(require('./data/Employee.json')),
        EmployeeReviewer.bulkCreate(require('./data/EmployeeReviewer.json')),
        Review.bulkCreate(require('./data/Review.json'))
      ]);
  },
  down: () => {
    return Employee.destroy({
      where: {}
    }); // this will cascade delete
  }
};
