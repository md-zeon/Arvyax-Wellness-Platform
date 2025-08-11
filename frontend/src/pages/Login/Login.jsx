import { Link } from "react-router";
import { LuUser } from "react-icons/lu";
import Container from "../../components/shared/Container";
import LoginForm from "../../components/Forms/LoginForm";

const Login = () => {
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

					<h1 className='text-3xl font-bold text-center '>Login to your account</h1>
					{/* Login Form */}
					<LoginForm />
					<p className='text-sm text-center text-gray-600'>
						Don&apos;t have an account?{" "}
						<Link
							to='/register'
							className='font-medium hover:underline text-primary'
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Login;
