import { useState } from "react";
import { Link } from "react-router";
import { LuUser, LuEye, LuEyeOff } from "react-icons/lu";
import Container from "../../components/shared/Container";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen px-4 py-16">
        <div className="w-full max-w-md p-10 space-y-8 bg-base-100 rounded-xl shadow-xl">
          {/* Avatar Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary text-white rounded-full p-4 text-5xl">
              <LuUser />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-900">
            Login to your account
          </h1>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="label">
                <span className="label-text font-semibold">Email address</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="input input-bordered w-full pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-primary focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full font-bold"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-medium hover:underline text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
