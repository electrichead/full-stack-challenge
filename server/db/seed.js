const migration = require('./migrations/collections');

function seedDb() {
  return migration.up();
}

function clearData() {
  return migration.down();
}

module.exports = {
  seedDb,
  clearData
};
