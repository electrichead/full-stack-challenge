const models = require('../db/models');
const bcrypt = require('bcrypt');

function modifyEmployee(updatedEmployeeDetails) {
  return models.Employee
    .find({
      where: {
        id: updatedEmployeeDetails.id
      }
    })
    .then((foundEmployee) => {
      return foundEmployee.update(
        updatedEmployeeDetails,
        {
          fields: [
            'name'
          ]
        }
      );
    });
}

function createEmployee(employeeDetails) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(employeeDetails.password, 12, function(err, hash) {
      if (err) {
        console.error(err);
        reject(new Error('hashing failed'));
      }
      resolve(hash);
    });
  })
  .then((hash) => {
    return models.Employee
      .create({
        name: employeeDetails.name,
        username: employeeDetails.username,
        password: hash
      });
  });
}

function deleteEmployee(employeeId) {
  return models.Employee
    .destroy({
      where: {
        id: employeeId
      }
    });
}

function getEmployees() {
  return models.Employee.findAndCountAll({
    attributes: [
      'id',
      'name',
      'username'
    ]
  });
}

module.exports = {
  createEmployee,
  deleteEmployee,
  getEmployees,
  modifyEmployee
};
