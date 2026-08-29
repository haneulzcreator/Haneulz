import { useEffect, useState, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Check,
  X,
  Trash2,
  LogOut,
  Plus,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import { toast } from "sonner";
import { api } from "../lib/api";
import { useAuth } from "../context/AuthContext";

// =========================================================
// STATUS PILL
// =========================================================

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

// =========================================================
// EMPTY VIDEO FORM
// =========================================================

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

// =========================================================
// STORY IMAGE FIELDS
// =========================================================

const STORY_IMAGE_FIELDS = [
  {
    key: "story_cover_image",
    title: "HANEULZ Cover",
    description:
      "Main cover image at the beginning of the HANEULZ story.",
    ratio: "16:9",
  },
  {
    key: "story_han_siren_image",
    title: "HAN · SIREN",
    description:
      "Image for Han's Siren section.",
    ratio: "4:3",
  },
  {
    key: "story_little_prince_image",
    title: "THE LITTLE PRINCE",
    description:
      "Image for The Little Prince section.",
    ratio: "4:3",
  },
  {
    key: "story_group_image",
    title: "AHOF · GROUP PHOTO",
    description:
      "Group image for the AHOF debut section.",
    ratio: "16:9",
  },
  {
    key: "story_little_moments_image",
    title: "LITTLE MOMENTS",
    description:
      "Image for the Little Moments section.",
    ratio: "4:3",
  },
  {
    key: "story_final_image",
    title: "HANEULZ · ALWAYS",
    description:
      "Final image at the bottom of the story.",
    ratio: "16:9",
  },
];

// =========================================================
// ADMIN DASHBOARD
// =========================================================

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

  const [storyImages, setStoryImages] =
    useState({});

  const [storyImageFiles, setStoryImageFiles] =
    useState({});

  const [uploadingStoryImage, setUploadingStoryImage] =
    useState(null);

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
  }, [ready, admin, navigate]);

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
        error.response?.data ||
          error.message
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
        error.response?.data ||
          error.message
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
        error.response?.data ||
          error.message
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
  // LOAD STORY IMAGES
  // =========================================================

  const loadStoryImages = useCallback(async () => {
    try {
      const response = await api.get(
        "/settings"
      );

      const data = response.data || {};

      const loadedImages = {};

      STORY_IMAGE_FIELDS.forEach((field) => {
        loadedImages[field.key] =
          data[field.key] || "";
      });

      setStoryImages(loadedImages);
    } catch (error) {
      console.error(
        "STORY IMAGES ERROR:",
        error.response?.data ||
          error.message
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
  // LOAD EVERYTHING
  // =========================================================

  const loadAll = useCallback(async () => {
    if (!admin) return;

    await Promise.all([
      loadAus(),
      loadComments(),
      loadVariety(),
      loadStoryImages(),
    ]);
  }, [
    admin,
    loadAus,
    loadComments,
    loadVariety,
    loadStoryImages,
  ]);

  // =========================================================
  // INITIAL LOAD
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
  // AU STATUS
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

  // =========================================================
  // DELETE AU
  // =========================================================

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
  // COMMENT STATUS
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

  // =========================================================
  // DELETE COMMENT
  // =========================================================

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
  // RESET VIDEO FORM
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
    if (!videoForm.show_name.trim()) {
      toast.error(
        "Show name is required."
      );

      return;
    }

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
        "Video updated!"
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

  const deleteVariety = async (id) => {
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
  // SELECT STORY IMAGE
  // =========================================================

  const selectStoryImage = (
    key,
    file
  ) => {
    setStoryImageFiles(
      (previous) => ({
        ...previous,
        [key]: file || null,
      })
    );
  };

  // =========================================================
  // UPLOAD STORY IMAGE
  // =========================================================

  const uploadStoryImage = async (
    key
  ) => {
    const file =
      storyImageFiles[key];

    if (!file) {
      toast.error(
        "Please choose an image first."
      );

      return;
    }

    setUploadingStoryImage(key);

    try {
      const formData =
        new FormData();

      formData.append(
        "image",
        file
      );

      /*
       * IMPORTANT:
       * Backend endpoint is:
       *
       * /admin/story-images/{field_name}
       *
       * So the field key must be part
       * of the URL.
       */

      const response =
        await api.post(
          `/admin/story-images/${key}`,
          formData
        );

      const imageUrl =
        response.data?.url;

      if (imageUrl) {
        setStoryImages(
          (previous) => ({
            ...previous,
            [key]: imageUrl,
          })
        );
      }

      setStoryImageFiles(
        (previous) => ({
          ...previous,
          [key]: null,
        })
      );

      toast.success(
        "Story image uploaded!"
      );
    } catch (error) {
      console.error(
        "STORY IMAGE UPLOAD ERROR:",
        error.response?.data ||
          error.message
      );

      toast.error(
        error.response?.data?.detail ||
          "Unable to upload image"
      );
    } finally {
      setUploadingStoryImage(null);
    }
  };

  // =========================================================
  // DELETE STORY IMAGE
  // =========================================================

  const deleteStoryImage = async (
    key
  ) => {
    try {
      await api.delete(
        `/admin/story-images/${key}`
      );

      setStoryImages(
        (previous) => ({
          ...previous,
          [key]: "",
        })
      );

      setStoryImageFiles(
        (previous) => ({
          ...previous,
          [key]: null,
        })
      );

      toast.success(
        "Story image removed."
      );
    } catch (error) {
      console.error(
        "DELETE STORY IMAGE ERROR:",
        error.response?.data ||
          error.message
      );

      toast.error(
        error.response?.data?.detail ||
          "Unable to remove image"
      );
    }
  };

  // =========================================================
  // IMAGE URL
  // =========================================================

  const getImageUrl = (url) => {
    if (!url) return "";

    if (
      url.startsWith("http://") ||
      url.startsWith("https://")
    ) {
      return url;
    }

    /*
     * Your backend returns paths such as:
     *
     * /static/uploads/example.jpg
     *
     * The API client/base URL should handle
     * the backend host.
     */

    return url;
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
  // WAIT FOR AUTH
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
      (au) =>
        au.status === "pending"
    ).length;

  const pendingComments =
    comments.filter(
      (comment) =>
        comment.status === "pending"
    ).length;

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">

        {/* ===================================================
            HEADER
        =================================================== */}

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

        {/* ===================================================
            TABS
        =================================================== */}

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

          <button
            onClick={() =>
              setTab("story-images")
            }
            className={`pill-btn flex items-center gap-2 rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
              tab === "story-images"
                ? "bg-[color:var(--ink)] text-white"
                : "border border-[color:var(--line)]"
            }`}
          >
            <ImageIcon size={13} />
            Story Images
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

            {comments.length === 0 && (
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

            {/* SECTION */}

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
                HANEULZ
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
                  Yence Posts
                </option>

                <option value="han-posts">
                  Han Posts
                </option>

                <option value="haneulz-dc">
                  HANEULZ DC
                </option>
              </select>
            )}

            {/* LABEL */}

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
              accept="image/jpeg,image/png,image/webp,image/gif"
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

            {/* ACTIONS */}

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

            {/* VIDEO LIST */}

            <div className="mt-8 space-y-4">

              {variety.length === 0 && (
                <p className="text-sm text-[color:var(--ink-soft)]">
                  No variety videos yet.
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
                      video.episode ||
                        "—"
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

        {/* ===================================================
            STORY IMAGES
        =================================================== */}

        {tab === "story-images" && (
          <div className="mt-8">

            {/* INTRO */}

            <div className="glass rounded-[1.75rem] p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--pink)]">
                  <ImageIcon size={20} />
                </div>

                <div>

                  <h2 className="font-serif-display text-3xl">
                    HANEULZ Story Images
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    Upload the photos used in
                    the HANEULZ story. These
                    replace the image placeholders
                    on the public HANEULZ page.
                  </p>

                </div>

              </div>

            </div>

            {/* IMAGE CARDS */}

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              {STORY_IMAGE_FIELDS.map(
                (field) => {

                  const image =
                    storyImages[
                      field.key
                    ];

                  const selectedFile =
                    storyImageFiles[
                      field.key
                    ];

                  const isUploading =
                    uploadingStoryImage ===
                    field.key;

                  return (
                    <div
                      key={field.key}
                      className="glass overflow-hidden rounded-[1.75rem]"
                    >

                      {/* PREVIEW */}

                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[color:var(--line)]">

                        {image ? (
                          <img
                            src={getImageUrl(
                              image
                            )}
                            alt={
                              field.title
                            }
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full flex-col items-center justify-center gap-3 text-[color:var(--ink-soft)]">

                            <ImageIcon
                              size={35}
                              strokeWidth={1}
                            />

                            <span className="text-xs uppercase tracking-widest">
                              No image uploaded
                            </span>

                          </div>
                        )}

                      </div>

                      {/* CONTROLS */}

                      <div className="p-5">

                        <div className="flex items-start justify-between gap-4">

                          <div>

                            <h3 className="font-serif-display text-2xl">
                              {
                                field.title
                              }
                            </h3>

                            <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
                              Recommended:{" "}
                              {
                                field.ratio
                              }
                            </p>

                          </div>

                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                          {
                            field.description
                          }
                        </p>

                        {/* FILE INPUT */}

                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/gif"
                          className="mt-4 w-full rounded-xl border border-[color:var(--line)] bg-white/60 p-3 text-sm"
                          onChange={(e) =>
                            selectStoryImage(
                              field.key,
                              e.target.files?.[0] ||
                                null
                            )
                          }
                        />

                        {/* SELECTED FILE */}

                        {selectedFile && (
                          <p className="mt-2 truncate text-xs text-[color:var(--ink-soft)]">
                            Selected:{" "}
                            {
                              selectedFile.name
                            }
                          </p>
                        )}

                        {/* BUTTONS */}

                        <div className="mt-4 flex flex-wrap gap-2">

                          <button
                            type="button"
                            disabled={
                              !selectedFile ||
                              isUploading
                            }
                            onClick={() =>
                              uploadStoryImage(
                                field.key
                              )
                            }
                            className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs uppercase tracking-widest text-white disabled:cursor-not-allowed disabled:opacity-40"
                          >

                            <Upload
                              size={13}
                            />

                            {isUploading
                              ? "Uploading..."
                              : image
                              ? "Replace Image"
                              : "Upload Image"}

                          </button>

                          {image && (
                            <button
                              type="button"
                              onClick={() =>
                                deleteStoryImage(
                                  field.key
                                )
                              }
                              className="flex items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-2.5 text-xs uppercase tracking-widest text-[color:var(--destructive,#d9534f)]"
                            >

                              <Trash2
                                size={13}
                              />

                              Remove

                            </button>
                          )}

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
