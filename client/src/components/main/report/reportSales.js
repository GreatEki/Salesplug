import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/main/Inbound.css';

const reportSales = () => {
	return (
		<>
			<div className='container-fluid wrapper m-0 p-0'>
				<div className='topBar text-center'>SalesPlug</div>
			</div>

			<div className='content-wrapper row'>
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
								<i className='fas fa-bars hamburger'></i> &nbsp; Access Control{' '}
							</Link>
						</li>
					</div>
				</section>

				<section className='col-md-10 pageBody p-0'>
					<h2 className='pageTitle p-4'> Report Sales </h2>

					<div className='pageContent'>
						<ul className='nav nav-tabs p-2'>
							<li className='nav-item'>
								<Link to='/report/sales' className='nav-link active Abel'>
									{' '}
									Sales{' '}
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/report/inbound' className='nav-link Abel'>
									{' '}
									Inbound{' '}
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link Abel'> Margin </Link>
							</li>
						</ul>
						{/* =================Title Bar ==================================*/}
						<hr />
						{/* Inbound Template Here */}
						<small className='text-info ml-2'> Click on item to inbound </small>
						<section className='row p-2 titleBar bg-light'>
							<div className='col-2'>
								<p> Time </p>
							</div>
							<div className='col-1'>
								<p> Item ID</p>
							</div>
							<div className='col-3'>
								<p> Item Name</p>
							</div>
							<div className='col-2'>
								<p> Item Category</p>
							</div>
							<div className='col-2'>
								<p className='text-center'> Quantity</p>
							</div>
							<div className='col-2'>
								<p className='text-center'> Price</p>
							</div>
						</section>
						<hr />
						{/* =================End of Title Bar ==================================*/}
						<div className='productListWrap scrollable-child p-2'>
							{/* ======================= Product Listing =========================== */}
							<Link to='/inbound/add-qty' className='row productListing p-2'>
								<div className='col-2'>
									<li>
										<Link to='/inbound/add-qty'> 5/9/20 2:56pm </Link>
									</li>
								</div>
								<div className='col-1'>
									<li>
										<Link to='/inbound/add-qty'> 100 </Link>
									</li>
								</div>
								<div className='col-3'>
									<li>
										<Link to='/inbound/add-qty'> Pears Baby Lotion </Link>
									</li>
								</div>
								<div className='col-2'>
									<li>
										<Link to='/inbound/add-qty'> Skin Care and Cosmetics </Link>
									</li>
								</div>
								<div className='col-2 '>
									<li className='text-center'>
										<Link to='/inbound/add-qty'> No </Link>
									</li>
								</div>
								<div className='col-2'>
									<li className='text-center'>
										<Link to='/inbound/add-qty'> 20 </Link>
									</li>
								</div>
							</Link>

							{/* ================= End of Product Listing =========================== */}
						</div>
						{/* End of Inbound Template */}
					</div>
					<section className='pageBottom'>
						<div className='pagination h-center w-25'>
							<h3>
								{' '}
								Total Sales: <del className='del'>N </del> 250, 000{' '}
							</h3>
						</div>
					</section>
				</section>
			</div>
		</>
	);
};

export default reportSales;
