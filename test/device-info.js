let assert     = require('chai').assert
let clickshare = require('../clickshare');
let baseunitip = require('./baseunit').ip;

describe('Baseunit', function() {
  describe('deviceInfo', function() {
    describe('#modelName', function() {
      it('should return the model name of the Base Unit', function(done) {
        let baseunit = new clickshare.Baseunit(baseunitip);
        baseunit.deviceInfo.modelName().then(function(value) {
          debugger;
          assert.equal(value,'CSE-200');
          done();
        });
      });
    });
  });
});
