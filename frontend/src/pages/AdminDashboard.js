import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X, Trash2, LogOut } from "lucide-react";
import { toast, Toaster } from "sonner";
import { api } from "../lib/api";
import { useAuth } from "../context/AuthContext";

function StatusPill({ status }) {
  const map = {
    pending: "bg-[color:var(--blue)]",
    approved: "bg-[color:var(--pink)]",
    rejected: "bg-[color:var(--line)]",
  };
  return <span className={`rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-widest ${map[status]}`}>{status}</span>;
}

export default function AdminDashboard() {
  const { admin, ready, logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("aus");
  const [aus, setAus] = useState([]);
  const [comments, setComments] = useState([]);

  const load = useCallback(() => {
    api.get("/admin/aus").then((r) => setAus(r.data)).catch(() => {});
    api.get("/admin/comments").then((r) => setComments(r.data)).catch(() => {});
  }, []);

  useEffect(() => {
    if (ready && !admin) navigate("/admin/login");
  }, [ready, admin, navigate]);

  useEffect(() => {
    if (admin) load();
  }, [admin, load]);

  const setAuStatus = async (id, status) => {
    await api.patch(`/admin/aus/${id}`, { status });
    toast.success(`AU ${status}`);
    load();
  };
  const delAu = async (id) => {
    await api.delete(`/admin/aus/${id}`);
    toast.success("AU deleted");
    load();
  };
  const setCommentStatus = async (id, status) => {
    await api.patch(`/admin/comments/${id}`, { status });
    toast.success(`Note ${status}`);
    load();
  };
  const delComment = async (id) => {
    await api.delete(`/admin/comments/${id}`);
    toast.success("Note deleted");
    load();
  };

  if (!ready || !admin) return <div className="grid min-h-screen place-items-center text-[color:var(--ink-soft)]">Loading…</div>;

  const pendingAus = aus.filter((a) => a.status === "pending").length;
  const pendingComments = comments.filter((c) => c.status === "pending").length;

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <Toaster position="top-center" richColors />
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif-display text-5xl font-medium">Moderation</h1>
            <p className="mt-1 text-sm text-[color:var(--ink-soft)]">Signed in as {admin.email}</p>
          </div>
          <button onClick={() => { logout(); navigate("/"); }} data-testid="admin-logout-btn" className="pill-btn flex items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-2 text-xs uppercase tracking-widest">
            <LogOut size={14} /> Logout
          </button>
        </div>

        <div className="mt-8 flex gap-3">
          <button onClick={() => setTab("aus")} data-testid="tab-aus" className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${tab === "aus" ? "bg-[color:var(--ink)] text-white" : "border border-[color:var(--line)]"}`}>
            AUs {pendingAus > 0 && `(${pendingAus})`}
          </button>
          <button onClick={() => setTab("comments")} data-testid="tab-comments" className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${tab === "comments" ? "bg-[color:var(--ink)] text-white" : "border border-[color:var(--line)]"}`}>
            Notes {pendingComments > 0 && `(${pendingComments})`}
          </button>
        </div>

        {tab === "aus" && (
          <div className="mt-8 space-y-4" data-testid="admin-au-list">
            {aus.length === 0 && <p className="text-[color:var(--ink-soft)]">No submissions yet.</p>}
            {aus.map((au) => (
              <div key={au.id} className="glass rounded-[1.75rem] p-6" data-testid={`admin-au-${au.id}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <StatusPill status={au.status} />
                    <span className="text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">{au.au_type}</span>
                  </div>
                  <div className="flex gap-2">
                    {au.status !== "approved" && (
                      <button onClick={() => setAuStatus(au.id, "approved")} data-testid={`approve-au-${au.id}`} className="pill-btn flex items-center gap-1 rounded-full bg-[color:var(--pink-deep)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-white">
                        <Check size={13} /> Approve
                      </button>
                    )}
                    {au.status !== "rejected" && (
                      <button onClick={() => setAuStatus(au.id, "rejected")} data-testid={`reject-au-${au.id}`} className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest">
                        <X size={13} /> Reject
                      </button>
                    )}
                    <button onClick={() => delAu(au.id)} data-testid={`delete-au-${au.id}`} className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-[color:var(--destructive,#d9534f)]">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
                <h3 className="mt-4 font-serif-display text-2xl font-medium">{au.title}</h3>
                <p className="text-xs text-[color:var(--ink-soft)]">by {au.author_name}</p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{au.short_description}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "comments" && (
          <div className="mt-8 space-y-4" data-testid="admin-comment-list">
            {comments.length === 0 && <p className="text-[color:var(--ink-soft)]">No notes yet.</p>}
            {comments.map((c) => (
              <div key={c.id} className="glass rounded-[1.75rem] p-6" data-testid={`admin-comment-${c.id}`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <StatusPill status={c.status} />
                    <span className="text-sm font-medium">{c.author_name}</span>
                  </div>
                  <div className="flex gap-2">
                    {c.status !== "approved" && (
                      <button onClick={() => setCommentStatus(c.id, "approved")} data-testid={`approve-comment-${c.id}`} className="pill-btn flex items-center gap-1 rounded-full bg-[color:var(--pink-deep)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-white">
                        <Check size={13} /> Approve
                      </button>
                    )}
                    {c.status !== "rejected" && (
                      <button onClick={() => setCommentStatus(c.id, "rejected")} data-testid={`reject-comment-${c.id}`} className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest">
                        <X size={13} /> Reject
                      </button>
                    )}
                    <button onClick={() => delComment(c.id)} data-testid={`delete-comment-${c.id}`} className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-[color:var(--destructive,#d9534f)]">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{c.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
