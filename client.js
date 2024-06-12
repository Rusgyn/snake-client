// Connection Module. Script to establish a TCP connection and log incoming messages.

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

  // Handle incoming messages/data from the server. Event handler.
  conn.on("data", (data) => {
    console.log("Snake Host says: ", data);
  });

  // Connection event handler. Print message to the client screen when the connection is successfully established.
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Transmitting message to the sever. Sending a name.
    conn.write("Name: RLM");

    // Add multiple callbacks. Adding the supported move command by the game server.
    // let time = 0;
    // const movements = ["Move: up", "Move: left", "Move: up", "Move: right", "Move: right", "Move: down", "Move: down", "Move: right"];

    // for (let movement of movements) {
    //   setTimeout(() => {
    //     conn.write(movement);
    //   }, time += 1000);
    // }

  });

  return conn;
};

module.exports = connect;