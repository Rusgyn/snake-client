// Connection Module. Script to establish a TCP connection and log incoming messages.

const net = require("net"); // net allows our node apps to use TCP.
const { IP, PORT, NAME } = require("./constants");

// Establishes a connection to our intent game server
const connect = function() {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Interpret incoming data as text
  conn.setEncoding("utf-8");

  // Handle incoming messages/data from the server. Event handler.
  conn.on("data", (data) => {
    console.log("Snake Host says: ", data);
  });

  // Connection event handler. Print message to the client screen when the connection is successfully established.
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Transmitting message to the sever. Sending a name.
    conn.write(NAME);

  });

  return conn;
};

module.exports = connect;