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
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        conn.write('Move: up');
      }
      if (key === 'a') {
        conn.write('Move: left');
      }
      if (key === 's') {
        conn.write('Move: down');
      }
      if (key === 'd') {
        conn.write('Move: right');
      }
      if (key === 'q') {
        conn.write('Say: SssssSs');
      }
      if (key === 'e') {
        conn.write('Say: HisSsSs');
      }
      if (key === 'f') {
        conn.write('Say: *Nom Nom*');
      }
    };
  
  return stdin;
}

module.exports = {setupInput};