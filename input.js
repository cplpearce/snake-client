const stdin = process.stdin;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 **/

let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));

  const handleUserInput = (key) =>{
    console.log(key)
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        console.log('Up');
        conn.write('Move: up');
      }
      if (key === 'a') {
        console.log('Left');
        conn.write('Move: left');
      }
      if (key === 's') {
        console.log('Down');
        conn.write('Move: down');
      }
      if (key === 'd') {
        console.log('Right');
        conn.write('Move: right');
      }
    };
  
  return stdin;
}

module.exports = {setupInput};