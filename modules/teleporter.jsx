import React from 'react';
export default class Teleporter extends React.Component {
	render() {
		return(
			<div>
				<button className="upgrade" disabled={this.props.cookieCount < this.props.teleporterCost} onClick={this.props.buyTeleporter}>
					<div className="upgrade-stats">
						<span>Owned:{this.props.numberOfTeleporters}</span>
						<span>Cost:{this.props.teleporterCost}</span>
						<span>CPS:+20</span>
					</div>
					<div className="upgrade-title">
						<h2>Teleporter</h2>
					</div>
				</button>
			</div>
		);
	}
}