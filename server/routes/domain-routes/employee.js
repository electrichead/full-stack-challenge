const express = require('express');
const router = express.Router();
const employeeCtrl = require('../../controllers/employee');
const {ensureParamIsInt} = require('../middleware/validation');
const reviewerRoutes = require('./reviewer');

router.param('employeeId', ensureParamIsInt('employeeId'));

router.get('/', (req, res) => {
  return employeeCtrl.getEmployees()
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

router.post('/', (req, res) => {
  return employeeCtrl.createEmployee({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })
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

router.put('/:employeeId', (req, res) => {
  return employeeCtrl.modifyEmployee({
    id: req.params.employeeId,
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })
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

router.delete('/:employeeId', (req, res) => {
  return employeeCtrl.deleteEmployee(req.params.employeeId)
    .then(() => {
      res
        .status(204)
        .end();
    })
    .then(null, (err) => {
      console.error(err);
      res
        .status(500)
        .end();
    });
});

router.use('/:employeeId', reviewerRoutes.employeeSpecificRouter);

module.exports = router;
