const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Review = sequelize.define('Review', {
    period: Sequelize.STRING,
    reviewContent: Sequelize.TEXT,
    updated: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    reviewerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Employee',
        key: 'id'
      },
      onDelete: 'CASCADE' // if the reviewer is deleted, remove their review
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
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
