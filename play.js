// Script that calls our function that establishes connection to the server.

const connect = require('./client'); // Import the function to use.
const setupInput = require('./input'); // Import the function that handle user input.

console.log("Connecting ... ");

let passTheConn = connect(); // Assigning thr return object of connect() to a variable.
setupInput(passTheConn); // the object returned by connect() is passed into setupInput()