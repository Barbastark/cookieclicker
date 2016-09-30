import React from 'react';
export default class Grandma extends React.Component {
	render() {
		return(
			<div>
				<button className="upgrade" name="granny" disabled={this.props.cookieCount < this.props.grannyCost} onClick={this.props.buyGranny}>
					<div className="upgrade-stats">
						<span>Owned:{this.props.numberOfGrannys}</span>
						<span>Cost:{this.props.grannyCost}</span>
						<span>CPS: +1</span>
					</div>
					<div className="upgrade-title">
						<h2>Granny</h2>
					</div>
				</button>
			</div>
		);
	}
}