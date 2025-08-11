import { useLoaderData, Link } from "react-router";

const SessionDetails = () => {
	const session = useLoaderData();

	if (!session) {
		return <div className='p-6 text-center text-error'>Session not found or unavailable.</div>;
	}

	return (
		<div className='max-w-3xl mx-auto p-6 bg-base-100 rounded shadow-lg'>
			<h1 className='text-4xl font-bold mb-4'>{session.title}</h1>

			{session.tags?.length > 0 && (
				<div className='mb-6 flex flex-wrap gap-2'>
					{session.tags.map((tag) => (
						<span
							key={tag}
							className='badge badge-primary badge-outline text-base'
						>
							{tag}
						</span>
					))}
				</div>
			)}

			<div className='mb-6'>
				<h2 className='text-xl font-semibold mb-2'>Session JSON URL</h2>
				{session.json_file_url ? (
					<a
						href={session.json_file_url}
						target='_blank'
						rel='noopener noreferrer'
						className='link link-primary break-all'
					>
						{session.json_file_url}
					</a>
				) : (
					<p className='italic text-gray-500'>No JSON file provided.</p>
				)}
			</div>

			<Link
				to='/sessions'
				className='btn btn-outline btn-primary'
			>
				Back to Sessions
			</Link>
		</div>
	);
};

export default SessionDetails;
