import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import MySessions from "../pages/Dashboard/MySessions";
import SessionEditor from "../pages/Dashboard/SessionEditor";

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
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
		],
	},
	{
		path: "/dashboard",
		Component: DashboardLayout,
		children: [
			{
				index: true,
				Component: DashboardHome,
			},
			{
				path: "my-sessions",
				Component: MySessions,
			},
			{
				path: "session-editor",
				Component: SessionEditor,
			},
			{ path: "session-editor/:id", Component: SessionEditor },
		],
	},
]);

export default router;
