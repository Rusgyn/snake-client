const net = require('net');
const { IP, PORT, NAME } = require("./constants");

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
    console.log("Successfully connected to game server"); //appears in Client/Player screen.
    //Transmitting data to the Server
    conn.write(NAME); //popup in the server once connection is established.
  });

  conn.setEncoding("utf8"); //interpret incoming data as text

  return conn;
  
};

module.exports = { connect };
