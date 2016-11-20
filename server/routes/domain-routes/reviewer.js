const express = require('express');
const reviewerCtrl = require('../../controllers/reviewer');
const {reviewerSpecificReviewRouter} = require('./review');

const {
  ensureParamIsInt,
  validatePeriod
} = require('../middleware/validation');

const reviewerRouter = express.Router({
  mergeParams: true
});
reviewerRouter.param('reviewerId', ensureParamIsInt('reviewerId'));

reviewerRouter.get('/reviewers/:reviewerId', (req, res) => {
  return reviewerCtrl.getReviewerAssignments(req.params.reviewerId)
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

// employee-specific routes

const employeeSpecificRouter = express.Router({
  mergeParams: true
});

employeeSpecificRouter.param('employeeId', ensureParamIsInt('employeeId'));
employeeSpecificRouter.param('periodId', validatePeriod);

employeeSpecificRouter.get('/period/:periodId/reviewers', (req, res) => {
  return reviewerCtrl.getReviewersForEmployee(req.params.employeeId)
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

employeeSpecificRouter.put('/period/:periodId/reviewers', (req, res) => {
  return reviewerCtrl.updateReviewersForEmployee(
    req.params.employeeId,
    req.params.periodId,
    req.body.reviewers
  )
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

employeeSpecificRouter.use('/period/:periodId/reviewers/:reviewerId', reviewerSpecificReviewRouter);

module.exports = {
  employeeSpecificRouter,
  reviewerRouter
};
