const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.2.17", //you may confirm once server is up
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

  // /* Below (commented out) is the move command experiment */
  //  conn.on("connect", () => {
  //   let time = 1000;
  //   const movement = ["Move: up", "Move: left", "Move: up", "Move: right", "Move: right", "Move: down", "Move: down", "Move: right"];
  //   for (let command of movement) {
  //     setTimeout(() => {
  //       conn.write(command); //Transmitting data to server, each element of movement array.
  //     }, time);
  //     time += 1000; //incrementing the initial time per loop.
  //   }
    
  // });

  conn.setEncoding("utf8"); // interpret incoming data as text

  return conn;
  
};

module.exports = {
  connect
}
