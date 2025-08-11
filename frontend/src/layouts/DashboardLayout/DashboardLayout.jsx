import { Outlet, useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DashBoardSidebar from "../../components/Dashboard/DashBoardSidebar";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardFooter from "../../components/Dashboard/DashboardFooter";

const DashboardLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [userName, setUserName] = useState("");
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const axiosSecure = useAxiosSecure();

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userId");
		navigate("/login");
	};

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		if (!userId) {
			navigate("/login");
			return;
		}

		const fetchUser = async () => {
			try {
				const { data } = await axiosSecure.get(`/user/${userId}`);
				setUserName(data?.name);
			} catch (error) {
				handleLogout();
			}
		};
		fetchUser();
	}, [axiosSecure, navigate]);

	// Show greeting only on dashboard home (exact /dashboard path)
	const showGreeting = location.pathname === "/dashboard";

	return (
		<div className='flex min-h-screen'>
			{/* Sidebar */}
			<DashBoardSidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				handleLogout={handleLogout}
			/>

			{/* Main Content */}
			<div className='flex flex-col flex-1 min-h-screen bg-base-100'>
				{/* Navbar */}
				<DashboardNavbar
					userName={userName}
					setSidebarOpen={setSidebarOpen}
					sidebarOpen={sidebarOpen}
				/>

				{/* Page content */}
				<main className='flex-1 p-6 overflow-auto'>
					{showGreeting && <h1 className='text-2xl font-semibold mb-4'>Welcome, {userName || "User"}</h1>}
					<Outlet />
				</main>

				{/* Footer */}
				<DashboardFooter />
			</div>
		</div>
	);
};

export default DashboardLayout;
