const http = require('http');
const errorCodes = require('./errorCodes');
const moment = require('moment');
const settings = require('./settings');

module.exports = (location, cb) => {

  var options = {
    'method': 'GET',
    'hostname': 'api.skyscanner.net',
    'port': null,
    'path': location.path + '?apikey=' + settings.api,
    'headers': {
      'cache-control': 'no-cache'
    }
  };
  console.log('date ' + moment().format('MMMM Do YYYY, h:mm:ss a'));

  setTimeout(() => {
    console.log('date ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
    var req = http.request(options, function (response) {
      console.log(response.statusCode + ', ' + errorCodes.polling[response.statusCode]);

      var chunks = [];

      response.on('data', function (chunk) {
        chunks.push(chunk);
      });

      response.on('end', function () {
        var body = Buffer.concat(chunks);
        body = body.toString();
        cb(body);
      });
    });

    req.end();

  }, 5000);
};
