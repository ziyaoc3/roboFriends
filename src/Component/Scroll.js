import React from 'react';

const Scroll = (props)=> {
	return(
		<div style ={{ overflow : 'scroll', height : '700px', border : '1px solid'}}>
			{props.children}
		
		</div>
	);

};


export default Scroll;
