const { connect } = require('./client');
const { setupInput } = require('./input');
console.clear();

console.log('Connecting ...');
connect();

setupInput();