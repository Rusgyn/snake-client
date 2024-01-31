//This file contains the constants in this project.

//Connection details
const IP = "localhost";
const PORT = 50541;

//Player detail
const NAME = "Name: RLM";

//use for snake movement
const UP = "Move: up";
const LEFT = "Move: left";
const DOWN = "Move: down";
const RIGHT = "Move: right";

//use for snake canned messages
const HI = "Say: Hi, Welcome!";
const ENJOY = "Say: Enjoy";
const OK = "Say: Ok";
const BYE = "Say: Bye";

const keys = {
  //snake movement
  'w': UP,
  'a': LEFT,
  's': DOWN,
  'd': RIGHT,
  //canned messages
  'z': HI,
  'x': ENJOY,
  'c': OK,
  'q': BYE
};
//To obtain the object keys key property to be compared.
const char = Object.keys(keys);

module.exports = {
  IP, PORT, NAME, UP, LEFT, DOWN, RIGHT, HI, ENJOY, OK, BYE, keys, char
};
