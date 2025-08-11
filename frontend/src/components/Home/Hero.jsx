import { Link } from "react-router";
const Hero = () => {
	return (
		<div className='hero min-h-screen bg-[url(/background.avif)]'>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-neutral-content text-center'>
				<div className='max-w-2xl'>
					<h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-6'>
						Find Your Inner Peace
					</h1>
					<p className='text-gray-200 text-lg sm:text-xl mb-8 drop-shadow-md max-w-xl mx-auto'>
						Join our community of wellness enthusiasts and embark on a journey of self-discovery and tranquility.
					</p>
					<Link
						to='/sessions'
						className='btn btn-primary'
					>
						Explore Sessions
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
