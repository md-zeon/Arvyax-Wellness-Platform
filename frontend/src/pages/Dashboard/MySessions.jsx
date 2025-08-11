import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MySessions = () => {
	const axiosSecure = useAxiosSecure();
	const [sessions, setSessions] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosSecure
			.get("/my-sessions")
			.then(({ data }) => {
				setSessions(data);
				setLoading(false);
			})
			.catch(() => {
				toast.error("Failed to fetch your sessions");
				setLoading(false);
			});
	}, []);

	const handleDelete = async (id) => {
		const result = await Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "Cancel",
			confirmButtonColor: "#dc2626",
			cancelButtonColor: "#3ef382",
			customClass: {
				popup: "custom-popup",
				confirmButton: "custom-confirm",
				cancelButton: "custom-cancel",
				title: "custom-title",
				content: "custom-content",
			},
		});

		if (result.isConfirmed) {
			try {
				await axiosSecure.delete(`/my-sessions/${id}`);
				setSessions((prev) => prev.filter((session) => session._id !== id));
				await Swal.fire({
					icon: "success",
					title: "Deleted!",
					text: "Your session has been deleted.",
					confirmButtonColor: "#dc2626",
					customClass: {
						popup: "custom-popup",
						confirmButton: "custom-confirm",
						title: "custom-title",
						content: "custom-content",
					},
				});
			} catch (error) {
				await Swal.fire({
					icon: "error",
					title: "Error!",
					text: error.response?.data?.message || "Failed to delete session",
					confirmButtonColor: "#dc2626",
					customClass: {
						popup: "custom-popup",
						confirmButton: "custom-confirm",
						title: "custom-title",
						content: "custom-content",
					},
				});
			}
		}
	};

	if (loading) {
		return <div className='p-4'>Loading your sessions...</div>;
	}

	if (sessions.length === 0) {
		return <div className='p-4'>You have no sessions yet.</div>;
	}

	return (
		<div className='max-w-4xl mx-auto p-4 bg-base-100 rounded shadow'>
			<h2 className='text-2xl font-bold mb-6'>My Sessions</h2>
			<table className='table w-full'>
				<thead>
					<tr>
						<th>Title</th>
						<th>Status</th>
						<th>Last Updated</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{sessions.map((session) => (
						<tr key={session._id}>
							<td>{session.title}</td>
							<td className={session.status === "published" ? "text-green-600" : "text-yellow-600"}>
								{session.status}
							</td>
							<td>{new Date(session.updated_at || session.created_at).toLocaleString()}</td>
							<td className='flex items-center gap-3'>
								<Link
									to={`/dashboard/session-editor/${session._id}`}
									className='btn btn-sm btn-outline'
								>
									Edit
								</Link>
								<button
									onClick={() => handleDelete(session._id)}
									className='btn btn-sm btn-error btn-outline'
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MySessions;
