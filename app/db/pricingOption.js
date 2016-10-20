'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const agent = require('./agent');
const itinerary = require('./itinerary');

const PricingOption = sequelize.define('pricingOption', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:'Id'
  },
  AgentId: {
    type: Sequelize.STRING,
    field: 'AgentId',
    references: {
      model: agent.Id,
      key: 'Id'
    }
  },
  QuoteAgeInMinutes: {
    type: Sequelize.STRING,
    field: 'quoteAgeInMinutes'
  },
  Price: {
    type: Sequelize.FLOAT,
    field: 'Price'
  },
  ItineraryId: {
    type: Sequelize.INTEGER,
    field: 'ItineraryId',
    references: {
      model: itinerary.Id,
      key: 'Id'
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.PricingOption = PricingOption;

function createPricingOption(pricingOption) {
  return PricingOption.create({
    AgentId: pricingOption.AgentId,
    QuoteAgeInMinutes: pricingOption.QuoteAgeInMinutes,
    Price: pricingOption.Price,
    ItineraryId: pricingOption.ItineraryId
  });
}

module.exports.createPricingOption = createPricingOption;

function createPricingOptions(pricingOptions) {
  return PricingOption.bulkCreate(pricingOptions, {
    ignoreDuplicates: true
  });
}

module.exports.createPricingOptions = createPricingOptions;
