const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

const [mainDb, usersDb] = await Promise.all([
    sqlite.open('./main.sqlite', { Promise }),
    sqlite.open('./users.sqlite', { Promise })
  ]);