
const net = require('net');

const { connect } = require("./client");
connect();

console.log("Connecting ...");
//
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    // your code here
    process.stdout.write('.');
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};
 setupInput()
