const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  url: 'api.skyscanner.net',
  endpoint: '/apiservices/pricing/v1.0/',
  pollingDir: process.env.POL,
  liveDir: process.env.LIV,
  importDir: process.env.IMP,
  api: process.env.API,
  db: {
    dialect: 'mysql',
    url: process.env.DB_URL,
    username: process.env.DB_USR,
    password: process.env.DB_PSW
  }
};

