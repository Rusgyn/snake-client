const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "localhost", //you may confirm once server is up
    port: 50541 
  });

  //Receiving data from Server, once connection is established.
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server"); //Client/Player to see.

    //Transmitting data to the Server
    conn.write("Name: RLM"); //this popup in the server once connection is established.
    // conn.write("Move: up");
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  return conn;
  
};

module.exports = {
  connect
}
