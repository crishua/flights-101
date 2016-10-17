const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  url: 'api.skyscanner.net',
  endpoint: '/apiservices/pricing/v1.0/',
  api: process.env.API,
  db: {
    dialect: 'mysql',
    url: process.env.DBURL,
    username: process.env.DB_USR,
    password: process.env.DB_PSW
  }
};

