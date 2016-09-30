import React from 'react';
import Cookie from './cookie.jsx';
import Grandma from './grandma.jsx';
import Farm from './farm.jsx';
import Mine from './mine.jsx';
import Teleporter from './teleporter.jsx';
import Hadroncollider from './hadroncollider.jsx';
export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			clicks:0,
			grannyCost: 5,
			grannyCount:0,
			farmCost: 150,
			farmCount:0,
			mineCost: 300,
			mineCount:0,
			teleporterCost: 500,
			teleporterCount: 0,
			hadronColliderCost: 1000,
			hadronColliderCount: 0,
			autoIncrementCount:0, //Antal kakor som genereras per sekund
			autoIncrementCheck: true//Har värdet true till autoIncrement startas
		}
	}
	//Räknar antal klick
	cookieCounter() {
		this.setState({clicks: this.state.clicks+1});
	}
	/*-------------------------------------UPGRADES------------------------------------------------*/
	buyGranny(name){
		console.log(name)
		this.setState({
			clicks: this.state.clicks - this.state.grannyCost,//Subtraherar kostnad från clicks
			grannyCount: this.state.grannyCount + 1, //Antal grannys ökar med 1
			grannyCost: Math.ceil(this.state.grannyCost * 1.05),//Ökar kostnad för grannys
			autoIncrementCount: this.state.autoIncrementCount += 1,//Ökar autogenererade clicks med 1
		});
		this.autoIncrementCheck()		
	}

	buyFarm(){
		this.setState({
			clicks: this.state.clicks - this.state.farmCost,
			farmCount: this.state.farmCount + 1,
			farmCost: Math.round(this.state.farmCost * 1.05),
			autoIncrementCount: this.state.autoIncrementCount += 5,
		});
		this.autoIncrementCheck()
	}

	buyMine(){
		this.setState({
			clicks: this.state.clicks - this.state.farmCost,
			mineCount: this.state.mineCount + 1,
			mineCost: Math.round(this.state.mineCost * 1.05),
			autoIncrementCount: this.state.autoIncrementCount += 10,
		});
		this.autoIncrementCheck()
	}

	buyTeleporter(){
		this.setState({
			clicks: this.state.clicks - this.state.teleporterCost,
			teleporterCount: this.state.teleporterCount + 1,
			teleporterCost: Math.round(this.state.teleporterCost * 1.05),
			autoIncrementCount: this.state.autoIncrementCount += 20,
		});
		this.autoIncrementCheck()
	}

	buyHadronCollider(){
		this.setState({
			clicks: this.state.clicks - this.state.hadronColliderCost,
			hadronColliderCount: this.state.hadronColliderCount + 1,
			hadronColliderCost: Math.round(this.state.hadronColliderCost * 1.05),
			autoIncrementCount: this.state.autoIncrementCount += 50,
		});
		this.autoIncrementCheck()
	}
	//Kontrollerar om autoIncrement ska anropas
	autoIncrementCheck() {
		if(this.state.autoIncrementCheck === true){
			this.setState({autoIncrementCheck: this.state.autoIncrementCheck = false})
			this.autoIncrement();
		}
	}
	//Styr med vilket intervall kakor ska autogenereras
	autoIncrement() {
		if(this.state.autoIncrementCount > 0) {
			var interval = 1000 / this.state.autoIncrementCount;
			if (interval > 10){
				setTimeout(()=>{
				this.setState({clicks: this.state.clicks += 1});
				this.autoIncrement()
				},interval)
			}
			//När interval minskar till 10 ökar antal kakor som genereras per sekund istället för att interval minskar
			//Anledningen är att det verkar finnas en gräns på 4ms
			else {
				var counter = this.state.autoIncrementCount/100;
				console.log("rest" + counter);
				setTimeout(()=>{
				this.setState({clicks: this.state.clicks += counter});
				this.autoIncrement()
				},10)
			}
			
		}
	}
	
	render() {
		return (
			<div>
				<Cookie increment={this.cookieCounter.bind(this)} cookieCount={this.state.clicks.toFixed(0)} cps={this.state.autoIncrementCount} />
				<div className="upgrade-container">
					<Grandma name="granny" buyGranny={this.buyGranny.bind(this, "granny")} numberOfGrannys={this.state.grannyCount} cookieCount={this.state.clicks} grannyCost={this.state.grannyCost}/>
					<Farm buyFarm={this.buyFarm.bind(this)} numberOfFarms={this.state.farmCount} cookieCount={this.state.clicks} farmCost={this.state.farmCost}/>
					<Mine buyMine={this.buyMine.bind(this)} numberOfMines={this.state.mineCount} cookieCount={this.state.clicks} mineCost={this.state.mineCost}/>
					<Teleporter buyTeleporter={this.buyTeleporter.bind(this)} numberOfTeleporters={this.state.teleporterCount} cookieCount={this.state.clicks} teleporterCost={this.state.teleporterCost}/>
					<Hadroncollider buyHadronCollider={this.buyHadronCollider.bind(this)} numberOfHadronColliders={this.state.hadronColliderCount} cookieCount={this.state.clicks} hadronColliderCost={this.state.hadronColliderCost}/>
				</div>
			</div>
		);
	}
}