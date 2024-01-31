// const net = require('net');
//const { IP, PORT } = require("./constants");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const pass = connect();

setupInput(pass);