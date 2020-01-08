import * as greet from "./greet.js";
import math from "./common/math.js"; // this module is written with CommonJS syntax; it can be stubbed
import sinon from "sinon";

const friend = "World";

sinon.stub(math, "add").returns(50);

// NOTE: Cannot stub ES Modules and their methods. Sinon recognizes this and throws an error.
// sinon.stub(greet, "simple").returns(() => "FOO!");

function sayHelloToFriend(friend) {
  console.log(greet.simple(friend));
  console.log(math.add(4, 6));
}

sayHelloToFriend(friend);
