import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { LuFilePlus2, LuFileCheck2, LuFileClock, LuEye } from "react-icons/lu";

const DashboardHome = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const { data } = await axiosSecure.get("/my-sessions");
                setSessions(data);
            } catch (error) {
                console.error("Failed to fetch sessions", error);
            }
            setLoading(false);
        };
        fetchSessions();
    }, []);

    const publishedSessions = sessions.filter(s => s.status === "published").length;
    const draftSessions = sessions.filter(s => s.status === "draft").length;
    const recentSessions = sessions.slice(0, 5);

    if (loading) {
        return <div className="text-center"><span className="loading loading-lg"></span></div>;
    }

    return (
        <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-figure text-primary">
                        <LuFileCheck2 size={32} />
                    </div>
                    <div className="stat-title">Published Sessions</div>
                    <div className="stat-value">{publishedSessions}</div>
                </div>
                <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-figure text-secondary">
                        <LuFileClock size={32} />
                    </div>
                    <div className="stat-title">Draft Sessions</div>
                    <div className="stat-value">{draftSessions}</div>
                </div>
                <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-figure text-accent">
                        <LuFilePlus2 size={32} />
                    </div>
                    <div className="stat-title">Total Sessions</div>
                    <div className="stat-value">{sessions.length}</div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/dashboard/session-editor" className="btn btn-primary btn-lg">
                    <LuFilePlus2 className="mr-2" /> Create New Session
                </Link>
                <Link to="/dashboard/my-sessions" className="btn btn-secondary btn-lg">
                    <LuEye className="mr-2" /> View All My Sessions
                </Link>
            </div>

            {/* Recent Sessions */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Recent Sessions</h2>
                <div className="space-y-4">
                    {recentSessions.length > 0 ? (
                        recentSessions.map(session => (
                            <div key={session._id} className="card bg-base-200 shadow-md">
                                <div className="card-body">
                                    <h3 className="card-title">{session.title}</h3>
                                    <p>Status: <span className={`badge ${session.status === 'published' ? 'badge-success' : 'badge-warning'}`}>{session.status}</span></p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/dashboard/session-editor/${session._id}`} className="btn btn-sm btn-outline">Edit</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>You haven't created any sessions yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;