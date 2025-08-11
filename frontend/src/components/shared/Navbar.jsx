import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Navbar = () => {
	const navItems = (
		<>
			<li>
				<NavLink className="text-black font-medium hover:text-primary hover:bg-transparent" to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink className="text-black font-medium hover:text-primary hover:bg-transparent" to='/sessions'>Sessions</NavLink>
			</li>
		</>
	);
	return (
		<nav className='navbar px-0'>
			<div className='navbar-start'>
				{/* Dropdown Start */}
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='pr-2 lg:hidden cursor-pointer'
					>
						<FaBars className="text-primary" />
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow'
					>
						{navItems}
					</ul>
				</div>
				<Link
					to='/'
					className='sm:text-xl md:text-2xl lg:text-3xl uppercase font-bold'
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