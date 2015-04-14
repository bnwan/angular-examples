'use strict';

module.exports = function () {
  return new fin.desktop.Window({
    name: 'trade-browser',
    defaultWidth: 400,
    defaultHeight: 400,
    url: 'views/trade-browser.html',
    autoShow: false,
    frame: true,
    resizable: true,
    maximizable: true
  });
};
