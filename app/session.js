const qs = require('querystring');
const http = require('http');
const url = require('url');
const errorCodes = require('./errorCodes');
const settings = require('./settings');

module.exports = (scan, cb) => {

  const skyscan = qs.stringify(scan);

  const options = {
    method: 'POST',
    hostname: settings.url,
    port: null,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'cache-control': 'no-cache',
      'Accept': 'application/json',
      'Content-Length': Buffer.byteLength(skyscan)
    },
    path: `${settings.endpoint}?apikey=${settings.api}`,
    body: skyscan
  };

  const request = http.request(options, (response) => {
    var status = response.statusCode + ', ' + errorCodes.session[response.statusCode];
    console.log(status);

    if(response.statusCode >= 400){
      throw new Error(status);
    }
    const chunks = [];
    response.on('data', (chunk) => {
      chunks.push(chunk)
    });
    response.on('end', () => {
      //var body = Buffer.concat(chunks);
      const location = url.parse(response.headers.location, true);
      cb(location, scan);
    });
  });

  request.on('error', (err) => reject(err));
  request.on('connect', () => {
    console.log('connection started');
  });
  if (options.method === 'POST') {
    request.write(options.body);
  }
  request.end();

};
