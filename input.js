//setupInput() and handleUserInput() Scripts - establish our UI (user interface) where players can send keyboard commands which we will soon use to control the snake.

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times

  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf-8"); // interpret data to text
  stdin.resume(); // resume stdin so that the program can listen

  //Event listener is registered when we call the `on` function and takes two arguments (The type of data we want to respond, callback() that runs when the event is heard by the listener)
  stdin.on("data", handleUserInput);
  
  return stdin; // return the stdin object so we can it elsewhere in the program.
};

//The callback runs when the event is heard.
const handleUserInput = function (key) {
  if (key === "\u0003") { //Key terminates the game session using `ctrl` + `c`
    process.exit();
  }
};

module.exports = setupInput;