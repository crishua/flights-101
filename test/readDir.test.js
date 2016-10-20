const assert = require('assert');
const fs = require('fs');

describe('read directory', function() {
  describe('list dirs', function() {
    it('read sync dir', function() {
      const dir = '/Users/Moy/JSProjects/flights-101/app/results/';
      const files = fs.readdirSync(dir);
      assert.equal(files[0], '.resultfileshere');
    });
  });
});
