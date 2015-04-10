'use strict';

var openfin = require('openfin-launcher');
var config = require('../config');

var url = 'http://' + config.server.host + ':' + config.server.port + '/app.json';

var api = {
  init: function () {
    openfin.launchOpenFin({
        configPath: url
      })
      .then(function () {
        console.log('success!');
      })
      .fail(function (error) {
        console.log('error!', error);
      });
  }
};

module.exports = api;
