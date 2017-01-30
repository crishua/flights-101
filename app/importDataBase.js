'use strict';

const fs = require('fs');

const settings = require('./settings');
const agentsImport = require('./import/agents');
const carriersImport = require('./import/carriers');
const placesImport = require('./import/places');
const legsImport = require('./import/legs');
const segmentsImport = require('./import/segments');
const itinerariesImport = require('./import/itineraries');

const dir = settings.importDir;
const files = fs.readdirSync(dir);

function fileToJSON(file) {
  return new Promise((resolve, reject) => {
    if (file !== '.resultfileshere') {
      fs.readFile(dir + '/' + file, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        }
        //decode JSON
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (error) {
          reject(error);
        }
      });
    }
  });
}

const dumpFiles = function (files) {
  return files.map((file) => {
    // console.log(file + ' reading');
    return new Promise((resolve, reject) => {
      let json = {};
      fileToJSON(file)
        .then((res) => {
          json = res;
          // console.log('agents');
          return agentsImport(json.Agents)
        })
        .then(() => {
          // console.log('places');
          return placesImport(json.Places)
        })
        .then(() => {
          // console.log('carriers');
          return carriersImport(json.Carriers)
        })
        .then(() => {
          // console.log('segments');
          return segmentsImport(json.Segments)
        })
        .then(() => {
          // console.log('legs');
          return legsImport(json.Legs)
        })
        .then(() => {
          // console.log('itineraries');
          let country = json.Query.Country;
          let currency = json.Query.Currency;
          return itinerariesImport(json.Itineraries, file, country, currency)
        })
        .then(() => {
          resolve('done: ' + file);
        })
        .catch((error) => {
          reject('error: ' + error + ' in ' + file)
        })
    });
  });
};

dumpFiles(files)
  .reduce((p, f) => {
    return p
      .then(f)
      .catch((err) => {
        let msg = 'dumps reduce error' + err;
        console.log(msg);
      });
  }, Promise.resolve());

