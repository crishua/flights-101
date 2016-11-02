'use strict';

const fs = require('fs');
const moment = require('moment');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}
const routes = require('./routes');
const dates = require('./dates');
const session = require('./session');
const polling = require('./polling');
const settings = require('./settings');

let routeIndex = 0;
let dateIndex = 0;
const livePoll = new MyEmitter();

const dir = settings.pollingDir;

const writeFile = (location, scan) => {
  polling(location, scan, (iti, scan) => {
    const format = moment().format('_MMMM-DD-YYYY-h_mm_ss_a');
    if (iti) {
      iti = JSON.parse(iti);
      console.log('Status: ' + iti.Status);
      const name = '_' + scan.originPlace + '_' + scan.destinationPlace;
      const file = dir + '/itinerary' + name + format + '.json';
      console.log(file);
      fs.writeFile(file, JSON.stringify(iti), (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    }

    if (iti.Status !== 'UpdatesComplete') {
      writeFile(location, scan);
    } else {
      console.log('polling complete');
      dateIndex++;
      if (dateIndex >= dates.length) {
        routeIndex++;
        dateIndex = 0;
      }
      livePoll.emit('event');
    }
  });
};

livePoll.on('event', () => {
  if (routeIndex < routes.length) {
    const scan = {
      country: 'AU',
      currency: 'AUD',
      locale: 'en-AU',
      locationSchema: 'iata',
      groupPricing: 'true',
      originPlace: routes[routeIndex].in,
      destinationPlace: routes[routeIndex].out,
      outboundDate: dates[dateIndex].out,//'2016-11-04',
      inboundDate: dates[dateIndex].in,//2016-11-11',
      adults: '1'
    };
    console.log(routeIndex + ': ' + routes[routeIndex].in + ': ' + routes[routeIndex].out);
    console.log('outboundDate: ' + scan.outboundDate + ', inboundDate: ' + scan.inboundDate);
    session(scan, (location, scan) => {
      writeFile(location, scan);
    });
  }
});

livePoll.emit('event');
