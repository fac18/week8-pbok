const db = require('../db_connection');

const getAll = () => db.query(`SELECT * FROM resources`);

const filterByJavaScript = () => db.query(`SELECT * FROM resources WHERE language='JavaScript'`);
const filterByCss = () => db.query(`SELECT * FROM resources WHERE language='CSS'`);
const filterByHtml = () => db.query(`SELECT * FROM resources WHERE language='HTML'`);

const addResource = resource => {
  const  { title, language, description, link } = resource;
  return db.query(`INSERT INTO resources(title, language, description, link) VALUES ($1, $2, $3, $4)`
);
}

module.exports = {
  getAll,
  filterByJavaScript,
  filterByCss,
  filterByHtml,
  addResource,
};
