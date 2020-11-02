import React from 'react';

const SearchBox = ({searchChange}) =>{
	return (
		<div className='pa1'>
			<input 
			type ='search'
			placeholder = 'enter robot name'
			className = 'pa3 ma1 shadow-3 ba b--light-green bw3 br3 bg-animate hover-bg-washed-green'
			onChange ={searchChange} 
			/>

		</div>
	);

};

export default SearchBox;