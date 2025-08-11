import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	return (
		<form className='space-y-6'>
			<div>
				<label
					htmlFor='name'
					className='label'
				>
					<span className='label-text font-semibold'>Full Name</span>
				</label>
				<input
					id='name'
					name='name'
					type='text'
					required
					placeholder='Your full name'
					className='input input-bordered w-full'
				/>
			</div>

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
					autoComplete='new-password'
					required
					placeholder='Create a password'
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

			<div className='relative'>
				<label
					htmlFor='confirmPassword'
					className='label'
				>
					<span className='label-text font-semibold'>Confirm Password</span>
				</label>
				<input
					id='confirmPassword'
					name='confirmPassword'
					type={showConfirmPassword ? "text" : "password"}
					autoComplete='new-password'
					required
					placeholder='Confirm your password'
					className='input input-bordered w-full pr-12'
				/>
				<button
					type='button'
					onClick={() => setShowConfirmPassword(!showConfirmPassword)}
					className='absolute right-3 top-[38px] text-gray-500 hover:text-primary focus:outline-none'
					aria-label={showConfirmPassword ? "Hide password" : "Show password"}
				>
					{showConfirmPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
				</button>
			</div>

			<button
				type='submit'
				className='btn btn-primary w-full font-bold'
			>
				Register
			</button>
		</form>
	);
};

export default RegisterForm;
