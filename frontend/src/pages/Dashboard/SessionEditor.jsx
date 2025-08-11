import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";

const SessionEditor = () => {
	const axiosSecure = useAxiosSecure();
	const navigate = useNavigate();
	const { id } = useParams(); // For edit mode

	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [jsonUrl, setJsonUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [sessionId, setSessionId] = useState(null);

	useEffect(() => {
		if (id) {
			// Fetch session data for editing
			axiosSecure
				.get(`/my-sessions/${id}`)
				.then(({ data }) => {
					setTitle(data.title);
					setTags(data.tags.join(", "));
					setJsonUrl(data.json_file_url);
					setSessionId(data._id);
				})
				.catch(() => toast.error("Failed to load session"));
		}
	}, [id, axiosSecure]);

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

		if (sessionId) sessionData._id = sessionId;

		try {
			if (status === "draft") {
				await axiosSecure.post("/my-sessions/save-draft", sessionData);
				toast.success("Session saved as draft");
			} else {
				// For publish endpoint, just send sessionId
				if (!sessionId) {
					// If no sessionId, save draft first to get one (optional improvement)
					const res = await axiosSecure.post("/my-sessions/save-draft", sessionData);
					toast.success("Session saved as draft before publishing");
					// You can get sessionId from response if your backend returns it
				}
				await axiosSecure.post("/my-sessions/publish", { sessionId });
				toast.success("Session published");
			}
			navigate("/dashboard/my-sessions");
		} catch (error) {
			toast.error(error.response?.data?.message || "Failed to save session");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='max-w-3xl mx-auto p-4 bg-base-100 rounded shadow'>
			<h2 className='text-2xl font-bold mb-4'>{sessionId ? "Edit Session" : "Create Session"}</h2>

			<label className='label'>Title *</label>
			<input
				type='text'
				className='input input-bordered w-full mb-4'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Session title'
				required
			/>

			<label className='label'>Tags (comma separated)</label>
			<input
				type='text'
				className='input input-bordered w-full mb-4'
				value={tags}
				onChange={(e) => setTags(e.target.value)}
				placeholder='yoga, meditation, wellness'
			/>

			<label className='label'>JSON File URL</label>
			<input
				type='url'
				className='input input-bordered w-full mb-6'
				value={jsonUrl}
				onChange={(e) => setJsonUrl(e.target.value)}
				placeholder='https://example.com/session.json'
			/>

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
