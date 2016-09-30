import React from 'react';
export default class Mine extends React.Component {
	render() {
		return(
			<div>
				<button className="upgrade" disabled={this.props.cookieCount < this.props.mineCost} onClick={this.props.buyMine}>
					<div className="upgrade-stats">
						<span>Owned:{this.props.numberOfMines}</span>
						<span>Cost:{this.props.mineCost}</span>
						<span>CPS:+10</span>
					</div>
					<div className="upgrade-title">
						<h2>Mine</h2>
					</div>
				</button>
			</div>
		);
	}
}