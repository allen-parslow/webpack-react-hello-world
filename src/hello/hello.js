import React from "react";

require("./hello.css");

export default class App extends React.Component {
	render() {
		return (
			<div className="hello alert alert-success">
				Hello world!
			</div>
		);
	}
}
