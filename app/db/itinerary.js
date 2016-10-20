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
    field:'OutboundLegId'
  },
  InboundLegId: {
    type: Sequelize.STRING,
    field:'InboundLegId'
  }
}, {
  freezeTableName: true,
  timestamps: true
});

module.exports.Itinerary = Itinerary;

function createItinerary(itinerary) {
  return Itinerary.create({
    OutboundLegId: itinerary.OutboundLegId,
    InboundLegId: itinerary.InboundLegId
  });
}

module.exports.createItinerary = createItinerary;
