const dotenv  = require('dotenv'); //
dotenv.config();

module.exports={

  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "sns",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "sns",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "sns",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
