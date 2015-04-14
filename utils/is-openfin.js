'use strict';


module.exports = function () {
  if (window.fin) {
    return true;
  }
  return false;
}


//module.exports = function (callback) {
//
//  if (window.fin) {
//
////    window.fin.desktop.main(function () {
////      container.openfin = window.fin;
////      return callback(container);
////    });
//  } else {
//    return callback(container);
//  }
//};
