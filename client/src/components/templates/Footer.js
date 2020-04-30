import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';
const Footer = () => {
	return (
		<>
			<div className='footer-top bg-warning'>
				<div className='row'>
					<section className='socials col-md-4 col'>
						<div>
							<img
								src='/webImages/salesplug-logo.png'
								className='img-fluid'
								alt='web-logo'
							/>
						</div>

						<div className='d-block social-link'>
							<i className='fab fa-facebook fa-2x d-inline'> </i>
							<i className='fab fa-instagram fa-2x d-inline'> </i>
							<i className='fab fa-twitter fa-2x d-inline'> </i>
							<i className='fab fa-linkedin fa-2x d-inline'> </i>
						</div>
						<div>
							<p className='text-uppercase pt-2'>
								{' '}
								call us at at (234) 9019856761
							</p>
						</div>
					</section>
					<section className='footer-links col-md-8 col'>
						<div className='row'>
							<div className='footer-nav col-md-4'>
								<span> New to Salesplug</span>
								<Link className='d-block'> Products</Link>
								<Link className='d-block'> Solutions</Link>
								<Link className='d-block'> Events</Link>
								<Link className='d-block'> Support</Link>
								<Link className='d-block'> About</Link>
								<Link className='d-block'> Contact Us</Link>
								<Link className='d-block'> Get Started</Link>
							</div>
							<div className='col-md-4'>
								<span> Technology Today</span>
								<Link className='d-block'> What is Cloud Computing</Link>
								<Link className='d-block'> Internet of things</Link>
								<Link className='d-block'> Investors</Link>
								<Link className='d-block'> Sustainability</Link>
								<Link className='d-block'> Customer Stories</Link>
							</div>
							<div className='col-md-4'>
								<span> Others</span>
								<Link className='d-block'> Legal</Link>
								<Link className='d-block'> Terms of Service</Link>
								<Link className='d-block'> Privacy Information</Link>
								<Link className='d-block'> Contact</Link>
								<Link className='d-block'> Cookie Preference</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className='footer-bottom copyrights'>
				<p className='text-justify text-center'>
					{' '}
					&copy; Copyright 2020 Salesplug.com, inc. All rights reserved. Various
					trademarks held by their respective owners. Salesplug.com, inc.
				</p>
				<p className='text-center text-white'> www.salesplug.com </p>
			</div>
		</>
	);
};

export default Footer;
