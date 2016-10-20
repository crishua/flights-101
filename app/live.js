const session = require('./session');
const polling = require('./polling');
const fs = require('fs');
const moment = require('moment');

const scan = {
  country: 'AU',
  currency: 'AUD',
  locale: 'en-AU',
  locationSchema: 'iata',
  groupPricing: 'true',
  originPlace: 'SYD-iata',
  destinationPlace: 'LHR-iata',
  outboundDate: '2016-11-01',
  inboundDate: '2016-11-20',
  adults: '1'
};

session(scan, (location) => {
  writeFile(location);
});

var writeFile = (location) => {
  polling(location, (iti) => {
    var format = moment().format('_MMMM-DD-YYYY-h_mm_ss_a');
    if (iti) {
      iti = JSON.parse(iti);
      console.log('Status:' + iti.Status);
      const name = `_${scan.originPlace}_${scan.destinationPlace}_`;
      fs.writeFile(settings.import + '/itinerary' + name + format + '.json', JSON.stringify(iti), (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    }

    if (iti.Status !== 'UpdatesComplete') {
      writeFile(location);
    } else {
      console.log('polling complete');
    }
  });
};

