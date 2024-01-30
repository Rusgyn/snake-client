const net = require('net');

// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (key) {
    // on any input from stdin, output a "." to stdout
    process.stdout.write('.');
    
    if (key === 'w') {
      connection.write("Move: up")
    } else if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 's') {
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
    } else if (key === '\u0003') { // \u0003 maps to ctrl+c input
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

 module.exports = {
  setupInput,
 }
