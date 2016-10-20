'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const agent = require('./agent');

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
      key: 'AgentId'
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
  DeeplinkUrl: {
    type: Sequelize.STRING,
    field: 'DeeplinkUrl'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.PricingOption = PricingOption;

function createPricingOption(pricingOption) {
  return PricingOption.create({
    Id: pricingOption.Id,
    AgentId: pricingOption.AgentId,
    QuoteAgeInMinutes: pricingOption.QuoteAgeInMinutes,
    Price: pricingOption.Price
  });
}

module.exports.createPricingOption = createPricingOption;

function createPricingOptions(pricingOptions) {
  return PricingOption.bulkCreate(pricingOptions, {
    ignoreDuplicates: true
  });
}

module.exports.createPricingOptions = createPricingOptions;
