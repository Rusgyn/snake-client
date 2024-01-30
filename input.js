const net = require('net');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    // on any input from stdin, output a "." to stdout
    process.stdout.write('.');
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};
 
 module.exports = {
  setupInput,
 }
