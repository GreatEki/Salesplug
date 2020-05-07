import React from 'react';
import '../../css/main/SalesPitch.css';

const SalesPitch = () => {
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
						<h2 className='pageTitle p-4'> Sales Pitch </h2>

						<div className='pageContent bg-light'>
							<div className='row'>
								{/*====================== Products Details =====================*/}
								<section className='col-6 productsDetails p-5'>
									<h5 className='text-right w-75'>
										Sales ID: <span> 000121</span>{' '}
									</h5>
									<form className='w-75'>
										<div className='form-group'>
											<label htmlFor='itemName'> Item Name </label>
											<select className='form-control'>
												<option> Select Item</option>
												<option> Pears Baby Lotion</option>
												<option> Pears Baby Oil</option>
												<option> Pears Baby Cream</option>
												<option> Johnson Powder</option>
												<option> Johnson Baby Lotion</option>
												<option> Johnson Baby Oil</option>
												<option> Caroline Lotion</option>
											</select>
										</div>

										<div className='form-group'>
											<label htmlFor='ItemCategory'> Item Category</label>

											<input
												type='text'
												name='itemCategory'
												className='form-control'
											/>
										</div>

										<section className='d-flex flex-column align-items-start'>
											<div className='form-group'>
												<label htmlFor='itemPrice'>
													<del className='del'>N </del> Price
												</label>

												<input type='text' className='form-control' />
											</div>

											<small className=''>
												Date: <span> Mon, April, 2020</span>{' '}
											</small>
										</section>

										<div className='d-flex flex-row'>
											<div className='form-group p-5'>
												<button className='form-control btn-danger clearBtn rounded-0'>
													{' '}
													Clear{' '}
												</button>
											</div>
											<div className='form-group p-5'>
												<button className='form-control btn-success addBtn rounded-pill'>
													{' '}
													ADD{' '}
												</button>
											</div>
										</div>
									</form>
								</section>
								{/*====================== End of Products Details =====================*/}

								{/*======================= ProductSummary ========================*/}
								<section className='col-6 productsSummary p-5'>
									<div className='w-75 itemList '>
										<ul className='list-group'>
											<li className='list-group-item'>Cras justo odio</li>
											<li className='list-group-item'>
												Dapibus ac facilisis in
											</li>
											<li className='list-group-item'>Morbi leo risus</li>
											<li className='list-group-item'>
												Porta ac consectetur ac
											</li>
											<li className='list-group-item'>Vestibulum at eros</li>
										</ul>
									</div>

									<div className='d-flex flex-row w-100 p-5'>
										<div className='form-group h-center p-5 '>
											<button className='form-control btn-danger clearBtn rounded-0'>
												{' '}
												REMOVE{' '}
											</button>
										</div>
										<div className='form-group h-center p-5'>
											<button className='form-control btn-success addBtn rounded-pill'>
												{' '}
												SUBMIT{' '}
											</button>
										</div>
									</div>
								</section>
								{/*========================== End of Product Summary =======================*/}
							</div>
						</div>
					</section>
					{/*======================= End of Page Body Display Starts Here ============================*/}
				</main>
			</div>
		</>
	);
};

export default SalesPitch;
