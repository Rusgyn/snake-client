// Client page

const net = require("net"); // net allows our node apps to use TCP.
let port = 50541;

// Establishes a connection to our intent game server
const connect = function() {
  
  const conn = net.createConnection({
    host: "localhost",
    port: port,
  });

  // Handle incoming messages/data from the server.
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // Interpret incoming data as text
  conn.setEncoding("utf-8");

  return conn;
};

console.log("Connecting ... ");
connect();