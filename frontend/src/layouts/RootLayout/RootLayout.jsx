import { Outlet } from "react-router";
import Navbar from "../../components/shared/Navbar";
import Container from "../../components/shared/Container";

const RootLayout = () => {
	return (
		<>
			<header className='backdrop-blur-sm bg-transparent fixed top-0 left-0 right-0'>
				<Container>
					<Navbar />
				</Container>
			</header>
			<main className="min-h-screen pt-16">
				<Container>
					<Outlet />
				</Container>
			</main>
			<footer>Footer</footer>
		</>
	);
};

export default RootLayout;