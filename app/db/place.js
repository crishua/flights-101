'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const Place = sequelize.define('Place', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field: 'Id'
  },
  ParentId: {
    type: Sequelize.INTEGER,
    field: 'ParentId'
  },
  Code: {
    type: Sequelize.STRING,
    field: 'Code'
  },
  Type: {
    type: Sequelize.STRING,
    field: 'Type'
  },
  Name: {
    type: Sequelize.STRING,
    field: 'Name'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Place = Place;

function createPlace(place) {
  return Place.create({
    Id: place.Id,
    ParentId: place.ParentId,
    Code: place.Code,
    Type: place.Type,
    Name:place.Name
  });
}

module.exports.createPlace = createPlace;

function createPlaces(places) {
  return Place.create(places,{
    ignoreDuplicates: true
  });
}

module.exports.createPlaces = createPlaces;
