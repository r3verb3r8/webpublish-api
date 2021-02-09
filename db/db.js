const sql = require("mssql");
// require("dotenv/config");
require("dotenv").config();

var config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};
// Connect to DB
const connection = sql.connect(config, () => console.log("Connected to DB"));

let sqlDB = {};

sqlDB.SIFile = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM [SI360_WebPublish_test].[dbo].[SIFile]`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

sqlDB.SICase = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM [SI360_WebPublish_test].[dbo].[SICase]`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

sqlDB.SIDocument = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM [SI360_WebPublish_test].[dbo].[SIDocument]`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

sqlDB.SIDocumentID = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM [SI360_WebPublish_test].[dbo].[SIDocument] WHERE doc_key = ${id}`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = sqlDB;
