import React from 'react';
export default class Cookie extends React.Component {
	render() {
		return (
			<div className="cookie-container">
				<h1>{this.props.cookieCount} cookies</h1>
				<span >per second: {this.props.cps}</span><br />
				<button className="cookie" onClick={this.props.increment}>Kaka</button>
			</div>
		);
	}
} 