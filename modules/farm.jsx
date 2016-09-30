import React from 'react';
export default class Farm extends React.Component {
	render() {
		return(
			<div>
				<button className="upgrade" disabled={this.props.cookieCount < this.props.farmCost} onClick={this.props.buyFarm}>
						<div className="upgrade-stats">
						<span>Owned:{this.props.numberOfFarms}</span>
						<span>Cost:{this.props.farmCost}</span>
						<span>CPS: +5</span>
					</div>
					<div className="upgrade-title">
						<h2>Farm</h2>
					</div>
				</button>
			</div>
		);
	}
}