var cpy = require('cpy');

cpy([	
	'index.html',
	'vendor/uikit/**/*.js',
	'vendor/uikit/**/*.css',
	'vendor/modernizr-*.min.js'
], '../build/', {
	cwd: 'client',
  parents: true
}, function () {    
	console.log('files copied');
});