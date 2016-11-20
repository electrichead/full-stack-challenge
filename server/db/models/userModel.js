const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var User = sequelize.define('User', {
    username: Sequelize.STRING,
    pass: Sequelize.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Employee, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          },
          as: 'employee'
        });
      }
    }
  });

  return User;
};
