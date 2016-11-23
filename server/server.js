const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api-routes');
const models = require('./db/models');

const {
  seedDb,
  clearData
} = require('./db/seed.js');

const app = express();
const PORT = process.env.PORT || 9090;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', apiRouter);

require('./auth/initialize-passport')(app);

// initialize the db
models.sequelize.dropAllSchemas()
.then(() => {
  return models.sequelize.sync();

})
.then(clearData)
.then(seedDb)
.then(() => {
  app.listen(PORT, () => {
    console.log('Listening on port', PORT);
  });
})
.then(null, (err) => {
  console.error(err);
  process.exit(1);
});

module.exports = app;
