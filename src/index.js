var React = require("react");
var ReactDOM = require("react-dom");
var CommentBox = require("./CommentBox");

// Static content
ReactDOM.render(
	<section>
		<h1>Hello again, world.</h1>
		<p>Some static content in ReactDOM render method</p>
		<p>This replaces the thing with ID of "example"</p>
	</section>,

	document.getElementById("example")
);

// Using module
ReactDOM.render(
	<CommentBox 
		url="/api/data.json"
		pollInterval={ 2000 } />,

	document.getElementById("content")
);

