import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleToggle = (e) => {
		setTheme(e.target.checked ? "forest" : "emerald");
	};

	return (
		<label className='swap swap-rotate'>
			<input
				type='checkbox'
				onChange={handleToggle}
				checked={theme === "forest"}
			/>

			{/* Sun icon */}
			<svg
				className='swap-off h-7 w-7 fill-current'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
			>
				<path d='M5.64 17l-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17zm-1.64-5a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2H4a1 1 0 0 0 1-1zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-6 2.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 1 0-1.41 1.41zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29zm3 4.36h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1zm6.36-2a1 1 0 0 0-1.36 1.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zm-6.36-7a5.5 5.5 0 1 0 5.5 5.5 5.51 5.51 0 0 0-5.5-5.5zm0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z' />
			</svg>

			{/* Moon icon */}
			<svg
				className='swap-on h-7 w-7 fill-current'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
			>
				<path d='M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-6.19-6.47 8.59 8.59 0 0 1 .25-2 1 1 0 0 0-1.18-1.18 10.14 10.14 0 1 0 11.17 11.17 1 1 0 0 0-1.05-2.11zm-9.5 6.69a8.14 8.14 0 0 1-4.06-14.5v.27a10.15 10.15 0 0 0 10.14 10.14 9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-8.18 4.31z' />
			</svg>
		</label>
	);
};

export default ThemeToggle;
