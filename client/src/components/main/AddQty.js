import React from 'react';
import '../../css/main/AddQty.css';

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
						<h2 className='pageTitle p-4'> Item Name </h2>

						<div div className='pageContent addQty'>
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

									<textarea className='form-control' name='comment'>
										{' '}
									</textarea>
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
