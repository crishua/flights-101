'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const Agent = sequelize.define('Agent', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field:'Id'
  },
  Name: {
    type: Sequelize.STRING,
    field: 'Name'
  },
  ImageUrl: {
    type: Sequelize.STRING,
    field: 'ImageUrl'
  },
  Status: {
    type: Sequelize.STRING,
    field: 'Status'
  },
  OptimisedForMobile: {
    type: Sequelize.BOOLEAN,
    field: 'OptimisedForMobile'
  },
  Type: {
    type: Sequelize.STRING,
    field: 'Type'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Agent = Agent;

function createAgent(agent) {
  return Agent.create({
    Id: agent.Id,
    Name: agent.Name,
    ImageUrl: agent.ImageUrl,
    Status: agent.Status,
    OptimisedForMobile:agent.OptimisedForMobile,
    Type: agent.Type
  }, {
    ignoreDuplicates: true
  });
}

module.exports.createAgent = createAgent;

function createAgents(agents) {
  return Agent.bulkCreate(agents, {
    ignoreDuplicates: true
  });
}

module.exports.createAgents = createAgents;
