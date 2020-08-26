const net = require('net');

const connect = function() {
  // create socket connection
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // when the server says something, print it
  conn.on('data', (data) => {
    console.log(data)
  // set all the encoding to utf-8
  });
  conn.setEncoding('utf-8');

  return conn;
}

connect();

module.exports = {connect}