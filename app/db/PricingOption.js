'use strict';

const Sequelize = require('sequelize');
const settings = require('./settings');
const sequelize = new Sequelize(`${settings.db.dialect}://${config.db.username}:${config.db.password}@${config.db.url}`);

const agent = require('./agent');

const PricingOption = sequelize.define('pricingOption', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:'id'
  },
  AgentId: {
    type: Sequelize.STRING,
    field: 'agent',
    references: {
      model: agent.Id,
      key: 'agentId'
    }
  },
  QuoteAgeInMinutes: {
    type: Sequelize.STRING,
    field: 'quoteAgeInMinutes'
  },
  Price: {
    type: Sequelize.STRING,
    field: 'price'
  },
  DeeplinkUrl: {
    type: Sequelize.STRING,
    field: 'deeplinkUrl'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.PricingOption = PricingOption;

function createPricingOption(pricingOption) {
  return PricingOption.create({
    Id: pricingOption.id,
    Agent: pricingOption.agentId,
    QuoteAgeInMinutes: pricingOption.quoteAgeInMinutes,
    Price: pricingOption.price,
    DeeplinkUrl: pricingOption.deeplinkUrl
  });
}

module.exports.createOption = createPricingOption;
