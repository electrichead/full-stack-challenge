const passport = require('passport');
const passportJWT = require('passport-jwt');

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const {Employee} = require('../db/models');

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: process.env.JWT_SECRET || 'secret'
};

module.exports = function initialize(app) {
  passport.use(new JwtStrategy(opts, function(jwtPayload, done) {
    Employee.find({
      where: {
        id: jwtPayload.data.id
      },
      attributes: [
        'id',
        'name',
        'isAdmin'
      ]
    })
    .then((employeeData) => {
      if (employeeData === null) {
        throw new Error('username not found');
      }

      return done(null, employeeData);
    })
    .then(null, (err) => {
      return done(err);
    });

  }));
  app.use(passport.initialize());
};
