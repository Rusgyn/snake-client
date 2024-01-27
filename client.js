const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.2.17", //you may confirm once server is up
    port: 50541 
  });

  //Receiving data from Server, once connection is established.
  conn.on("data", (data) => {
    console.log("Server says: ", data); //
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server"); //Player to see.
    conn.write("Name: RLM"); //this popup in the server once connection is established.
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
  
};


module.exports = {
  connect
}
