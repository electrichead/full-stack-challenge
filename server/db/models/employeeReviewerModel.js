const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const EmployeeReviewer = sequelize.define('EmployeeReviewer', {
    period: Sequelize.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        EmployeeReviewer.belongsTo(
          models.Employee,
          {
            onDelete: 'CASCADE',
            as: 'employee'
          }
        );
        EmployeeReviewer.belongsTo(
          models.Employee,
          {
            onDelete: 'CASCADE',
            as: 'reviewer'
          }
        );
      }
    }
  });


  return EmployeeReviewer;
};
