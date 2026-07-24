import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X, Trash2, LogOut, Plus } from "lucide-react";
import { toast } from "sonner";
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
const [variety, setVariety] = useState([]);
  const [editingVariety, setEditingVariety] = useState(null);
const [editingAU, setEditingAU] = useState(null);
  
const [videoForm, setVideoForm] = useState({
  section: "haneulz",
  category: "han-posts",
  label: "",
  show_name: "",
  episode: "",
  description: "",
  photo_url: "",
  youtube_url: "",
  air_date: ""
});

  const load = useCallback(() => {
  api.get("/admin/aus").then((r) => setAus(r.data)).catch(() => {});
  api.get("/admin/comments").then((r) => setComments(r.data)).catch(() => {});
  api.get("/variety").then((r) => setVariety(r.data)).catch(() => {});
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
  const addVariety = async () => {
  await api.post("/admin/variety", videoForm);

  toast.success("Video added!");

  setVideoForm({
    section:"haneulz",
    category:"han-posts",
    show_name:"",
    label:"",
    episode:"",
    description:"",
    photo_url:"",
    youtube_url:"",
    air_date:""
  });

  load();
};
const updateVariety = async () => {
  await api.put(
    `/admin/variety/${editingVariety.id}`,
    videoForm
  );

  toast.success("Video updated");

  setEditingVariety(null);

  setVideoForm({
    section:"haneulz",
    category:"han-posts",
    show_name:"",
    label:"",
    episode:"",
    description:"",
    photo_url:"",
    youtube_url:"",
    air_date:""
  });

  load();
};

const deleteVariety = async (id) => {
  await api.delete(`/admin/variety/${id}`);

  toast.success("Video deleted");

  load();
};
  
  const editVariety = (v) => {
  setEditingVariety(v);

  setVideoForm({
    section: v.section || "haneulz",
    category: v.category || "han-posts",
    label: v.label || "",
    show_name: v.show_name || "",
    episode: v.episode || "",
    description: v.description || "",
    photo_url: v.photo_url || "",
    youtube_url: v.youtube_url || "",
    air_date: v.air_date || ""
  });
};
  
  if (!ready || !admin) return <div className="grid min-h-screen place-items-center text-[color:var(--ink-soft)]">Loading…</div>;

  const pendingAus = aus.filter((a) => a.status === "pending").length;
  const pendingComments = comments.filter((c) => c.status === "pending").length;

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
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
            <button 
onClick={() => setTab("variety")}
className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
tab === "variety" ? "bg-[color:var(--ink)] text-white" : "border border-[color:var(--line)]"
}`}>
Variety
</button>
  </div>

    {tab === "aus" && (
  <div className="mt-8 space-y-4" data-testid="admin-au-list">
    {aus.length === 0 && (
      <p className="text-[color:var(--ink-soft)]">
        No submissions yet.
      </p>
    )}

    {aus.map((au) => (
      <div 
        key={au.id} 
        className="glass rounded-[1.75rem] p-6"
      >

        <div className="flex flex-wrap items-center justify-between gap-3">

          <div className="flex items-center gap-3">
            <StatusPill status={au.status} />
            <span className="text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
              {au.au_type}
            </span>
          </div>

          <div className="flex gap-2">

            {au.status !== "approved" && (
              <button onClick={() => setAuStatus(au.id,"approved")}>
                <Check size={13}/> Approve
              </button>
            )}

            {au.status !== "rejected" && (
              <button onClick={() => setAuStatus(au.id,"rejected")}>
                <X size={13}/> Reject
              </button>
            )}

            <button onClick={() => delAu(au.id)}>
              <Trash2 size={13}/>
            </button>

          </div>

        </div>

        <h3 className="mt-4 font-serif-display text-2xl">
          {au.title}
        </h3>

        <p className="text-xs">
          by {au.author_name}
        </p>

        <p className="mt-2 text-sm">
          {au.short_description}
        </p>

      </div>
    ))}
  </div>
)}
{tab === "variety" && (
<div className="mt-8 glass rounded-[1.75rem] p-6">

<h2 className="font-serif-display text-3xl">
{editingVariety ? "Edit Variety Video" : "Add Variety Video"}
</h2>

  <select
className="mt-4 w-full rounded-xl border p-3"
value={videoForm.section}
onChange={(e)=>setVideoForm({...videoForm, section:e.target.value})}
>
<option value="haneulz">📸💗 HANEULZ 💙🌩️</option>
<option value="duets">Their Duets</option>
<option value="whole-group">NOW, THE WHOLE GROUP</option>
</select>

{videoForm.section === "haneulz" && (
<select
className="mt-3 w-full rounded-xl border p-3"
value={videoForm.category}
onChange={(e)=>setVideoForm({...videoForm, category:e.target.value})}
>
<option value="yence-posts">🦌 Yence Posts</option>
<option value="han-posts">🐈‍⬛ Han Posts</option>
<option value="haneulz-dc">🎬 HANEULZ DC</option>
</select>
)}

<select
className="mt-3 w-full rounded-xl border p-3"
value={videoForm.label}
onChange={(e)=>setVideoForm({...videoForm,label:e.target.value})}
>
<option value="">No Label</option>
<option value="EP">EP</option>
<option value="Playlist">Playlist</option>
</select>

<input
className="mt-4 w-full rounded-xl border p-3"
placeholder="Show name"
value={videoForm.show_name}
onChange={(e)=>setVideoForm({...videoForm,show_name:e.target.value})}
/>


<input
className="mt-3 w-full rounded-xl border p-3"
placeholder="Episode"
value={videoForm.episode}
onChange={(e)=>setVideoForm({...videoForm,episode:e.target.value})}
/>


<textarea
className="mt-3 w-full rounded-xl border p-3"
placeholder="Description"
value={videoForm.description}
onChange={(e)=>setVideoForm({...videoForm,description:e.target.value})}
/>


<input
className="mt-3 w-full rounded-xl border p-3"
placeholder="YouTube link"
value={videoForm.youtube_url}
onChange={(e)=>setVideoForm({...videoForm,youtube_url:e.target.value})}
/>


<input
className="mt-3 w-full rounded-xl border p-3"
placeholder="Photo URL"
value={videoForm.photo_url}
onChange={(e)=>setVideoForm({...videoForm,photo_url:e.target.value})}
/>


<button
onClick={editingVariety ? updateVariety : addVariety}
className="mt-5 rounded-full bg-black px-6 py-3 text-white"
>
<Plus size={14}/>
{editingVariety ? "Save Changes" : "Add Video"}
</button>

<div className="mt-8 space-y-4">
  {variety.map((v) => (
    <div key={v.id} className="glass rounded-[1.75rem] p-5">
      <h3 className="font-serif-display text-xl">
        {v.show_name}
      </h3>

      <p className="text-sm">
        Episode: {v.episode}
      </p>

      <p className="mt-2 text-sm">
        {v.description}
      </p>

    <div className="flex gap-2 mt-4">

<button
onClick={() => editVariety(v)}
  className="rounded-full border px-4 py-2 text-xs"
>
  Edit
</button>

<button
  onClick={() => deleteVariety(v.id)}
  className="rounded-full border px-4 py-2 text-xs"
>
  Delete
</button>

    </div>
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
