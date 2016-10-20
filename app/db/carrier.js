'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const Carrier = sequelize.define('Carrier', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field: 'Id'
  },
  Code: {
    type: Sequelize.STRING,
    field: 'Code'
  },
  Name: {
    type: Sequelize.STRING,
    field: 'Name'
  },
  DisplayCode: {
    type: Sequelize.STRING,
    field: 'DisplayCode'
  }
}, {
  freezeTableName: true,
  timestamps: false,
  ignoreDuplicates: true
});

module.exports.Carrier = Carrier;

function createCarrier(carrier) {
  return Carrier.create({
    Id: carrier.Id,
    Code: carrier.Code,
    Name: carrier.Name,
    DisplayCode: carrier.DisplayCode
  }, {
    ignoreDuplicates: true
  });
}

module.exports.createCarrier = createCarrier;

function createCarriers(carriers) {
  return Carrier.bulkCreate(carriers, {
    ignoreDuplicates: true
  });
}

module.exports.createCarriers = createCarriers;
