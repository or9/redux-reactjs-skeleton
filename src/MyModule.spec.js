// Module import syntax
// import * as MyModule from "./MyModule.js";
//
// Class import syntax
import MyModule from "./MyModule.js";

describe("MyModule", function () {

	it("exists", function () {
		MyModule.should.exist;
	});


	it("should have a getter for eventName", function () {
		let myModule = new MyModule();
		myModule.eventName.should.equal("_test");
	});

});
