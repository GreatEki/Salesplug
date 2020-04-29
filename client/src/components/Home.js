import React from 'react';
import Navbar from './templates/Navbar';

const Home = () => {
	return (
		<>
			<div className='wrapper'>
				<Navbar />

				<div className='container-fluid bg-success'>
					<h1> The rest of the items</h1>
				</div>
			</div>
		</>
	);
};

export default Home;
