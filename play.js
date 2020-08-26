const { connect } = require('./client');
const { setupInput } = require('./input');
const { IP, PORT } = require('./constants');

console.clear();
console.log(`Server Address: ${IP}:${PORT}`);
console.log('Connecting ...');

setupInput(connect(IP, PORT));