'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const segmentLeg = require('./segmentLeg');
const flightNumber = require('./flightNumber');

const Leg = sequelize.define('leg', {
  Id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false,
    field: 'Id'
  },
  OriginStation: {
    type: Sequelize.INTEGER,
    field: 'OriginStation'
  },
  DestinationStation: {
    type: Sequelize.INTEGER,
    field: 'DestinationStation'
  },
  Departure: {
    type: Sequelize.STRING,
    field: 'Departure'
  },
  Arrival: {
    type: Sequelize.STRING,
    field: 'Arrival'
  },
  Duration: {
    type: Sequelize.INTEGER,
    field: 'Duration'
  },
  Stops: {
    type: Sequelize.STRING,
    field: 'Stops'
  },
  Directionality: {
    type: Sequelize.INTEGER,
    field: 'Directionality'
  },
  Carriers: {
    type: Sequelize.STRING,
    field: 'Carriers'
  },
  OperatingCarriers: {
    type: Sequelize.STRING,
    field: 'OperatingCarriers'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Leg = Leg;

function createLeg(leg) {
  return Leg.create({
    Id: leg.Id,
    OriginStation: leg.OriginStation,
    DestinationStation: leg.DestinationStation,
    Departure: leg.Departure,
    Arrival: leg.Arrival,
    Duration: leg.Duration,
    Stops: leg.Stops,
    Directionality: leg.Directionality,
    Carriers: leg.Carriers,
    OperatingCarriers: leg.OperatingCarriers
  }, {
    ignoreDuplicates: true
  }).catch(Sequelize.UniqueConstraintError, function () {})
}

module.exports.createLeg = createLeg;

function createLegs(legs) {
  return Leg.bulkCreate(legs, {
    ignoreDuplicates: true
  });
}

module.exports.createLegs = createLegs;
