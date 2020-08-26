const net = require('net');
const { connect } = require('http2');
console.clear();

/**
 * Establishes connection with the game server
 */

const conn = net.createConnection({
    host: 'localhost',
    port: 50541
});

conn.setEncoding('utf-8');

conn.on('data', (data) => {
  console.log(data)
});

console.log('Connecting ...');