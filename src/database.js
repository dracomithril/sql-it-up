const sqlite3 = require('sqlite3').verbose();

let db = null;

module.exports = {
  initialize() {
    db = new sqlite3.Database('../database.sqlite3');
    return db;
  },
  getInstance() {
    if (!db) {
      throw new Error('Database was not initialized!');
    }
    return db;
  },
};
