'use strict'

import query from './connection';

class Queries {
  selectAllData() {
    const queryString = `SELECT * from table`;
    return query(queryString);
  }
}

module.exports = Queries;
