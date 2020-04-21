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

const db = pgp(process.env.DATABASE_URL);

module.exports = db;