'use strict'

import mysql from 'mysql';

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'my_database',
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connection established');
  }
});

const query = (queryString, data = null) => {
  return new Promise((resolve, reject) => {
    connection.query(queryString, data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = query;