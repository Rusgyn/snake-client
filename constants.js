// Contains all the constant values in end-user side used in our snake project.

//Connection details
const IP = "localhost";
const PORT = 50541;

//Player detail
const NAME = "Name: RLM";

//Snake movement command to the server.
const UP = "Move: up";
const LEFT = "Move: left";
const DOWN = "Move: down";
const RIGHT = "Move: right";

//Snake canned messages to the server.
const WELCOME = "Say: Hi, Welcome!";
const ENJOY = "Say: Enjoy";
const COOL = "Say: Cool";
const BYE = "Say: Bye";

const keys = {
  //snake movement 
  'w': UP,
  'a': LEFT,
  's': DOWN,
  'd': RIGHT,
  //canned messages
  'z': WELCOME,
  'x': ENJOY,
  'c': COOL,
  'q': BYE
};
//To obtain the key properties of keys object.
const elements = Object.keys(keys);

module.exports = {
  IP,
  PORT,
  NAME,
  UP,
  LEFT,
  DOWN,
  RIGHT,
  WELCOME,
  ENJOY,
  COOL,
  BYE,
  keys,
  elements
};
