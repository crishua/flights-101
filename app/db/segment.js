'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

//const Place = require('./place');
const Carrier = require('./carrier');

const Segment = sequelize.define('Segment', {
  Id: {
    type: Sequelize.INTEGER,
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
  DepartureDateTime: {
    type: Sequelize.STRING,
    field: 'DepartureDateTime'
  },
  ArrivalDateTime: {
    type: Sequelize.STRING,
    field: 'ArrivalDateTime'
  },
  OperatingCarrier: {
    type: Sequelize.INTEGER,
    field: 'OperatingCarrier'
  },
  Duration: {
    type: Sequelize.INTEGER,
    field: 'Duration'
  },
  FlightNumber: {
    type: Sequelize.INTEGER,
    field: 'FlightNumber'
  },
  Directionality: {
    type: Sequelize.STRING,
    field: 'Directionality'
  },
  Carrier: {
    type: Sequelize.INTEGER,
    field: 'Carrier',
    references: {
      model: Carrier.Id,
      key: 'Id'
    }
  },
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Segment = Segment;

function createSegment(segment) {
  return Segment.create({
    Id: segment.Id,
    OriginStation: segment.OriginStation,
    DestinationStation: segment.DestinationStation,
    DepartureDateTime: segment.DepartureDateTime,
    ArrivalDateTime: segment.ArrivalDateTime,
    OperatingCarrier: segment.OperatingCarrier,
    Duration: segment.Duration,
    FlightNumber: segment.FlightNumber,
    Directionality: segment.Directionality,
    Carrier: segment.Carrier
  });
}

module.exports.createSegment = createSegment;

function createSegments(segments) {
  return Segment.bulkCreate(segments, {
    ignoreDuplicates: true
  });
}

module.exports.createSegments = createSegments;
