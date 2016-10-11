const assert = require('assert');
const errorCodes = require('../app/errorCodes');

describe('ERROR', function() {
  describe('CODES', function() {
    it('SHOULD GET CODE', function() {
      console.log(errorCodes.session['201']);
      assert.equal(errorCodes.session['201'], 'Created – The session has been created');
    });
  });
});
