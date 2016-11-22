const R = require('ramda');
const {Employee} = require('../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function login(username, password) {
  return Employee.find({
    where: {
      username
    },
    attributes: [
      'id',
      'name',
      'password',
      'isAdmin'
    ]
  })
  .then((employeeData) => {
    if (employeeData === null) {
      throw new Error('username not found');
    }

    if (bcrypt.compareSync(password, employeeData.dataValues.password)) {
      return R.omit(['password'], employeeData.dataValues);
    } else {
      throw new Error('incorrect password');
    }
  })
  .then((employeeInfo) => {
    return {
      employeeInfo,
      token: jwt.sign({
          data: employeeInfo
        },
        process.env.JWT_SECRET || 'secret',
        {
          expiresIn: 30 * 60
        })
    };
  });
}

module.exports = {
  login
};
