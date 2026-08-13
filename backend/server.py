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

  return (
    <span
      className={`rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-widest ${
        map[status] || "bg-[color:var(--line)]"
      }`}
    >
      {status}
    </span>
  );
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
    image: null,
    youtube_url: "",
    air_date: "",
  });

  // =========================================================
  // LOAD ADMIN DATA
  // =========================================================

  const load = useCallback(async () => {
    console.log("BASE URL:", api.defaults.baseURL);
    console.log(
      "TOKEN:",
      localStorage.getItem("haneulz_token")
    );

    try {
      const [ausRes, commentsRes] = await Promise.all([
        api.get("/admin/aus"),
        api.get("/admin/comments"),
      ]);

      console.log("ALL ADMIN AUS:", ausRes.data);
      console.log(
        "ALL ADMIN COMMENTS:",
        commentsRes.data
      );

      setAus(ausRes.data);
      setComments(commentsRes.data);
    } catch (error) {
      console.error(
        "ADMIN LOAD ERROR:",
        error.response?.data || error.message
      );

      if (error.response?.status === 401) {
        toast.error("Admin session expired. Please log in again.");
      }
    }
  }, []);

  // =========================================================
  // LOAD VARIETY
  // =========================================================

  const loadVariety = useCallback(async () => {
    try {
      const res = await api.get("/variety");

      console.log("VARIETY:", res.data);

      setVariety(res.data);
    } catch (error) {
      console.error(
        "VARIETY ERROR:",
        error.response?.data || error.message
      );
    }
  }, []);

  // =========================================================
  // AUTH CHECK
  // =========================================================

  useEffect(() => {
    if (ready && !admin) {
      navigate("/admin/login");
    }
  }, [ready, admin, navigate]);

  // =========================================================
  // INITIAL ADMIN LOAD
  // =========================================================

  useEffect(() => {
    if (admin) {
      load();
    }
  }, [admin, load]);

  // =========================================================
  // LOAD VARIETY WHEN TAB OPENS
  // =========================================================

  useEffect(() => {
    if (admin && tab === "variety") {
      loadVariety();
    }
  }, [admin, tab, loadVariety]);

  // =========================================================
  // AU ACTIONS
  // =========================================================

  const setAuStatus = async (id, status) => {
    try {
      await api.patch(`/admin/aus/${id}`, {
        status,
      });

      toast.success(`AU ${status}`);

      await load();
    } catch (error) {
      console.error(
        "AU STATUS ERROR:",
        error.response?.data || error.message
      );

      toast.error("Failed to update AU");
    }
  };

  const delAu = async (id) => {
    try {
      await api.delete(`/admin/aus/${id}`);

      toast.success("AU deleted");

      await load();
    } catch (error) {
      console.error(
        "AU DELETE ERROR:",
        error.response?.data || error.message
      );

      toast.error("Failed to delete AU");
    }
  };

  // =========================================================
  // COMMENT ACTIONS
  // =========================================================

  const setCommentStatus = async (id, status) => {
    try {
      await api.patch(`/admin/comments/${id}`, {
        status,
      });

      toast.success(`Note ${status}`);

      await load();
    } catch (error) {
      console.error(
        "COMMENT STATUS ERROR:",
        error.response?.data || error.message
      );

      toast.error("Failed to update note");
    }
  };

  const delComment = async (id) => {
    try {
      await api.delete(`/admin/comments/${id}`);

      toast.success("Note deleted");

      await load();
    } catch (error) {
      console.error(
        "COMMENT DELETE ERROR:",
        error.response?.data || error.message
      );

      toast.error("Failed to delete note");
    }
  };

  // =========================================================
  // VARIETY FORM RESET
  // =========================================================

  const resetVideoForm = () => {
    setVideoForm({
      section: "haneulz",
      category: "han-posts",
      label: "",
      show_name: "",
      episode: "",
      description: "",
      image: null,
      youtube_url: "",
      air_date: "",
    });
  };

  // =========================================================
  // ADD VARIETY
  // =========================================================

  const addVariety = async () => {
    try {
      const formData = new FormData();

      formData.append(
        "section",
        videoForm.section
      );

      formData.append(
        "category",
        videoForm.category
      );

      formData.append(
        "label",
        videoForm.label
      );

      formData.append(
        "show_name",
        videoForm.show_name
      );

      formData.append(
        "episode",
        videoForm.episode
      );

      formData.append(
        "description",
        videoForm.description
      );

      formData.append(
        "youtube_url",
        videoForm.youtube_url
      );

      formData.append(
        "air_date",
        videoForm.air_date
      );

      if (videoForm.image) {
        formData.append(
          "image",
          videoForm.image
        );
      }

      await api.post(
        "/admin/variety",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      toast.success("Video added!");

      resetVideoForm();

      await loadVariety();
    } catch (error) {
      console.error(
        "ADD VARIETY ERROR:",
        error.response?.data || error.message
      );

      toast.error("Failed to add video");
    }
  };

  // =========================================================
  // UPDATE VARIETY
  // =========================================================

  const updateVariety = async () => {
    if (!editingVariety) return;

    try {
      const formData = new FormData();

      formData.append(
        "section",
        videoForm.section
      );

      formData.append(
        "category",
        videoForm.category
      );

      formData.append(
        "label",
        videoForm.label
      );

      formData.append(
        "show_name",
        videoForm.show_name
      );

      formData.append(
        "episode",
        videoForm.episode
      );

      formData.append(
        "description",
        videoForm.description
      );

      formData.append(
        "youtube_url",
        videoForm.youtube_url
      );

      formData.append(
        "air_date",
        videoForm.air_date
      );

      if (videoForm.image) {
        formData.append(
          "image",
          videoForm.image
        );
      }

      await api.put(
        `/admin/variety/${editingVariety.id}`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      toast.success("Video updated");

      setEditingVariety(null);

      resetVideoForm();

      await loadVariety();
    } catch (error) {
      console.error(
        "UPDATE VARIETY ERROR:",
        error.response?.data || error.message
      );

      toast.error("Failed to update video");
    }
  };

  // =========================================================
  // DELETE VARIETY
  // =========================================================

  const deleteVariety = async (id) => {
    try {
      await api.delete(
        `/admin/variety/${id}`
      );

      toast.success("Video deleted");

      await loadVariety();
    } catch (error) {
      console.error(
        "DELETE VARIETY ERROR:",
        error.response?.data || error.message
      );

      toast.error("Failed to delete video");
    }
  };

  // =========================================================
  // EDIT VARIETY
  // =========================================================

  const editVariety = (v) => {
    setEditingVariety(v);

    setVideoForm({
      section: v.section || "haneulz",
      category: v.category || "han-posts",
      label: v.label || "",
      show_name: v.show_name || "",
      episode: v.episode || "",
      description: v.description || "",
      image: null,
      youtube_url: v.youtube_url || "",
      air_date: v.air_date || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // CANCEL VARIETY EDIT
  // =========================================================

  const cancelVarietyEdit = () => {
    setEditingVariety(null);
    resetVideoForm();
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (!ready || !admin) {
    return (
      <div className="grid min-h-screen place-items-center text-[color:var(--ink-soft)]">
        Loading…
      </div>
    );
  }

  // =========================================================
  // COUNTS
  // =========================================================

  const pendingAus = aus.filter(
    (a) => a.status === "pending"
  ).length;

  const pendingComments = comments.filter(
    (c) => c.status === "pending"
  ).length;

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif-display text-5xl font-medium">
              Moderation
            </h1>

            <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
              Signed in as {admin.email}
            </p>
          </div>

          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            data-testid="admin-logout-btn"
            className="pill-btn flex items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-2 text-xs uppercase tracking-widest"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>

        {/* TABS */}

        <div className="mt-8 flex flex-wrap gap-3">

          <button
            onClick={() => setTab("aus")}
            data-testid="tab-aus"
            className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
              tab === "aus"
                ? "bg-[color:var(--ink)] text-white"
                : "border border-[color:var(--line)]"
            }`}
          >
            AUs{" "}
            {pendingAus > 0 &&
              `(${pendingAus})`}
          </button>

          <button
            onClick={() => setTab("comments")}
            data-testid="tab-comments"
            className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
              tab === "comments"
                ? "bg-[color:var(--ink)] text-white"
                : "border border-[color:var(--line)]"
            }`}
          >
            Notes{" "}
            {pendingComments > 0 &&
              `(${pendingComments})`}
          </button>

          <button
            onClick={() => setTab("variety")}
            className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
              tab === "variety"
                ? "bg-[color:var(--ink)] text-white"
                : "border border-[color:var(--line)]"
            }`}
          >
            Variety
          </button>
        </div>

        {/* =================================================
            AUS
        ================================================= */}

        {tab === "aus" && (
          <div
            className="mt-8 space-y-4"
            data-testid="admin-au-list"
          >

            <p>
              Total AUs: {aus.length}
            </p>

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

                    <StatusPill
                      status={au.status}
                    />

                    <span className="text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
                      {au.au_type}
                    </span>

                  </div>

                  <div className="flex gap-2">

                    {au.status !==
                      "approved" && (
                      <button
                        onClick={() =>
                          setAuStatus(
                            au.id,
                            "approved"
                          )
                        }
                        className="pill-btn flex items-center gap-1 rounded-full bg-[color:var(--pink-deep)] px-4 py-2 text-xs text-white"
                      >
                        <Check size={13} />
                        Approve
                      </button>
                    )}

                    {au.status !==
                      "rejected" && (
                      <button
                        onClick={() =>
                          setAuStatus(
                            au.id,
                            "rejected"
                          )
                        }
                        className="pill-btn flex items-center gap-1 rounded-full border px-4 py-2 text-xs"
                      >
                        <X size={13} />
                        Reject
                      </button>
                    )}

                    <button
                      onClick={() =>
                        delAu(au.id)
                      }
                      className="pill-btn flex items-center gap-1 rounded-full border px-4 py-2 text-xs"
                    >
                      <Trash2
                        size={13}
                      />
                    </button>

                  </div>
                </div>

                <h3 className="mt-4 font-serif-display text-2xl">
                  {au.title}
                </h3>

                <p className="text-xs text-[color:var(--ink-soft)]">
                  by {au.author_name}
                </p>

                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
                  {au.short_description}
                </p>

                {au.source_url && (
                  <a
                    href={au.source_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs underline"
                  >
                    View source
                  </a>
                )}

              </div>
            ))}
          </div>
        )}

        {/* =================================================
            VARIETY
        ================================================= */}

        {tab === "variety" && (
          <div className="mt-8 glass rounded-[1.75rem] p-6">

            <div className="flex items-center justify-between gap-3">

              <h2 className="font-serif-display text-3xl">
                {editingVariety
                  ? "Edit Variety Video"
                  : "Add Variety Video"}
              </h2>

              {editingVariety && (
                <button
                  onClick={
                    cancelVarietyEdit
                  }
                  className="rounded-full border px-4 py-2 text-xs"
                >
                  Cancel
                </button>
              )}

            </div>

            {/* SECTION */}

            <select
              className="mt-4 w-full rounded-xl border p-3"
              value={videoForm.section}
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  section:
                    e.target.value,
                })
              }
            >
              <option value="haneulz">
                📸💗 HANEULZ 💙🌩️
              </option>

              <option value="duets">
                Their Duets
              </option>

              <option value="whole-group">
                NOW, THE WHOLE GROUP
              </option>
            </select>

            {/* CATEGORY */}

            {videoForm.section ===
              "haneulz" && (
              <select
                className="mt-3 w-full rounded-xl border p-3"
                value={
                  videoForm.category
                }
                onChange={(e) =>
                  setVideoForm({
                    ...videoForm,
                    category:
                      e.target.value,
                  })
                }
              >
                <option value="yence-posts">
                  🦌 Yence Posts
                </option>

                <option value="han-posts">
                  🐈‍⬛ Han Posts
                </option>

                <option value="haneulz-dc">
                  🎬 HANEULZ DC
                </option>
              </select>
            )}

            {/* LABEL */}

            <select
              className="mt-3 w-full rounded-xl border p-3"
              value={videoForm.label}
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  label:
                    e.target.value,
                })
              }
            >
              <option value="">
                No Label
              </option>

              <option value="EP">
                EP
              </option>

              <option value="Playlist">
                Playlist
              </option>
            </select>

            {/* SHOW NAME */}

            <input
              className="mt-4 w-full rounded-xl border p-3"
              placeholder="Show name"
              value={
                videoForm.show_name
              }
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  show_name:
                    e.target.value,
                })
              }
            />

            {/* EPISODE */}

            <input
              className="mt-3 w-full rounded-xl border p-3"
              placeholder="Episode"
              value={
                videoForm.episode
              }
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  episode:
                    e.target.value,
                })
              }
            />

            {/* DESCRIPTION */}

            <textarea
              className="mt-3 w-full rounded-xl border p-3"
              placeholder="Description"
              rows={4}
              value={
                videoForm.description
              }
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  description:
                    e.target.value,
                })
              }
            />

            {/* YOUTUBE */}

            <input
              className="mt-3 w-full rounded-xl border p-3"
              placeholder="YouTube link"
              value={
                videoForm.youtube_url
              }
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  youtube_url:
                    e.target.value,
                })
              }
            />

            {/* IMAGE */}

            <input
              type="file"
              accept="image/jpeg,image/png"
              className="mt-3 w-full rounded-xl border p-3"
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  image:
                    e.target.files?.[0] ||
                    null,
                })
              }
            />

            <p className="mt-2 text-xs text-[color:var(--ink-soft)]">
              Optional — if you don't upload an image,
              the backend will use the YouTube thumbnail.
            </p>

            {/* SAVE */}

            <button
              onClick={
                editingVariety
                  ? updateVariety
                  : addVariety
              }
              className="mt-5 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white"
            >
              <Plus size={14} />

              {editingVariety
                ? "Save Changes"
                : "Add Video"}
            </button>

            {/* VARIETY LIST */}

            <div className="mt-8 space-y-4">

              {variety.length === 0 && (
                <p className="text-sm text-[color:var(--ink-soft)]">
                  No variety videos yet.
                </p>
              )}

              {variety.map((v) => (
                <div
                  key={v.id}
                  className="glass rounded-[1.75rem] p-5"
                >

                  <div className="flex gap-4">

                    {v.thumbnail && (
                      <img
                        src={v.thumbnail}
                        alt=""
                        className="h-24 w-36 rounded-xl object-cover"
                      />
                    )}

                    <div className="min-w-0 flex-1">

                      <h3 className="font-serif-display text-xl">
                        {v.show_name}
                      </h3>

                      {v.label && (
                        <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
                          {v.label}
                        </p>
                      )}

                      <p className="text-sm">
                        Episode:{" "}
                        {v.episode || "—"}
                      </p>

                      <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
                        {v.description}
                      </p>

                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">

                    <button
                      onClick={() =>
                        editVariety(v)
                      }
                      className="rounded-full border px-4 py-2 text-xs"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteVariety(
                          v.id
                        )
                      }
                      className="rounded-full border px-4 py-2 text-xs"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =================================================
            COMMENTS
        ================================================= */}

        {tab === "comments" && (
          <div
            className="mt-8 space-y-4"
            data-testid="admin-comment-list"
          >

            {comments.length === 0 && (
              <p className="text-[color:var(--ink-soft)]">
                No notes yet.
              </p>
            )}

            {comments.map((c) => (
              <div
                key={c.id}
                className="glass rounded-[1.75rem] p-6"
                data-testid={`admin-comment-${c.id}`}
              >

                <div className="flex items-center justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <StatusPill
                      status={c.status}
                    />

                    <span className="text-sm font-medium">
                      {c.author_name}
                    </span>

                  </div>

                  <div className="flex gap-2">

                    {c.status !==
                      "approved" && (
                      <button
                        onClick={() =>
                          setCommentStatus(
                            c.id,
                            "approved"
                          )
                        }
                        data-testid={`approve-comment-${c.id}`}
                        className="pill-btn flex items-center gap-1 rounded-full bg-[color:var(--pink-deep)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-white"
                      >
                        <Check
                          size={13}
                        />
                        Approve
                      </button>
                    )}

                    {c.status !==
                      "rejected" && (
                      <button
                        onClick={() =>
                          setCommentStatus(
                            c.id,
                            "rejected"
                          )
                        }
                        data-testid={`reject-comment-${c.id}`}
                        className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest"
                      >
                        <X size={13} />
                        Reject
                      </button>
                    )}

                    <button
                      onClick={() =>
                        delComment(c.id)
                      }
                      data-testid={`delete-comment-${c.id}`}
                      className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-[color:var(--destructive,#d9534f)]"
                    >
                      <Trash2
                        size={13}
                      />
                    </button>

                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {c.text}
                </p>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
