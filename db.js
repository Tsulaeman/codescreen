const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./geographySummarySql/import.sqlite', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the CodeScreen database.');
  });

const getSome = function () {
  return true;
}

db.close();

exports = {
  db,
  getSome
};