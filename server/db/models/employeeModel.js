const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Employee = sequelize.define('Employee', {
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    freezeTableName: true
  });


  return Employee;
};
