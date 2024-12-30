import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div>
			<input className='br3 b--dark-blue shadow-3 bg-lightest-blue pa2 ma3'
			type='search' 
			placeholder='search your robocop' 
			onChange= {searchChange}
			/>
		</div>
	);
}

export default SearchBox;