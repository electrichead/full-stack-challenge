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

function getReviewerAssignments(reviewerId) {
  return models.EmployeeReviewer.findAndCountAll({
    where: {
      reviewerId
    }
  });
}

module.exports = {
  updateReviewersForEmployee,
  getReviewersForEmployee,
  getReviewerAssignments
};
