// Script that calls our function that establishes connection to the server.

const connect = require('./client'); // Import the function to use.
const setupInput = require('./input'); // Import the function that handle user input.

console.log("Connecting ... ");

connect(); // calling the connect function that is being imported.
setupInput(); // calling the setUpInput().