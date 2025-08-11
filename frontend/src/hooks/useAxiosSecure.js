import axios from "axios";

const useAxiosSecure = () => {
	const axiosSecure = axios.create({
		baseURL: "http://localhost:5000",
	});

	// Request interceptor
	axiosSecure.interceptors.request.use(
		(config) => {
			const token = localStorage.getItem("token");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error),
	);

	return axiosSecure;
};

export default useAxiosSecure;
