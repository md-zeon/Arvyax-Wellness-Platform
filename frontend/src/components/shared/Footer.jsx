import { LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";

const Footer = () => {
	return (
		<footer className='bg-primary/50 py-6 px-4'>
			<div className='flex flex-col md:flex-row items-center justify-around gap-3'>
				<h3 className='text-center md:text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
					<span className='text-primary'>Arvya.x</span> Wellness
				</h3>

				<div className='flex gap-6 items-center justify-center'>
					<h4 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Follow Us</h4>
					<div className='flex space-x-2 md:space-x-4 justify-center'>
						<a
							href='https://www.linkedin.com/company/arvyax'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'
							className='text-lg md:text-xl lg:text-2xl bg-primary hover:bg-success p-2 rounded-full hover:scale-105 transition duration-200 text-white'
						>
							<LuLinkedin />
						</a>
						<a
							href='https://www.instagram.com/arvya.x/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Instagram'
							className='text-lg md:text-xl lg:text-2xl bg-primary hover:bg-success p-2 rounded-full hover:scale-105 transition duration-200 text-white'
						>
							<LuInstagram />
						</a>
						<a
							href='https://youtube.com/@arvyax?si=Myrf435F2E_77ywv'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='YouTube'
							className='text-lg md:text-xl lg:text-2xl bg-primary hover:bg-success p-2 rounded-full hover:scale-105 transition duration-200 text-white'
						>
							<LuYoutube />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
