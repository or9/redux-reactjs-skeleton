global.chai = require("chai");
global.chai.should();
global.expect = global.chai.expect;

require("../src/MyModule.spec.js");
