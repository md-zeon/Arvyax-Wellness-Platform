import { Link, NavLink } from "react-router";
import { LuX } from "react-icons/lu";

const DashBoardSidebar = ({ sidebarOpen, setSidebarOpen, handleLogout }) => {
	return (
		<>
			{/* Overlay for mobile */}
			<div
				className={`fixed inset-0 backdrop-blur-sm z-30 lg:hidden transition-opacity ${
					sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setSidebarOpen(false)}
			></div>

			<aside
				className={`fixed top-0 left-0 bottom-0 w-64 bg-base-200 text-base-content p-5 z-40 transform transition-transform ${
					sidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 lg:static lg:flex-shrink-0 flex flex-col`}
			>
				<div className='flex items-center justify-between mb-6'>
					<Link
						to='/'
						className='text-xl font-bold text-primary'
						onClick={() => setSidebarOpen(false)}
					>
						Arvya.x Wellness
					</Link>
					<button
						className='lg:hidden'
						onClick={() => setSidebarOpen(false)}
						aria-label='Close sidebar'
					>
						<LuX size={24} />
					</button>
				</div>

				<nav className='flex flex-col gap-4'>
					<NavLink
						to='/dashboard'
						className={({ isActive }) => (isActive ? "btn btn-primary" : "hover:underline btn btn-ghost")}
						onClick={() => setSidebarOpen(false)}
					>
						Home
					</NavLink>
					<NavLink
						to='/dashboard/session-editor'
						className={({ isActive }) => (isActive ? "btn btn-primary" : "hover:underline btn btn-ghost")}
						onClick={() => setSidebarOpen(false)}
					>
						Create Session
					</NavLink>
					<NavLink
						to='/dashboard/my-sessions'
						className={({ isActive }) => (isActive ? "btn btn-primary" : "hover:underline btn btn-ghost")}
						onClick={() => setSidebarOpen(false)}
					>
						My Sessions
					</NavLink>
				</nav>

				<div className='mt-auto'>
					<button
						onClick={handleLogout}
						className='btn btn-error w-full mt-10'
					>
						Logout
					</button>
				</div>
			</aside>
		</>
	);
};

export default DashBoardSidebar;
