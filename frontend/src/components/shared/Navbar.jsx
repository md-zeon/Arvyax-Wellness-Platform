import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		setIsLoggedIn(!!token);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userId");
		setIsLoggedIn(false);
		navigate("/login");
	};

	const navItems = (
		<>
			<li>
				<NavLink
					className='text-black font-medium hover:text-primary hover:bg-transparent'
					to='/'
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className='text-black font-medium hover:text-primary hover:bg-transparent'
					to='/sessions'
				>
					Sessions
				</NavLink>
			</li>
			{isLoggedIn && (
				<li>
					<NavLink
						className='text-black font-medium hover:text-primary hover:bg-transparent'
						to='/dashboard'
					>
						Dashboard
					</NavLink>
				</li>
			)}
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
						className='p-0 lg:hidden'
					>
						<FaBars className='text-primary' />
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						{navItems}
					</ul>
				</div>
				<Link
					to='/'
					className='text-xl lg:text-3xl uppercase font-bold'
				>
					<span className='text-primary'>Arvya.x</span> Wellness
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{navItems}</ul>
			</div>
			<div className='navbar-end gap-2'>
				{isLoggedIn ? (
					<button
						onClick={handleLogout}
						className='btn btn-primary'
					>
						Logout
					</button>
				) : (
					<>
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
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;