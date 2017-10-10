import React, { Component } from 'react';

// import component from another file
// import from './' berarti file nya kita yang bikin
import Profile from './components/Profile';
import Car from './components/Car';
import Hardware from './components/Hardware';

class App extends Component {

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
			</div>
		);
	}
}

export default App;
