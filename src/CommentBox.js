var React = require("react");

module.exports = React.createClass({
	getInitialState: renderBoxInitialState,
	componentDidMount: componentDidMount,
	loadCommentsFromServer: loadCommentsFromServer,
	pollInterval: 2000,
	render: renderClass,
	handleCommentSubmit: handleCommentSubmit
});

function handleCommentSubmit (comment) {
}

function componentDidMount () {
	//this.loadCommentsFromServer();
	//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
}

function loadCommentsFromServer () {
	//var sessionData = sessionStorage.getItem("comments.json");

	//var xhr = new XMLHttpRequest();
	//xhr.open("GET", this.props.url, true);
	//xhr.onload = dataLoaded.bind(this);
	//xhr.onerror = dataLoadError.bind(this);
	//xhr.send();
}

function dataLoaded (xhr) {
	//this.setState({data: JSON.parse(xhr.target.responseText)});
}

function dataLoadError (xhr) {
	//console.error(this.props.url, xhr.status, xhr.response);
}

function renderClass () {
	return (
		<div className="commentBox">
		</div>
	);
}

function renderBoxInitialState () {
	return { data: [] };
}

