import React from 'react';



const Card = ({id, name, email, username}) => {
	return (
		<div className='tc pa2 ma2 dib grow shadow-hover bg-lightest-blue br3 b--dark-blue shadow-4'>
			<img alt='robots' src= {`https://robohash.org/${id}?size=200x200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}


export default Card;