import * as greet from "./greet.js";
import math from "./common/math.js";
import sinon from "sinon";

const friend = "World";

sinon.stub(math, "add").returns(50);
// sinon.stub(greet, "simple").returns(() => "FOO!");

function sayHelloToFriend(friend) {
  console.log(greet.simple(friend));
  console.log(math.add(4, 6));
}

sayHelloToFriend(friend);
