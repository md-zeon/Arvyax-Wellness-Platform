import { Link } from "react-router";
import { LuUser } from "react-icons/lu";
import Container from "../../components/shared/Container";
import RegisterForm from "../../components/Forms/RegisterForm";

const Register = () => {
	return (
		<Container>
			<div className='flex justify-center items-center min-h-screen px-4 py-16'>
				<div className='w-full max-w-md p-10 space-y-8 bg-base-100 rounded-xl shadow-xl'>
					{/* Avatar Icon */}
					<div className='flex justify-center mb-6'>
						<div className='bg-primary text-white rounded-full p-4 text-5xl'>
							<LuUser />
						</div>
					</div>

					<h1 className='text-3xl font-bold text-center '>Create a new account</h1>

					{/* Register Form */}
					<RegisterForm />

					<p className='text-sm text-center text-gray-600'>
						Already have an account?{" "}
						<Link
							to='/login'
							className='font-medium hover:underline text-primary'
						>
							Log in
						</Link>
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Register;
