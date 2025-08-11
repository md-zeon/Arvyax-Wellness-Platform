import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

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
	}, [axiosSecure]);

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
						<th>Edit</th>
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
							<td>
								<Link
									to={`/dashboard/session-editor/${session._id}`}
									className='btn btn-sm btn-outline'
								>
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MySessions;
