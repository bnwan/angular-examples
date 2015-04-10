var cpy = require('cpy');

cpy([
	'index.html',
	'vendor/modernizr-*.min.js'
], '../build/', {
	cwd: 'client',
  parents: true
}, function () {
	console.log('files copied');
});
