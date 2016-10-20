'use strict';

const Sequelize = require('sequelize');
const settings = require('../settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false});

const Segment = require('./segment');
const Leg = require('./leg');

const SegmentLeg = sequelize.define('SegmentLeg', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'Id'
  },
  SegmentId: {
    type: Sequelize.INTEGER,
    field: 'SegmentId',
    references: {
      model: Segment.Id,
      key: 'Id'
    }
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
  timestamps: false
});

module.exports.SegmentLeg = SegmentLeg;

function createSegmentLeg(segmentLeg) {
  return SegmentLeg.create({
    SegmentId: segmentLeg.SegmentId,
    LegId: segmentLeg.LegId
  }, {
    ignoreDuplicates: true
  });
}

module.exports.createSegmentLeg = createSegmentLeg;

function createSegmentLegs(segmentLegs) {
  return SegmentLeg.bulkCreate(segmentLegs, {
    ignoreDuplicates: true
  });
}

module.exports.createSegmentLegs = createSegmentLegs;
