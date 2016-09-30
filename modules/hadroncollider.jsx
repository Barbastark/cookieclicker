import React from 'react';
export default class Hadroncollider extends React.Component {
	render() {
		return(
			<div>
				<button className="upgrade" disabled={this.props.cookieCount < this.props.hadronColliderCost} onClick={this.props.buyHadronCollider}>
					<div className="upgrade-stats">
						<span>Owned:{this.props.numberOfHadronColliders}</span>
						<span>Cost:{this.props.hadronColliderCost}</span>
						<span>CPS:+50</span>
					</div>
					<div className="upgrade-title">
						<h2>Hadron Collider</h2>
					</div>
				</button>
			</div>
		);
	}
}