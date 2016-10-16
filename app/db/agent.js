'use strict';

var Sequelize = require('sequelize');
var config = require('../../app.config')();
var sequelize = new Sequelize(`${config.db.dialect}://${config.db.username}:${config.db.password}@${config.db.url}`);
