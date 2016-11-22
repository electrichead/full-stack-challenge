const models = require('../db/models');

function modifyReview(reviewId, updatedReviewContent) {
  console.log('updatedReviewContent', updatedReviewContent);
  return models.Review
    .find({
      where: {
        id: reviewId
      }
    })
    .then((foundReview) => {
      return foundReview.update(
        updatedReviewContent,
        {
          fields: [
            'reviewContent'
          ]
        }
      );
    });
}

function createReviewForEmployee(employeeId, period, reviewerId, reviewContent) {
  // should add validation here
  return models.Review
    .create({
      employeeId,
      period,
      reviewContent,
      employeeReviewerId: reviewerId
    });
}

function getReviewById(reviewId) {
  return models.Review
    .find({
      where: {
        id: reviewId
      }
    });
}

module.exports = {
  createReviewForEmployee,
  getReviewById,
  modifyReview
};
