'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const pricingOption = require('./pricingOption');

const Itinerary = sequelize.define('Itinerary', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: null
  },
  OutboundLegId: {
    type: Sequelize.STRING,
    field: 'OutboundLegId'
  },
  InboundLegId: {
    type: Sequelize.STRING,
    field: 'InboundLegId'
  },
  FileName: {
    type: Sequelize.STRING,
    field: 'FileName'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Itinerary = Itinerary;

function createItinerary(itinerary) {
  return Itinerary.create({
    OutboundLegId: itinerary.OutboundLegId,
    InboundLegId: itinerary.InboundLegId,
    FileName: itinerary.FileName
  });
}

module.exports.createItinerary = createItinerary;
