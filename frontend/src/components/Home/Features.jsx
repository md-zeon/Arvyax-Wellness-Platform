import { LuUserCheck, LuSettings, LuUsers } from "react-icons/lu";

const Features = () => {
	return (
		<section className='container mx-auto py-20 px-4'>
			<h2 className='text-4xl font-bold text-center mb-12'>Why Choose Arvyax Wellness?</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{/* Expert-led Sessions */}
				<div className='card bg-base-100 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
					<div className='card-body flex flex-col items-center text-center'>
						<LuUserCheck className='text-primary text-5xl mb-4' />
						<h3 className='card-title text-xl font-semibold mb-2'>Expert-led Sessions</h3>
						<p className='text-gray-600'>
							Our sessions are led by certified instructors who are passionate about helping you achieve your wellness
							goals.
						</p>
					</div>
				</div>

				{/* Customizable Plans */}
				<div className='card bg-base-100 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
					<div className='card-body flex flex-col items-center text-center'>
						<LuSettings className='text-primary text-5xl mb-4' />
						<h3 className='card-title text-xl font-semibold mb-2'>Customizable Plans</h3>
						<p className='text-gray-600'>
							Create your own custom wellness sessions tailored to your specific needs and preferences.
						</p>
					</div>
				</div>

				{/* Community Support */}
				<div className='card bg-base-100 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
					<div className='card-body flex flex-col items-center text-center'>
						<LuUsers className='text-primary text-5xl mb-4' />
						<h3 className='card-title text-xl font-semibold mb-2'>Community Support</h3>
						<p className='text-gray-600'>
							Connect with a supportive community of like-minded individuals on the same wellness journey.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
