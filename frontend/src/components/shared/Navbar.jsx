import { Link, NavLink } from "react-router";

const Navbar = () => {
	const navItems = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/about'>About</NavLink>
			</li>
			<li>
				<NavLink to='/contact'>Contact</NavLink>
			</li>
		</>
	);
	return (
		<nav className='navbar'>
			<div className='navbar-start'>
				{/* Dropdown Start */}
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							{" "}
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						{navItems}
					</ul>
				</div>
				<Link
					to='/'
					className='text-xl uppercase font-bold'
				>
					<span className="text-primary">Arvya.x</span> Wellness
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{navItems}</ul>
			</div>
			<div className='navbar-end gap-2'>
				<Link
					to='/login'
					className='btn btn-primary'
				>
					Login
				</Link>
				<Link
					to='/register'
					className='btn btn-outline btn-primary'
				>
					Register
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
