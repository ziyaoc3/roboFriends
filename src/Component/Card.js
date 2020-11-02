import React from 'react';


//const Card =(props) => {
//	return(
//		<div className = 'tc bw2 bg-light-yellow br3 flex-wrap dib pa3 ma3'>
//			<img alt ='ROBOT' src = {`https://robohash.org/${props.id}?size=200x250`}/>
//			<div>
//				<h2>{props.name }</h2>
//				<p>{props.email }</p>
//				<p>{}</p>
//			</div>
//			
//		</div>
//	);
//};
//
//export default Card;
//
//
//export const CardEmily =({name, email, id}) => {
//	return(
//		<div className = 'tc bw2 bg-light-yellow br3 flex-wrap dib pa3 ma3 grow-large'>
//			<img alt ='ROBOT' src = {`https://robohash.org/${id}?size=200x250`}/>
//			<div>
//				<h2>{name }</h2>
//				<p>{email }</p>
//			</div>
//			
//		</div>
//	);
//};
//const John = {};
//export default Card;

const Card =(props) => {
	const {name, id, email : e}= props;
	return(
		<div className = 'tc bw2 bg-light-green br3  dib  pa3 ma3 grow shadow-5'>
			<img  alt ='ROBOT' src = {`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2 style ={{ width: '200px' , whiteSpace: 'nowrap', overflow:'hidden' , textOverflow: 'ellipsis' }}>
					{name}
				</h2>
				<p>{e }</p>
			</div>
			
		</div>
	);
};

export default Card;