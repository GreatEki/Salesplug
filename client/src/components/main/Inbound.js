import React from 'react';
import '../../css/main/Inbound.css';
import { Link } from 'react-router-dom';

const Inbound = () => {
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
						<h2 className='pageTitle p-4'> Inbound</h2>

						<div className='pageContent'>
							<section className='d-flex flex-row p-4'>
								<button className='btn btn-info mr-5 rounded-0'>
									{' '}
									Refresh{' '}
								</button>

								<div className='input-group w-25'>
									<input
										className='form-control'
										type='text'
										placeholder='Search Product'
									/>

									<div className='input-group-prepend'>
										<span className='input-group-text'> @ </span>
									</div>
								</div>
							</section>
							{/* =================Title Bar ==================================*/}
							<hr />
							<section className='row p-2 titleBar bg-light'>
								<div className='col-2'>
									<p> Item ID</p>
								</div>
								<div className='col-3'>
									<p> Item Name</p>
								</div>
								<div className='col-3'>
									<p> Item Category</p>
								</div>
								<div className='col-2'>
									<p> Consumable</p>
								</div>
								<div className='col-2'>
									<p> Qty in Stock</p>
								</div>
							</section>
							<hr />
							{/* =================End of Title Bar ==================================*/}

							<div className='productListWrap scrollable-child p-2'>
								{/* ======================= Product Listing =========================== */}
								<section className='row productListing p-2'>
									<div className='col-2'>
										<li>
											<Link to='/'> 100 </Link>
										</li>
									</div>
									<div className='col-3'>
										<li>
											<Link to='/'> Pears Baby Lotion </Link>
										</li>
									</div>
									<div className='col-3'>
										<li>
											<Link to='/'> Skin Care and Cosmetics </Link>
										</li>
									</div>
									<div className='col-2'>
										<li className='text-center'>
											<Link to='/'> No </Link>
										</li>
									</div>
									<div className='col-2'>
										<li className='text-center'>
											<Link to='/'> 20 </Link>
										</li>
									</div>
								</section>

								{/* ================= End of Product Listing =========================== */}
							</div>
						</div>

						<section className='pageBottom'>
							<nav className='pagination h-center w-25'>
								<li className='page-item m-2 d-flex flex-row'>
									<button className='page-link mr-3'> 1</button>
									<button className='page-link mr-3'> 2</button>
									<button className='page-link mr-3'> 3</button>
									<button className='page-link mr-3'> 4</button>
									<button className='page-link mr-3'> 5</button>
								</li>
							</nav>
						</section>
					</section>
					{/*======================= End of Page Body Display Starts Here ============================*/}
				</main>
			</div>
		</>
	);
};

export default Inbound;
