import React from 'react';
import '../../css/main/AddQty.css';
import { Link } from 'react-router-dom';
const AddQty = () => {
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
						<h2 className='pageTitle p-4'> Item Name </h2>

						<div className='pageContent addQty'>
							<form className='w-50 h-center'>
								<div className='form-group w-50'>
									<label htmlFor='itemName'> Item Name </label>

									<select className='form-control'>
										<option> Pears Baby Lotion</option>
									</select>
								</div>
								<div className='form-group w-50'>
									<label className='d-inline'>Product ID:</label>

									<input type='text' className='d-inline ml-2' />
								</div>
								<div className='form-group w-50'>
									<label htmlFor='itemCategory'> Item Category </label>

									<select className='form-control'>
										<option> SkinCare and Cosmetics</option>
									</select>
								</div>
								<div className='form-group w-25'>
									<label htmlFor='itemCategory'> Enter Qty </label>

									<input
										className='form-control'
										name='itemCategory'
										type='text'
									/>
								</div>

								<div className='form-group w-75'>
									<label htmlFor='comment'> Comment(s)</label>

									<textarea className='form-control' name='comment' />
								</div>

								<div className='form-group w-50 h-center'>
									<button className='btn btn-block rounded-0'> Submit </button>
								</div>
							</form>
						</div>
					</section>
					{/*======================= End of Page Body Display Starts Here ============================*/}
				</main>
			</div>
		</>
	);
};

export default AddQty;
