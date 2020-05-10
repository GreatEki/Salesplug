import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/main/Inbound.css';
const reportInbound = () => {
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
					<h2 className='pageTitle p-4'> Report </h2>

					<div className='pageContent'>
						<ul className='nav nav-tabs p-2'>
							<li className='nav-item'>
								<Link className='nav-link active Abel'> Sales </Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link Abel'> Inbound </Link>
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
							<Link to='/inbound/add-qty' className='row productListing p-2'>
								<div className='col-2'>
									<li>
										<Link to='/inbound/add-qty'> 100 </Link>
									</li>
								</div>
								<div className='col-3'>
									<li>
										<Link to='/inbound/add-qty'> Pears Baby Lotion </Link>
									</li>
								</div>
								<div className='col-3'>
									<li>
										<Link to='/inbound/add-qty'> Skin Care and Cosmetics </Link>
									</li>
								</div>
								<div className='col-2'>
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
			</div>
		</>
	);
};

export default reportInbound;
