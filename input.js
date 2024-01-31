const { keys, char } = require("./constants");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.stdout.write('\nThank you for playing!\n');
    process.exit();
  } else if (!char.includes(key)) {
    process.stdout.write('.'); //output a "." to stdout
  } else if (char.includes(key)) {
    connection.write(keys[key.toLowerCase()]);
  }
};

module.exports = { setupInput };