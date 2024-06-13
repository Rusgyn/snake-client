//setupInput() and handleUserInput() Scripts - establish our UI (user interface) where players can send keyboard commands which we will soon use to control the snake.

const { keys, elements } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  
  connection = conn;

  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times

  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf-8"); // interpret data to text
  stdin.resume(); // resume stdin so that the program can listen

  //Event listener is registered when we call the `on` function and takes two arguments (The type of data we want to respond, callback() that runs when the event is heard by the listener)
  stdin.on("data", handleUserInput);
  
  return stdin; // return the stdin object so we can it elsewhere in the program.
};

//The handleUserInput() runs when the event is heard.
const handleUserInput = function(inputKey) {

  let key = inputKey.toLowerCase();

  if (key === "\u0003") { //Key terminates the game session using `ctrl` + `c`
    process.exit();
  }

  for (let element of elements) {
    // Sending the movement commands to the server to control the snake in four directions, and canned messages.
    if (element === key) {
      connection.write(keys[element]);
    }
  }

};

module.exports = setupInput;