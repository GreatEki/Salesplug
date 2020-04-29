import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyleContext } from '../../contexts/StyleContext';

const Navbar = () => {
	const { closeSlideMenu, styles, openSlideMenu } = useContext(StyleContext);
	return (
		<>
			<div className='container-fluid'>
				<nav className='row nav'>
					<div className='col-2 logo'>
						<img
							src='/webImages/salesplug-logo.png'
							alt='logo'
							className='site-logo'
						/>
					</div>

					<div className='col-7 wrapper-nav-menu'>
						<ul className='navbar-menu'>
							<li>
								<Link className='menu-item'> Product</Link>
							</li>
							<li>
								<Link className='menu-item'> Solutions</Link>
							</li>
							<li>
								<Link className='menu-item'> Events</Link>
							</li>
							<li>
								<Link className='menu-item'> Support</Link>
							</li>
							<li>
								<Link className='menu-item'> About Us</Link>
							</li>
						</ul>
					</div>

					<div className='col-3 pt-4 wrapper-nav-auth'>
						<div className='d-inline px-2'>
							<Link className='nav-auth'>
								{' '}
								<span> (234) 9019856761</span>&nbsp; Contact Us
							</Link>
						</div>{' '}
						<div className='d-inline px-2'>
							<Link className='nav-auth'>
								<i className='fas fa-user'> </i> Login
							</Link>
						</div>
					</div>

					<span className='hamburger'>
						<Link href='#' onClick={() => openSlideMenu()}>
							<i className='fas fa-bars hamburger'></i>
						</Link>
					</span>
				</nav>

				<div
					id='side-menu'
					className='side-nav'
					style={{ width: styles.width }}>
					<Link href='#' className='btn-close' onClick={() => closeSlideMenu()}>
						&times;
					</Link>
					<Link href=''>Products</Link>
					<Link href=''>Solutions</Link>
					<Link href=''>Events</Link>
					<Link href=''>Support</Link>
					<Link href=''>About Us</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
