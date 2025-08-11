import { useState, useEffect, useRef } from "react";
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

	// Ref to store the debounce timer
	const saveTimer = useRef(null);

	useEffect(() => {
		if (id) {
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
	}, [id]);

	const saveDraft = async (showToast = true) => {
		if (!title.trim()) return; // Don't save empty title

		const sessionData = {
			title,
			tags: tags
				.split(",")
				.map((tag) => tag.trim())
				.filter(Boolean),
			json_file_url: jsonUrl,
			status: "draft",
		};

		if (sessionId) sessionData._id = sessionId;

		try {
			const res = await axiosSecure.post("/my-sessions/save-draft", sessionData);
			if (!sessionId && res.data.sessionId) {
				setSessionId(res.data.sessionId);
			}
			if (showToast) toast.success("Draft auto-saved");
		} catch {
			toast.error("Auto-save failed");
		}
	};

	// Auto-save when fields change
	useEffect(() => {
		if (saveTimer.current) clearTimeout(saveTimer.current);
		saveTimer.current = setTimeout(() => {
			saveDraft(true);
		}, 5000); // Auto-save after 5s of inactivity
		return () => clearTimeout(saveTimer.current);
	}, [title, tags, jsonUrl]);

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
				await saveDraft(false);
				toast.success("Session saved as draft");
			} else {
				if (!sessionId) {
					const res = await axiosSecure.post("/my-sessions/save-draft", sessionData);
					if (!res.data.sessionId) throw new Error("Failed to get session ID from draft save");
					setSessionId(res.data.sessionId);
					sessionData._id = res.data.sessionId;
				}
				await axiosSecure.post("/my-sessions/publish", { sessionId: sessionId || sessionData._id });
				toast.success("Session published");
			}
			navigate("/dashboard/my-sessions");
		} catch (error) {
			toast.error(error.response?.data?.message || error.message || "Failed to save session");
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
