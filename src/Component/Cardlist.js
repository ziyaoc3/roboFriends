import React from 'react';
import Card from './Card';


const cardlist =({robo}) =>{
	
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