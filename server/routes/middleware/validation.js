function ensureParamIsInt(paramName) {
  return function _ensureParamIsInt(req, res, next, paramValue) {
    if (isNaN(+paramValue)) {
      return res
        .status(400)
        .end();
    }

    req.params[paramName] = +paramValue;
    next();
  };
}

function validatePeriod(req, res, next, periodId) {
  if ([
      'q1-2016',
      'q2-2016',
      'q3-2016',
      'q4-2016'
    ].indexOf(periodId) === -1) {
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
