import React from 'react';
import '../../css/BusinessAuth.css';
import { Link } from 'react-router-dom';

const BusinessAuth = () => {
	return (
		<div className='login-wrapper container-fluid'>
			<div className='row'>
				<section className='side-left full-height col-12 col-lg-6 '>
					<img
						src='/webImages/salesplug-logo.png'
						alt='logo'
						className='d-block'
					/>
					<div className='card bg-white'>
						<form className='form px-4'>
							<div className='form-group'>
								<label htmlFor='username' className='label text-muted'>
									{' '}
									Username
								</label>

								<input type='text' name='username' className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor='password' className='label text-muted'>
									{' '}
									Password
								</label>

								<input type='text' name='password' className='form-control' />
							</div>

							<div className='form-group'>
								<button className='btn btn-block btn-primary'> Enter</button>
							</div>
						</form>

						<Link to='/' className='px-4'>
							{' '}
							Forgot Password{' '}
						</Link>
					</div>
					<p className='text-white text-center'>
						&copy; 2020 salesplug.com, inc. All rights reserved. | Privacy
					</p>
				</section>
				<section className='side-right col-lg-6 col-12'>
					<h5> Image Section</h5>
				</section>
			</div>
		</div>
	);
};

export default BusinessAuth;
