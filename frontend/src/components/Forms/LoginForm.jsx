import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";


const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<form className='space-y-6'>
			<div>
				<label
					htmlFor='email'
					className='label'
				>
					<span className='label-text font-semibold'>Email address</span>
				</label>
				<input
					id='email'
					name='email'
					type='email'
					autoComplete='email'
					required
					placeholder='you@example.com'
					className='input input-bordered w-full'
				/>
			</div>

			<div className='relative'>
				<label
					htmlFor='password'
					className='label'
				>
					<span className='label-text font-semibold'>Password</span>
				</label>
				<input
					id='password'
					name='password'
					type={showPassword ? "text" : "password"}
					autoComplete='current-password'
					required
					placeholder='Enter your password'
					className='input input-bordered w-full pr-12'
				/>
				<button
					type='button'
					onClick={() => setShowPassword(!showPassword)}
					className='absolute right-3 top-[38px] text-gray-500 hover:text-primary focus:outline-none'
					aria-label={showPassword ? "Hide password" : "Show password"}
				>
					{showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
				</button>
			</div>

			<button
				type='submit'
				className='btn btn-primary w-full font-bold'
			>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
