const dbConfig = require('../setup/dbConfig.json');

const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('= Connected to database:', cp.database);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('= Disconnecting from database:', cp.database);
 }
};

const pgp = require('pg-promise')(initOptions);

const config = process.env.DATABASE_URL || dbConfig.DEV_DB_STRING;
const db = pgp(config);

module.exports = db;