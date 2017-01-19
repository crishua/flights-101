'use strict';

const fs = require('fs');

const settings = require('./settings');
var agentsImport = require('./import/agents');
var carriersImport = require('./import/carriers');
var placesImport = require('./import/places');
var legsImport = require('./import/legs');
var segmentsImport = require('./import/segments');
var itinerariesImport = require('./import/itineraries');

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
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }

      })
    }
  });
}

var dumpFiles = function (files) {
  return files.map((file) => {
    // console.log(file + ' reading');
    return new Promise((resolve, reject) => {
      var json = {};
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
        reject(msg);
      });
  }, Promise.resolve());

