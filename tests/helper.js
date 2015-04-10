'use strict';

require('angular-mocks');
var chai = require('chai');
chai.use('sinon-chai');
var sinon = require('sinon');

beforeEach(function(){
  this.sinon = sinon.sandbox.create();
});

afterEach(function(){
  this.sinon.restore();
});

module.exports = {
  should: chai.should
};
