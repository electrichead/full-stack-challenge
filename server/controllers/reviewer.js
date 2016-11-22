const models = require('../db/models');

function mapReviewerIdsToInsertionObjects(employeeId, period) {
  return function _mapReviewerIdsToInsertionObjects(reviewerId) {
    return {
      employeeId,
      period,
      reviewerId
    };
  };
}

function updateReviewersForEmployee(employeeId, period, newReviewerList) {
  return models.Employee.findById(employeeId)
  .then(() => {
    return models.EmployeeReviewer
      .destroy({
        where: {
          employeeId: employeeId
        }
      });
  })
  .then(() => {
    return models.EmployeeReviewer
      .bulkCreate(
        newReviewerList.map(
          mapReviewerIdsToInsertionObjects(employeeId, period)
        )
      );
  });
}

function getReviewersForEmployee(employeeId) {
  return models.EmployeeReviewer.findAndCountAll({
    where: {
      employeeId: employeeId
    }
  });
}

function getReviewerAssignments(reviewerId, period) {
  return models.sequelize.query(
    `SELECT Employee.name, Employee.id as employeeId, Review.id as reviewId
      FROM EmployeeReviewer
        INNER JOIN Employee ON Employee.id = EmployeeReviewer.employeeId
        LEFT OUTER JOIN Review ON Review.employeeReviewerId = EmployeeReviewer.id
      WHERE EmployeeReviewer.reviewerId = :id
      AND EmployeeReviewer.period = :period`,
    {
      replacements: {
        id: reviewerId,
        period
      },
      type: models.sequelize.QueryTypes.SELECT
    }
  );
  /*return models.EmployeeReviewer.findAndCountAll({
    where: {
      reviewerId
    },
    include: [{
      model: models.Review,
      required: false
    }]
  });*/
}

module.exports = {
  updateReviewersForEmployee,
  getReviewersForEmployee,
  getReviewerAssignments
};
