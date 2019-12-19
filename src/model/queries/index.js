const db = require('../db_connection');

const getAll = cb => {
  db.query(`SELECT * FROM resources`,
  (err, result) => {
    if (err) return cb(err);
    cb(null, result.rows);
  });
}

const filterByLanguage = (language, cb) => {
  db.query(`SELECT * FROM resources WHERE language=$1`,
  [language],
  (err, result) => {
    if (err) return cb(err);
    cb(null, result.rows);
  });
}

const addResource = (title, language, description, link, cb) => {
  console.log("i'm in add resource!");
  db.query(`INSERT INTO resources(title, language, description, link) VALUES ($1, $2, $3, $4)`,
  [title, language, description, link],
  (err, result) => {
    if (err) return cb(err);
    cb(null, result);
  });
}

module.exports = {
  getAll,
  filterByLanguage,
  addResource
};
