const net = require('net');
const { IP, PORT, NAME, UP, LEFT, DOWN, RIGHT, HI, ENJOY, OK, BYE, keys, char } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //Receiving data from Server, once connection is established.
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server"); //Client/Player to see.
    //Transmitting data to the Server
    conn.write(NAME); //this popup in the server once connection is established.
    // conn.write("Move: up");
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  return conn;
  
};

module.exports = { connect };
