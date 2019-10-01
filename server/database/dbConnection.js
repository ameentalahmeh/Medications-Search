const {Pool} = require('pg');
require("env2")("config.env")

if (process.env.DBNum == 1) {
  var DATABASE_URL = process.env.DATABASE_URL;
} else {
  var DATABASE_URL = process.env.DB_URL;
}

if (!DATABASE_URL) {
throw Error ("No database URL");
}

const option = {
  connectionString: DATABASE_URL
};

module.exports = new Pool(option);
