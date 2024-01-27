const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.2.17", //you may confirm once server is up
    port: 50541 
  });

  //Receiving data from Server, once connection is established.
  conn.on("data", (data) => {
    console.log("Server s  ays: ", data); //
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
  
};


module.exports = {
  connect
}
