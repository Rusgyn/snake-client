//Setting up the Snake client and connecting to the Server.

const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", //you may confirm once server is up
    port: 50541 //you may confirm once server is up
  });

  //Receiving data from Server, once connection is established.
  conn.on("data", (data) => {
    console.log("Server says: ", data); //
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();