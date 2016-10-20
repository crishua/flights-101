'use strict';

const Agent = require('../db/agent');

const agents = (Agents) => {
  return new Promise((resolve, reject) => {
    Agent
      .createAgents(Agents)
      .then((res) => {
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
};

module.exports = agents;
