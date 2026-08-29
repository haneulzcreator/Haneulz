import { useEffect, useState, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Check,
  X,
  Trash2,
  LogOut,
  Plus,
} from "lucide-react";
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
const EMPTY_VIDEO_FORM = {
  section: "haneulz",
  category: "han-posts",
  label: "",
  show_name: "",
  episode: "",
  description: "",
  image: null,
  youtube_url: "",
  air_date: "",
};
export default function AdminDashboard() {
  const { admin, ready, logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("aus");
  const [aus, setAus] = useState([]);
  const [comments, setComments] = useState([]);
  const [variety, setVariety] = useState([]);
  const [editingVariety, setEditingVariety] =
    useState(null);
  const [videoForm, setVideoForm] =
    useState(EMPTY_VIDEO_FORM);
  // =========================================================
  // LOAD AUs
  // =========================================================
  const loadAus = useCallback(async () => {
    try {
      const response = await api.get("/admin/aus");
      setAus(response.data || []);
      console.log(
        "ADMIN AUs:",
        response.data
      );
    } catch (error) {
      console.error(
        "ADMIN AU ERROR:",
        error.response?.data || error.message
      );
      if (error.response?.status === 401) {
        logout();
        navigate("/admin/login", {
          replace: true,
        });
      }
    }
  }, [logout, navigate]);
  // =========================================================
  // LOAD COMMENTS
  // =========================================================
  const loadComments = useCallback(async () => {
    try {
      const response = await api.get(
        "/admin/comments"
      );
      setComments(response.data || []);
    } catch (error) {
      console.error(
        "ADMIN COMMENTS ERROR:",
        error.response?.data || error.message
      );
      if (error.response?.status === 401) {
        logout();
        navigate("/admin/login", {
          replace: true,
        });
      }
    }
  }, [logout, navigate]);
  // =========================================================
  // LOAD VARIETY
  // =========================================================
  const loadVariety = useCallback(async () => {
    try {
      const response = await api.get(
        "/variety"
      );
      setVariety(response.data || []);
      console.log(
        "VARIETY:",
        response.data
      );
    } catch (error) {
      console.error(
        "VARIETY ERROR:",
        error.response?.data || error.message
      );
    }
  }, []);
  // =========================================================
  // LOAD EVERYTHING
  // =========================================================
  const loadAll = useCallback(async () => {
    if (!admin) return;
    await Promise.all([
      loadAus(),
      loadComments(),
      loadVariety(),
    ]);
  }, [
    admin,
    loadAus,
    loadComments,
    loadVariety,
  ]);
  // =========================================================
  // AUTH REDIRECT
  // =========================================================
  useEffect(() => {
    if (!ready) return;
    if (!admin) {
      navigate("/admin/login", {
        replace: true,
      });
    }
  }, [
    ready,
    admin,
    navigate,
  ]);
  // =========================================================
  // INITIAL ADMIN LOAD
  // =========================================================
  useEffect(() => {
    if (!ready || !admin) return;
    loadAll();
  }, [
    ready,
    admin,
    loadAll,
  ]);
  // =========================================================
  // AUs
  // =========================================================
  const setAuStatus = async (
    id,
    status
  ) => {
    try {
      await api.patch(
        `/admin/aus/${id}`,
        { status }
      );
      toast.success(
        `AU ${status}`
      );
      await loadAus();
    } catch (error) {
      console.error(
        "AU STATUS ERROR:",
        error.response?.data ||
          error.message
      );
      toast.error(
        error.response?.data?.detail ||
          "Unable to update AU"
      );
    }
  };
  const delAu = async (id) => {
    try {
      await api.delete(
        `/admin/aus/${id}`
      );
      toast.success(
        "AU deleted"
      );
      await loadAus();
    } catch (error) {
      console.error(
        "DELETE AU ERROR:",
        error.response?.data ||
          error.message
      );
      toast.error(
        error.response?.data?.detail ||
          "Unable to delete AU"
      );
    }
  };
  // =========================================================
  // COMMENTS
  // =========================================================
  const setCommentStatus = async (
    id,
    status
  ) => {
    try {
      await api.patch(
        `/admin/comments/${id}`,
        { status }
      );
      toast.success(
        `Note ${status}`
      );
      await loadComments();
    } catch (error) {
      console.error(
        "COMMENT STATUS ERROR:",
        error.response?.data ||
          error.message
      );
      toast.error(
        error.response?.data?.detail ||
          "Unable to update note"
      );
    }
  };
  const delComment = async (id) => {
    try {
      await api.delete(
        `/admin/comments/${id}`
      );
      toast.success(
        "Note deleted"
      );
      await loadComments();
    } catch (error) {
      console.error(
        "DELETE COMMENT ERROR:",
        error.response?.data ||
          error.message
      );
      toast.error(
        error.response?.data?.detail ||
          "Unable to delete note"
      );
    }
  };
  // =========================================================
  // VIDEO FORM RESET
  // =========================================================
  const resetVideoForm = () => {
    setVideoForm({
      ...EMPTY_VIDEO_FORM,
    });
    setEditingVariety(null);
  };
  // =========================================================
  // ADD VARIETY
  // =========================================================
  const addVariety = async () => {
    try {
      const formData =
        new FormData();
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
        formData
      );
      toast.success(
        "Video added!"
      );
      resetVideoForm();
      await loadVariety();
    } catch (error) {
      console.error(
        "ADD VARIETY ERROR:",
        error.response?.data ||
          error.message
      );
      toast.error(
        error.response?.data?.detail ||
          "Unable to add video"
      );
    }
  };
  // =========================================================
  // UPDATE VARIETY
  // =========================================================
  const updateVariety = async () => {
    if (!editingVariety) return;
    try {
      const formData =
        new FormData();
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
        formData
      );
      toast.success(
        "Video updated"
      );
      resetVideoForm();
      await loadVariety();
    } catch (error) {
      console.error(
        "UPDATE VARIETY ERROR:",
        error.response?.data ||
          error.message
      );
      toast.error(
        error.response?.data?.detail ||
          "Unable to update video"
      );
    }
  };
  // =========================================================
  // DELETE VARIETY
  // =========================================================
  const deleteVariety = async (
    id
  ) => {
    try {
      await api.delete(
        `/admin/variety/${id}`
      );
      toast.success(
        "Video deleted"
      );
      await loadVariety();
    } catch (error) {
      console.error(
        "DELETE VARIETY ERROR:",
        error.response?.data ||
          error.message
      );
      toast.error(
        error.response?.data?.detail ||
          "Unable to delete video"
      );
    }
  };
  // =========================================================
  // EDIT VARIETY
  // =========================================================
  const editVariety = (video) => {
    setEditingVariety(video);
    setVideoForm({
      section:
        video.section ||
        "haneulz",
      category:
        video.category ||
        "han-posts",
      label:
        video.label ||
        "",
      show_name:
        video.show_name ||
        "",
      episode:
        video.episode ||
        "",
      description:
        video.description ||
        "",
      image: null,
      youtube_url:
        video.youtube_url ||
        "",
      air_date:
        video.air_date ||
        "",
    });
    setTab("variety");
  };
  // =========================================================
  // LOGOUT
  // =========================================================
  const handleLogout = () => {
    logout();
    navigate(
      "/admin/login",
      {
        replace: true,
      }
    );
  };
  // =========================================================
  // WAIT FOR AUTH RESTORATION
  // =========================================================
  if (!ready) {
    return (
      <div className="grid min-h-screen place-items-center text-[color:var(--ink-soft)]">
        Loading…
      </div>
    );
  }
  // =========================================================
  // NOT AUTHENTICATED
  // =========================================================
  if (!admin) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }
  // =========================================================
  // COUNTS
  // =========================================================
  const pendingAus =
    aus.filter(
      (a) =>
        a.status === "pending"
    ).length;
  const pendingComments =
    comments.filter(
      (c) =>
        c.status === "pending"
    ).length;
  // =========================================================
  // RENDER
  // =========================================================
  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="flex items-center justify-between gap-6">
          <div>
            <h1 className="font-serif-display text-5xl font-medium">
              Moderation
            </h1>
            <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
              Signed in as{" "}
              {admin.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
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
            onClick={() =>
              setTab("aus")
            }
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
            onClick={() =>
              setTab("comments")
            }
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
            onClick={() =>
              setTab("variety")
            }
            className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
              tab === "variety"
                ? "bg-[color:var(--ink)] text-white"
                : "border border-[color:var(--line)]"
            }`}
          >
            Variety
          </button>
        </div>
        {/* ===================================================
            AUs
        =================================================== */}
        {tab === "aus" && (
          <div
            className="mt-8 space-y-4"
            data-testid="admin-au-list"
          >
            <p>
              Total AUs:{" "}
              {aus.length}
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
                      status={
                        au.status
                      }
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
                        <Check
                          size={13}
                        />
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
                        <X
                          size={13}
                        />
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
                  by{" "}
                  {au.author_name}
                </p>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
                  {
                    au.short_description
                  }
                </p>
              </div>
            ))}
          </div>
        )}
        {/* ===================================================
            COMMENTS
        =================================================== */}
        {tab === "comments" && (
          <div
            className="mt-8 space-y-4"
            data-testid="admin-comment-list"
          >
            {comments.length ===
              0 && (
              <p className="text-[color:var(--ink-soft)]">
                No notes yet.
              </p>
            )}
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="glass rounded-[1.75rem] p-6"
                data-testid={`admin-comment-${comment.id}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <StatusPill
                      status={
                        comment.status
                      }
                    />
                    <span className="text-sm font-medium">
                      {
                        comment.author_name
                      }
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {comment.status !==
                      "approved" && (
                      <button
                        onClick={() =>
                          setCommentStatus(
                            comment.id,
                            "approved"
                          )
                        }
                        className="pill-btn flex items-center gap-1 rounded-full bg-[color:var(--pink-deep)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-white"
                      >
                        <Check
                          size={13}
                        />
                        Approve
                      </button>
                    )}
                    {comment.status !==
                      "rejected" && (
                      <button
                        onClick={() =>
                          setCommentStatus(
                            comment.id,
                            "rejected"
                          )
                        }
                        className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest"
                      >
                        <X
                          size={13}
                        />
                        Reject
                      </button>
                    )}
                    <button
                      onClick={() =>
                        delComment(
                          comment.id
                        )
                      }
                      className="pill-btn flex items-center gap-1 rounded-full border border-[color:var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-[color:var(--destructive,#d9534f)]"
                    >
                      <Trash2
                        size={13}
                      />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
        )}
        {/* ===================================================
            VARIETY
        =================================================== */}
        {tab === "variety" && (
          <div className="mt-8 glass rounded-[1.75rem] p-6">
            <h2 className="font-serif-display text-3xl">
              {editingVariety
                ? "Edit Variety Video"
                : "Add Variety Video"}
            </h2>
            <select
              className="mt-4 w-full rounded-xl border p-3"
              value={
                videoForm.section
              }
              onChange={(e) =>
                setVideoForm({
                  ...videoForm,
                  section:
                    e.target.value,
                })
              }
            >
              <option value="haneulz">
                📸💗 HANEULZ
                💙🌩️
              </option>
              <option value="duets">
                Their Duets
              </option>
              <option value="whole-group">
                NOW, THE WHOLE GROUP
              </option>
            </select>
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
            <select
              className="mt-3 w-full rounded-xl border p-3"
              value={
                videoForm.label
              }
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
            <textarea
              className="mt-3 w-full rounded-xl border p-3"
              placeholder="Description"
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
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
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
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={
                  editingVariety
                    ? updateVariety
                    : addVariety
                }
                className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white"
              >
                <Plus
                  size={14}
                />
                {editingVariety
                  ? "Save Changes"
                  : "Add Video"}
              </button>
              {editingVariety && (
                <button
                  type="button"
                  onClick={
                    resetVideoForm
                  }
                  className="rounded-full border px-6 py-3"
                >
                  Cancel
                </button>
              )}
            </div>
            <div className="mt-8 space-y-4">
              {variety.length ===
                0 && (
                <p className="text-sm text-[color:var(--ink-soft)]">
                  No variety videos
                  yet.
                </p>
              )}
              {variety.map((video) => (
                <div
                  key={video.id}
                  className="glass rounded-[1.75rem] p-5"
                >
                  <h3 className="font-serif-display text-xl">
                    {
                      video.show_name
                    }
                  </h3>
                  <p className="text-sm">
                    Episode:{" "}
                    {
                      video.episode
                    }
                  </p>
                  <p className="mt-2 text-sm">
                    {
                      video.description
                    }
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() =>
                        editVariety(
                          video
                        )
                      }
                      className="rounded-full border px-4 py-2 text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        deleteVariety(
                          video.id
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
      </div>
    </div>
  );
}
