// Script to establish a TCP connection and log incoming messages.

const net = require("net"); // net allows our node apps to use TCP.
let port = 50541;

// Establishes a connection to our intent game server
const connect = function() {
  
  const conn = net.createConnection({
    host: "localhost",
    port: port,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf-8");

  // Handle incoming messages/data from the server.
  conn.on("data", (data) => {
    console.log("Snake Host says: ", data);
  });

  return conn;
};

console.log("Connecting ... ");
connect();