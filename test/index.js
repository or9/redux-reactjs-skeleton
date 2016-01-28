global.chai = require("chai");
global.should = global.chai.should;
global.expect = global.chai.expect;

require("../src/*.spec.js");
