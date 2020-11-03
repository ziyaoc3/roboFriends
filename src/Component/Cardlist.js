import React from 'react';
import Card from './Card';


const cardlist =({robo}) =>{
//	if (true){
//		throw new Error ("nooooo!")
//	}  using this one to test error message
	return(
		<div>
			{
				robo.map((items, i)=> {
					return (
						<Card 
						key= {i} 
						id = {robo[i].id}
						name = {robo[i].name}
						email = {robo[i].email} 
						/>
					);
				})
			}
		</div>
	);
		
};

export default cardlist;