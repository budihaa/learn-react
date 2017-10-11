import React, { Component } from 'react';

// import component from another file
// import from './' berarti file nya kita yang bikin
import Profile from './components/Profile';
import Car from './components/Car';
import Hardware from './components/Hardware';

class App extends Component {

	// State
	constructor(){
		super();
		this.state = {
			number: 1
		}
	}

	// Component LifeCycle 
	componentDidMount(){
		console.log('componentDidMount');
	}

	componentWillMount(){
		console.log('componentWillMount');
	}

	componentWillReceiveProps(){

	}

	componentWillUnmount(){

	}
	// end Component LifeCycle 

	// Event 
	alertClick(){
		// Membuat number dalam state menjadi dinamis, setiap klik angka bertambah
		const number = this.state.number + 1;
		this.setState({
			number:number
		});
	}
	// End event

	render() {
		console.log('tes');
		return (
			<div>
				<p>Hello World!</p>
				
				{/* component yang diimport */}
				<Profile></Profile>
				<Car
					/* props */
					type="Lamborgini"
					price={1000} //kalo tipe data int harus pake {}
					color="red"
				></Car>
				<Hardware motherboard="intel"></Hardware>

				<p>{this.state.number}</p>
				<button onClick={() => {this.alertClick();}}>Increase Number</button>
			</div>
		);
	}
}

export default App;
