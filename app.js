'use strict';

var isOpenfin = require('./utils/is-openfin')();

module.exports = {
  bootstrap: function (callback) {
    if (isOpenfin) {
      window.fin.desktop.main(function () {
        return callback();
      });
    } else {
      return callback();
    }
  }
};
