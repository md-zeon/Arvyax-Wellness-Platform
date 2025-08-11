import { LuMenu } from "react-icons/lu";

const DashboardNavbar = ({ userName, setSidebarOpen, sidebarOpen }) => {
	return (
		<header className='flex items-center justify-between bg-white px-6 py-4 shadow sticky top-0 z-20'>
			<button
				className='text-gray-700 lg:hidden'
				onClick={() => setSidebarOpen(!sidebarOpen)}
				aria-label='Toggle sidebar'
			>
				<LuMenu size={24} />
			</button>
			<h2 className='text-lg font-semibold'>Dashboard</h2>
			<div className='hidden sm:block'>Hello, {userName || "User"}</div>
		</header>
	);
};

export default DashboardNavbar;
