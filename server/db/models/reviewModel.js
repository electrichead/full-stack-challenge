const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Review = sequelize.define('Review', {
    reviewContent: Sequelize.TEXT
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Review.belongsTo(models.EmployeeReviewer, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          },
          as: 'employeeReviewer'
        });

        Review.belongsTo(models.Employee, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          },
          as: 'employee'
        });
      }
    }
  });

  return Review;
};
