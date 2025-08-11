import { LuMenu } from "react-icons/lu";
import ThemeToggle from "../shared/ThemeToggle";

const DashboardNavbar = ({ userName, setSidebarOpen, sidebarOpen }) => {
	return (
		<header className='flex items-center justify-between bg-base-100 px-6 py-4 shadow border-b border-b-gray-400 sticky top-0 z-20'>
			<button
				className='text-gray-700 lg:hidden'
				onClick={() => setSidebarOpen(!sidebarOpen)}
				aria-label='Toggle sidebar'
			>
				<LuMenu size={24} />
			</button>
			<h2 className='text-lg font-semibold'>Dashboard</h2>
			<div className="flex gap-3 items-center">
				<ThemeToggle />
				<div className='hidden sm:block'>Hello, {userName || "User"}</div>
			</div>
		</header>
	);
};

export default DashboardNavbar;
