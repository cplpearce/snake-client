const stdin = process.stdin;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 **/

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));

  const handleUserInput = (key) =>{
      if (key === '\u0003') {
        process.exit();
      }
      if (key.name === 'a') {
        client.write('Move: left');
      }
      if (key.name === 'd') {
        process.exit();
      }
      if (key.name === 'w') {
        process.exit();
      }
    };
  
  return stdin;
}

module.exports = {setupInput};