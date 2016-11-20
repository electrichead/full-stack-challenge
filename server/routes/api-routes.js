const express = require('express');

const router = express.Router();
const employeeRoutes = require('./domain-routes/employee');
const reviewerRoutes = require('./domain-routes/reviewer');
const reviewRoutes = require('./domain-routes/review');
const authRoutes = require('./domain-routes/auth');

// TODO: middleware for authorization
router.use('/v1/employees', employeeRoutes);
router.use('/v1', reviewerRoutes.reviewerRouter);
router.use('/v1', reviewRoutes.reviewRouter);
router.use('/v1', authRoutes);

module.exports = router;
