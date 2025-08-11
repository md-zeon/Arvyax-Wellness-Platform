import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [msg, setMsg] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/register`, formData);
			setMsg(res.data.message);
			if (res?.data?.userId) {
				toast.success(msg);
			}
		} catch (err) {
			setMsg(err.response?.data?.message || "Error");
			toast.error(msg);
		}
	};

	return (
		<form
			className='space-y-6'
			onSubmit={handleSubmit}
		>
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
					value={formData.name}
					onChange={handleChange}
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
					value={formData.email}
					onChange={handleChange}
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
					value={formData.password}
					onChange={handleChange}
					required
					placeholder='Create a password'
					className='input input-bordered w-full pr-12'
				/>
				<button
					type='button'
					onClick={() => setShowPassword(!showPassword)}
					className='absolute right-3 top-[38px] text-gray-500 hover:text-primary'
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
					value={formData.confirmPassword}
					onChange={handleChange}
					required
					placeholder='Confirm your password'
					className='input input-bordered w-full pr-12'
				/>
				<button
					type='button'
					onClick={() => setShowConfirmPassword(!showConfirmPassword)}
					className='absolute right-3 top-[38px] text-gray-500 hover:text-primary'
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

			{msg && <p className='text-center mt-2'>{msg}</p>}
		</form>
	);
};

export default RegisterForm;
