import React from 'react';
import '../../../css/main/storageAdmin.css';

const storeadminAuth = () => {
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
								{' '}
								<i className='fas fa-bars hamburger'></i> &nbsp; Sales Pitch{' '}
							</li>
							<li className='d-block menuItem'>
								{' '}
								<i className='fas fa-bars hamburger'></i> &nbsp; Inbound
							</li>
							<li className='d-block menuItem'>
								{' '}
								<i className='fas fa-bars hamburger'></i> &nbsp; Storage Admin
							</li>
							<li className='d-block menuItem'>
								{' '}
								<i className='fas fa-bars hamburger'></i> &nbsp; Report
							</li>
							<li className='d-block menuItem'>
								{' '}
								<i className='fas fa-bars hamburger'></i> &nbsp; Access Control{' '}
							</li>
						</div>
					</section>
					{/*=========== End of Menu Nav Display Here ===================*/}

					{/*======================= Page Body Display Starts Here ============================*/}

					<section className='col-md-10 pageBody p-0'>
						<h2 className='pageTitle p-4'> Storage Admin </h2>

						<div div className='pageContent storeadminAuth'>
							<div className='card w-75 h-center p-5'>
								<h5 className='card-title mb-5 text-center'>
									{' '}
									Storage Admin Login
								</h5>

								<form className='w-50 h-center'>
									<div className='form-group my-2'>
										<label htmlFor='username'> Username </label>

										<input type='text' className='form-control rounded-0' />
									</div>
									<div className='form-group my-2'>
										<label htmlFor='username'> Password </label>

										<input type='text' className='form-control rounded-0' />
									</div>

									<div className='form-group'>
										<input
											type='checkbox'
											ClassName='form-check-input'
											name='keepMeSignedIn'
										/>
										<label htmlFor='keepMeSignedIn' className='text-muted'>
											&nbsp; Keep me Signed In?{' '}
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

export default storeadminAuth;
