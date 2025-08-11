import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: '/login',
				Component: Login,
			},
			{
				path: '/register',
				Component: Register,
			},
		],
	},
	{
		path: "/dashboard",
		// Component: DashboardLayout,
	},
]);

export default router;
