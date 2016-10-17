'use strict';

const Sequelize = require('sequelize');
const settings = require('./settings');
const sequelize = new Sequelize(`${settings.db.dialect}://${config.db.username}:${config.db.password}@${config.db.url}`);

const pricingOption = require('./pricingOption');

const Itinerary = sequelize.define('itinerary', {
  OutboundLegId: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false,
    field:'outboundLegId'
  },
  InboundLegId: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false,
    field:'inboundLegId'
  },
  PricingOption: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    field:'options',
    references: {
      model: pricingOption.id,
      key: 'pricingOptionId'
    },
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Itinerary = Itinerary;

function createItinerary(itinerary) {
  return Itinerary.create({
    OutboundLegId: itinerary.outboundLegId,
    InboundLegId: itinerary.inBoundLegId,
    Options: itinerary.pricingOptionId
  });
}

module.exports.createItinerary = createItinerary;
