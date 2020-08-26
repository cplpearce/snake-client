const gameServer = process.argv[2];
// which server?  Added to constants.js
// None - Local : 0 - lhL
let IP = 'localhost';
let PORT = 50541;

if (Number(gameServer) === 0) (IP = '135.23.222.131') && (PORT = 50542);

module.exports = {
  IP,
  PORT
};