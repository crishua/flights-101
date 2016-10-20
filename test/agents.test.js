'use strict';

const fs = require('fs');
const assert = require('assert');

const agentsImport = require('../app/import/agents');

describe.only('test db', function () {
  it('should insert all agents from file', function (done) {
    const dir = '/Users/Moy/JSProjects/flights-101/app/results/';
    const files = fs.readdirSync(dir);

    files.every((file) => {
      console.log(file + ' reading');
      if (!file === '.resultfileshere') {
        fs.readFile(dir + '/' + file, 'utf8', (err, data) => {
          if (err) {
            throw new Error(err);
          }
          //decode JSON
          const json = JSON.parse(data);

          agentsImport(json.Agents, (status) => {
            console.log(file + ' ' + status);
          });
        });
      }
    });

  });
});
