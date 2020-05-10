import React from 'react';
import '../../../css/main/storageAdmin.css';
import { Link } from 'react-router-dom';

const reportAuth = () => {
	return (
		<>
			<div className='container-fluid wrapper m-0 p-0'>
				<div className='topBar text-center'>SalesPlug</div>
			</div>

			<div>
				<main className='content-wrapper row'>
					{/*=========== Menu Nav Display Here ===================*/}

					<section className='col-md-2 menuNav'>
						<div className='d-block text-right'>
							{' '}
							<i className='fas fa-bars hamburger fa-2x'></i>
						</div>
						<div className='d-flex flex-column menuList'>
							<li className='d-block menuItem'>
								<Link to='/sales-pitch'>
									{' '}
									<i className='fas fa-bars hamburger'></i> &nbsp; Sales Pitch{' '}
								</Link>
							</li>
							<li className='d-block menuItem'>
								<Link to='/inbound'>
									{' '}
									<i className='fas fa-bars hamburger'></i> &nbsp; Inbound
								</Link>
							</li>
							<li className='d-block menuItem'>
								<Link to='/storage-admin'>
									{' '}
									<i className='fas fa-bars hamburger'></i> &nbsp; Storage Admin
								</Link>
							</li>
							<li className='d-block menuItem'>
								<Link to='/report'>
									{' '}
									<i className='fas fa-bars hamburger'></i> &nbsp; Report
								</Link>
							</li>
							<li className='d-block menuItem'>
								<Link to='/access-control'>
									{' '}
									<i className='fas fa-bars hamburger'></i> &nbsp; Access
									Control{' '}
								</Link>
							</li>
						</div>
					</section>
					{/*=========== End of Menu Nav Display Here ===================*/}

					{/*======================= Page Body Display Starts Here ============================*/}

					<section className='col-md-10 pageBody p-0'>
						<h2 className='pageTitle p-4'> Storage Admin </h2>

						<div className='pageContent authPages'>
							<div className='card w-75 h-center p-5'>
								<h5 className='card-title mb-5 text-center'>
									{' '}
									Report Activity Login
								</h5>

								<form className='w-50 h-center'>
									<div className='form-group my-2'>
										<label htmlFor='username'> Username </label>

										<input type='text' className='form-control rounded-0' />
									</div>
									<div className='form-group my-2'>
										<label htmlFor='username'> Password </label>

										<input type='password' className='form-control rounded-0' />
									</div>

									<div className='form-group'>
										{' '}
										<input
											type='checkbox'
											className='form-check-input'
											name='keepMeSignedIn'
										/>
										<label htmlFor='keepMeSignedIn' className='text-muted'>
											Keep me Signed In?{' '}
										</label>
									</div>

									<div className='w-25 h-center'>
										<button className='btn btn-block rounded-0'> Enter</button>
									</div>
								</form>
							</div>
						</div>
					</section>
					{/*======================= End of Page Body Display Starts Here ============================*/}
				</main>
			</div>
		</>
	);
};

export default reportAuth;
