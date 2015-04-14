'use strict';

module.exports = function () {
  return {
    open: function (openfinWindow) {
      openfinWindow.show();
    },

    close: function(openfinWindow){
      console.log('close');

      openfinWindow.hide();
    },

    getCurrent: function(){
      return fin.desktop.Window.getCurrent();
    }
  };
};
