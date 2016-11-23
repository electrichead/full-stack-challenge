function ensureParamIsInt(paramName) {
  return function _ensureParamIsInt(req, res, next) {
    if (isNaN(+req.params[paramName])) {
      return res
        .status(400)
        .end();
    }

    req.params[paramName] = +req.params[paramName];
    next();
  };
}

function validatePeriod(req, res, next) {
  if ([
      'q1-2016',
      'q2-2016',
      'q3-2016',
      'q4-2016'
    ].indexOf(req.params.periodId) === -1) {
    return res
      .status(400)
      .end();
  }

  next();
}

module.exports = {
  ensureParamIsInt,
  validatePeriod
};
