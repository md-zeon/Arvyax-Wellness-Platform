import { Outlet } from "react-router";
import Navbar from "../../components/shared/Navbar";
import Container from "../../components/shared/Container";
import Footer from "../../components/shared/Footer";

const RootLayout = () => {
	return (
		<>
			<header className='backdrop-blur-xl bg-transparent fixed top-0 left-0 right-0 z-50'>
				<Container>
					<Navbar />
				</Container>
			</header>
			<main className='min-h-screen'>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default RootLayout;
