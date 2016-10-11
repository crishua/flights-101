const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  url: 'api.skyscanner.net',
  endpoint: '/apiservices/pricing/v1.0/',
  api: process.env.API
};
