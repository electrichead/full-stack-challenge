const express = require('express');
const reviewCtrl = require('../../controllers/review');

const {
  ensureParamIsInt,
  validatePeriod
} = require('../middleware/validation');

const reviewRouter = express.Router({
  mergeParams: true
});

reviewRouter.param('reviewId', ensureParamIsInt('reviewId'));

reviewRouter.get('/reviews/:reviewId', validatePeriod, (req, res) => {
  return reviewCtrl.getReviewById(req.params.reviewId)
    .then((results) => {
      res
        .status(200)
        .json(results);
    })
    .then(null, (err) => {
      console.error(err);
      res
        .status(500)
        .end();
    });
});

reviewRouter.put('/reviews/:reviewId', validatePeriod, (req, res) => {
  return reviewCtrl.modifyReview(req.params.reviewId, req.body)
    .then((results) => {
      res
        .status(200)
        .json(results);
    })
    .then(null, (err) => {
      console.error(err);
      res
        .status(500)
        .end();
    });
});

// employee and reviewer-specific routes

const reviewerSpecificReviewRouter = express.Router({
  mergeParams: true
});

reviewerSpecificReviewRouter.param('employeeId', ensureParamIsInt('employeeId'));
reviewerSpecificReviewRouter.param('reviewerId', ensureParamIsInt('reviewerId'));

reviewerSpecificReviewRouter.post('/reviews', validatePeriod, (req, res) => {

  return reviewCtrl.createReviewForEmployee(
    req.params.employeeId,
    req.params.periodId,
    req.params.reviewerId,
    req.body.reviewContent
  )
    .then((results) => {
      res
        .status(201)
        .json(results);
    })
    .then(null, (err) => {
      console.error(err);
      res
        .status(500)
        .end();
    });
});

module.exports = {
  reviewRouter,
  reviewerSpecificReviewRouter
};
