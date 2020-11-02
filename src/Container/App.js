import React, {Component}from 'react';
import Cardlist from '../Component/Cardlist.js';
import SearchBox from '../Component/SearchBox.js';
import './App.css';
import Scroll from '../Component/Scroll.js';
import ErrorBoundary from '../Component/ErrorBoundary.js';

class App extends Component  {
	constructor () {
		super()
		this.state={
			robos: [],
			searchField: ''
		}
	}
	
	componentDidMount () {
		fetch ('https://jsonplaceholder.typicode.com/comments')
			.then(response => response.json())
  			.then(comments => this.setState({ robos : comments}) );
	}
	
	onSearchChange =  (event) => {
		this.setState({searchField:event.target.value})	
	}
	
	render (){
		const { robos, searchField} = this.state;
		const filterRobo = robos.filter((robot) =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		if (!robos.length){
			return <h1 className = 'f1 fw9 tc '> Loading </h1>
		} else {
			return(
			<div className = 'tc'>
				<h1 className ='f1 fw9'> RoboFriends</h1>
				<SearchBox searchChange= {this.onSearchChange} />
				<Scroll>
					<ErrorBoundary >
						<Cardlist robo = {filterRobo}/>
					</ErrorBoundary>
				</Scroll>
			</div>
			);		
		}	
	}	
};

export default App;
