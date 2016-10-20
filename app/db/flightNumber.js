'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const Carrier = require('./carrier');
const Leg = require('./leg');

const FlightNumber = sequelize.define('FlightNumber', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field: 'Id'
  },
  FlightNumber: {
    type: Sequelize.INTEGER,
    field: 'FlightNumber'
  },
  CarrierId: {
    type: Sequelize.STRING,
    field: 'CarrierId',
    references: {
      model: Carrier.Id,
      key: 'Id'
    },
  },
  LegId: {
    type: Sequelize.STRING,
    field: 'LegId',
    references: {
      model: Leg.Id,
      key: 'Id'
    }
  }
}, {
  freezeTableName: true,
  timestamps: false,
  ignoreDuplicates: true
});

module.exports.FlightNumber = FlightNumber;

function createFlightNumber(flightNumbers) {
  return FlightNumber.create({
    Id: flightNumbers.Id,
    FlightNumber: flightNumbers.FlightNumber,
    CarrierId: flightNumbers.CarrierId,
    LegId: flightNumbers.LegId
  }, {
    ignoreDuplicates: true
  });
}

module.exports.createFlightNumber = createFlightNumber;

function createFlightNumbers(flightNumbers) {
  return FlightNumber.bulkCreate(flightNumbers, {
    ignoreDuplicates: true
  });
}

module.exports.createFlightNumbers = createFlightNumbers;
