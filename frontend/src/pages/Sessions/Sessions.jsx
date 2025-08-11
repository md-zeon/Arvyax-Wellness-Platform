import { Link, useLoaderData } from "react-router";

const Sessions = () => {
	const sessions = useLoaderData();

	if (!sessions.length) return <div className='p-6 text-center text-gray-500'>No sessions found.</div>;

	return (
		<div className='max-w-5xl mx-auto p-6 pt-20'>
			<h2 className='text-3xl font-bold mb-8 text-center text-primary'>Published Sessions</h2>
			<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{sessions.map((session) => (
					<div
						key={session._id}
						className='card bg-base-100 shadow-lg'
					>
						<div className='card-body flex flex-col'>
							<h3 className='card-title text-gray-900'>{session.title}</h3>
							{session.tags?.length > 0 && (
								<div className='mb-4 flex flex-wrap gap-2'>
									{session.tags.map((tag) => (
										<div
											key={tag}
											className='badge badge-primary badge-outline text-sm'
										>
											{tag}
										</div>
									))}
								</div>
							)}
							<div className='card-actions mt-auto'>
								<Link
									to={`/sessions/${session._id}`}
									className='btn btn-primary btn-sm'
								>
									View Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sessions;
