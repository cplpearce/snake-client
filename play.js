const net = require('net');
const {connect} = require('./client')

console.clear();

// connect to danger noodle game
console.log('Connecting ...');
connect();