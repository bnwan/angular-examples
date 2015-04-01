'use strict';

var build = require('build-module');

var transforms = ['sassify', 'partialify', 'reactify'];
var isDebug = true;

var argv = require('minimist')(process.argv.slice(2));

if (argv.v === 'production') {
  transforms.push('uglifyify');
  isDebug = false;
}

var bundleOptions = {
  debug: isDebug
};

build.bundle({
  output: './build/app-defaults.bundle.js',
  root: './client/app-defaults.js',
  transforms: ['cssify', 'uglifyify'],
  bundleOptions: bundleOptions
});

build.bundle({
  output: './build/app.bundle.js',
  root: './client/main.js',
  transforms: transforms,
  bundleOptions: bundleOptions
});
