'use strict';

const assert = require('assert');
const fs = require('fs');
const Agent = require('../app/db/agent');
const file = '/Users/Moy/JSProjects/flights-101/app/results/itinerary_SYD-iata_LHR-iata__October-11-2016-8_57_20_pm.json';
var json = {};

describe('test a file', function () {

  beforeEach((done) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        throw new Error(err);
      }
      //decode JSON
      json = JSON.parse(data);
      //console.log(json.Query);
      done();
    });
  });

  describe('get agents', function () {

    it('would list agents', function (done) {
      json.Agents.forEach((agent, index) => {
        Agent.createAgent({
          AgentId: agent.Id,
          Name: agent.Name,
          ImageUrl: agent.ImageUrl,
          Status: agent.Status,
          OptimisedForMobile: agent.OptimisedForMobile,
          Type: agent.Type
        }).then((res) => {
          console.log(res);
          //assert.equal(true, true);
          return false;
        });

        if (index <= json.Agents.length) {
          return true;
        }else {
          done();
        }
      });
    });
  });
});
