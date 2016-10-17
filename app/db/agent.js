'use strict';

const Sequelize = require('sequelize');
const settings = require('./settings');
const sequelize = new Sequelize(`${settings.db.dialect}://${config.db.username}:${config.db.password}@${config.db.url}`);

const Agent = sequelize.define('agent', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field:'id'
  },
  Name: {
    type: Sequelize.STRING,
    field: 'agent'
  },
  ImageUrl: {
    type: Sequelize.STRING,
    field: 'imageUrl'
  },
  Status: {
    type: Sequelize.STRING,
    field: 'status'
  },
  OptimisedForMobile: {
    type: Sequelize.STRING,
    field: 'optimisedForMobile'
  },
  Type: {
    type: Sequelize.STRING,
    field: 'type'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Agent = Agent;

function createAgent(agent) {
  return Agent.create({
    ID: agent.Id,
    Name: agent.Name,
    ImageUrl: agent.ImageUrl,
    Status: agent.Status,
    OptimisedForMobile:agent.OptimisedForMobile,
    Type: agent.Type
  });
}

module.exports.createAgent = createAgent;
