import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SessionEditor = () => {
	const axiosSecure = useAxiosSecure();

	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [jsonUrl, setJsonUrl] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSave = async (status) => {
		if (!title.trim()) {
			toast.error("Title is required");
			return;
		}

		setLoading(true);

		const sessionData = {
			title,
			tags: tags
				.split(",")
				.map((tag) => tag.trim())
				.filter(Boolean),
			json_file_url: jsonUrl,
			status,
		};

        console.log(sessionData);
        // API calls

        
	};

	return (
		<div className='max-w-3xl mx-auto p-4 bg-white rounded shadow'>
			<h2 className='text-2xl font-bold mb-4'>Create Session</h2>
			<div className='mb-4'>
				<label className='label'>Title *</label>
				<input
					type='text'
					className='input input-bordered w-full'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Session title'
					required
				/>
			</div>

			<div className='mb-4'>
				<label className='label'>Tags (comma separated)</label>
				<input
					type='text'
					className='input input-bordered w-full'
					value={tags}
					onChange={(e) => setTags(e.target.value)}
					placeholder='yoga, meditation, wellness'
				/>
			</div>

			<div className='mb-4'>
				<label className='label'>JSON File URL</label>
				<input
					type='url'
					className='input input-bordered w-full'
					value={jsonUrl}
					onChange={(e) => setJsonUrl(e.target.value)}
					placeholder='https://example.com/session.json'
				/>
			</div>

			<div className='flex gap-4'>
				<button
					disabled={loading}
					onClick={() => handleSave("draft")}
					className='btn btn-outline'
				>
					Save as Draft
				</button>
				<button
					disabled={loading}
					onClick={() => handleSave("published")}
					className='btn btn-primary'
				>
					Publish
				</button>
			</div>
		</div>
	);
};

export default SessionEditor;
