import _ from "../node_modules/lodash/chain/lodash.js";

export default class MyModule {
	constructor () {
		this._eventName = "_test";
	}

	get eventName () {
		return this._eventName;
	}
}

