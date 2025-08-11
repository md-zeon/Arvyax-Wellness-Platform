import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post("http://localhost:5000/login", {
				email,
				password,
			});

			toast.success(res.data.message);

			localStorage.setItem("userId", res.data.userId);
			localStorage.setItem("token", res.data.token);

			navigate("/dashboard");
		} catch (error) {
			toast.error(error.response?.data?.message || "Login failed");
		}
	};

	return (
		<form
			className='space-y-6'
			onSubmit={handleSubmit}
		>
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
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
					value={password}
					onChange={(e) => setPassword(e.target.value)}
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
