const net = require('net');

const connect = function() {
  // create socket connection
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });


  // when the server conncts, let us know
  conn.on('connect', () => {
    console.log('YesSsSsSs, sSsSsuccesSsfully conected!');
    conn.write('Name: CJS')
  })

  // let the server know we're in town
  conn.on('connection', (client) => {
    client.write('Name: CJS');
  });

  // when the server says something, print it
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  // set all the encoding to utf-8
  conn.setEncoding('utf-8');

  return conn;
}

module.exports = {connect}