const net = require('net');
const { IP, PORT, NAME, UP, LEFT, DOWN, RIGHT, HI, ENJOY, OK, BYE, keys, char } = require("./constants");

const setupInput = (connection) => {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (key) {
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      process.exit();
    } else if (!char.includes(key)) {
      process.stdout.write('.'); //output a "." to stdout
    } else if (char.includes(key)) {
      connection.write(keys[key.toLowerCase()]);
    }
  }

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };