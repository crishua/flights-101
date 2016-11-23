'use strict';

const assert = require('assert');
const Sequelize = require('sequelize');
const settings = require('../app/settings');
const sequelize = new Sequelize(
  `${settings.db.dialect}://${settings.db.username}:${settings.db.password}@${settings.db.url}`,
  {logging: false}
  );

describe('query db', function () {
  it('should query aws', function (done) {
  	sequelize.query("SELECT * FROM agent LIMIT 10;").spread(function(results, metadata) {
  	// Results will be an empty array and metadata will contain the number of affected rows.
  	console.log(results);
    assert.equal(results.length, 10);
  	done();
	});
  });
});

describe('insert db', function () {
  it('should insert aws', function (done) {
  	sequelize.query("INSERT INTO agent (Id, Name)  values (0, 'Crisita');").spread(function(results, metadata) {
  	// Results will be an empty array and metadata will contain the number of affected rows.
  	console.log(results, metadata.affectedRows);
    assert.equal(metadata.affectedRows, 1);
  	done();
	});
  });
});

describe('delete db', function () {
  it('should insert aws', function (done) {
  	sequelize.query("DELETE FROM agent where Id = 0;").spread(function(results, metadata) {
  	// Results will be an empty array and metadata will contain the number of affected rows.
  	console.log(results, metadata.affectedRows);
    assert.equal(metadata.affectedRows, 1);
  	done();
	});
  });
});
