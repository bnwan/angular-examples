'use strict';

var config = {
  port: '8080'
};

if(process.env.NODE_ENV === 'prod'){
  config.realmName = 'https://agilemarkets.weareadaptive.com:443';
}

module.exports = config;
