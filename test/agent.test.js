'use strict';

const assert = require('assert');
const Agent = require('../app/db/agent');

// describe('test db', function () {
//   it('should query agent', function (done) {
//     var agent = {
//       "Id": 3986774,
//       "Name": "Travel2Be",
//       "ImageUrl": "http://s1.apideeplink.com/images/websites/t2au.png",
//       "Status": "UpdatesComplete",
//       "OptimisedForMobile": true,
//       "Type": "TravelAgent"
//     };
//
//     Agent.createAgent({
//       AgentId: agent.Id,
//       Name: agent.Name,
//       ImageUrl: agent.ImageUrl,
//       Status: agent.Status,
//       OptimisedForMobile: agent.OptimisedForMobile,
//       Type: agent.Type
//     }).then((res) => {
//       console.log(res);
//       assert.equal(agent, res.dataValues);
//       done();
//     }).catch((error) => {
//       assert.throws(error, Error);
//       done();
//     });
//   });
// });

describe('test db', function () {
  it('should query agent', function (done) {
    var agent = {
      "Name": "Crisita"
    };

    Agent.createAgent({
      Name: agent.Name,
    }).then((res) => {
      console.log(res);
      assert.equal(agent, res.dataValues);
      done();
    }).catch((error) => {
      console.log(error)
      assert.equal(error, Error);
      done();
    });
  });
});
