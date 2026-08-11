import React, { useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  ExternalLink,
  Upload,
  Send,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Image as ImageIcon,
  Star,
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";

const POSTS_PER_PAGE = 6;

export default function Gallery() {
  const [section, setSection] = useState("gallery");

  return (
    <section className="relative overflow-hidden pb-16">

      {/* =========================
          BACKGROUND DECOR
      ========================= */}

      <div className="pointer-events-none absolute left-[4%] top-20 rotate-[-12deg] font-serif-display text-4xl text-[color:var(--pink-deep)] opacity-20">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[7%] top-32 rotate-12 text-4xl text-[color:var(--blue)] opacity-25">
        ♡
      </div>

      <div className="pointer-events-none absolute left-[12%] top-[42%] text-2xl opacity-15">
        ୨୧
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[65%] text-3xl opacity-15">
        ☁
      </div>

      <div className="pointer-events-none absolute left-[50%] top-[28%] text-xl opacity-10">
        ✧
      </div>

      {/* =========================
          HEADER
      ========================= */}

      <div className="relative mx-auto max-w-5xl px-5 text-center">

        <div className="mx-auto mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[color:var(--line)]" />

          <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line)] bg-white/70">
            <Sparkles
              size={13}
              className="text-[color:var(--pink-deep)]"
            />
          </span>

          <span className="h-px w-16 bg-[color:var(--line)]" />
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
          06 · little archive
        </p>

        <h2 className="mt-4 font-serif-display text-5xl font-medium leading-[0.9] tracking-tight md:text-7xl">
          HANEULZ
          <br />
          <span className="italic text-[color:var(--pink-deep)]">
            Gallery
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[color:var(--ink-soft)]">
          A small corner for pictures, fan creations, and little pieces
          worth keeping around.
        </p>

        <div className="mx-auto mt-7 flex max-w-xs items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
          <Star size={11} />
          <span>collected here</span>
          <Star size={11} />
        </div>

      </div>

      {/* =========================
          SWITCHER
      ========================= */}

      <div className="relative mx-auto mt-12 max-w-lg px-5">

        <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/55 p-2 shadow-[0_15px_45px_rgba(70,50,60,0.06)] backdrop-blur-md">

          <div className="grid grid-cols-2 gap-2">

            <button
              type="button"
              onClick={() => setSection("gallery")}
              className={`rounded-[1.5rem] px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] transition ${
                section === "gallery"
                  ? "bg-[color:var(--ink)] text-white shadow-md"
                  : "text-[color:var(--ink-soft)] hover:bg-white"
              }`}
            >
              HANEULZ Gallery
            </button>

            <button
              type="button"
              onClick={() => setSection("archive")}
              className={`rounded-[1.5rem] px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] transition ${
                section === "archive"
                  ? "bg-[color:var(--ink)] text-white shadow-md"
                  : "text-[color:var(--ink-soft)] hover:bg-white"
              }`}
            >
              HANEULZ Archive
            </button>

          </div>

        </div>

      </div>

      {/* =========================
          CONTENT
      ========================= */}

      <div className="relative mt-14 px-5">

        {section === "gallery" && <HaneulzGallery />}

        {section === "archive" && <HaneulzArchive />}

      </div>

    </section>
  );
}


/* ============================================================
   HANEULZ GALLERY
============================================================ */

function HaneulzGallery() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    try {
      setLoading(true);

      const response = await api.get("/gallery");

      setPosts(response.data || []);
    } catch (error) {
      console.error("Gallery error:", error);
      toast.error("Couldn't load the gallery.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl">

      {/* HEADER CARD */}

      <div className="relative mb-8 overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/55 p-7 shadow-[0_15px_45px_rgba(70,50,60,0.06)] backdrop-blur-md md:p-9">

        <div className="pointer-events-none absolute right-7 top-5 rotate-12 text-3xl opacity-15">
          ✦
        </div>

        <div className="pointer-events-none absolute bottom-4 right-20 text-xl opacity-10">
          ୨୧
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
          curated collection
        </p>

        <div className="mt-2 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <h3 className="font-serif-display text-4xl md:text-5xl">
              little snapshots
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[color:var(--ink-soft)]">
              Photos and moments selected for the HANEULZ corner.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            <ExternalLink size={12} />
            <span>open the original</span>
          </div>

        </div>

      </div>

      {loading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square animate-pulse rounded-[2rem] bg-white/60"
            />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-[2.5rem] border border-dashed border-[color:var(--line)] bg-white/40 px-6 py-24 text-center">

          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[color:var(--line)] bg-white/70">
            <ImageIcon
              size={25}
              className="text-[color:var(--ink-soft)]"
            />
          </div>

          <h3 className="mt-6 font-serif-display text-3xl">
            nothing here yet
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            The collection will appear here once something has been added.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">

          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.original_url}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_10px_30px_rgba(70,50,60,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(70,50,60,0.14)]"
            >

              <img
                src={post.image_url}
                alt={post.caption || "HANEULZ Gallery"}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/75 text-black opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                <span className="font-serif-display text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition duration-300 group-hover:opacity-100">

                <span className="rounded-full bg-white/85 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-black backdrop-blur-sm">
                  view original
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                  <ExternalLink size={13} />
                </span>

              </div>

            </a>
          ))}

        </div>
      )}

    </div>
  );
}


/* ============================================================
   HANEULZ ARCHIVE
============================================================ */

function HaneulzArchive() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showSubmit, setShowSubmit] = useState(false);

  useEffect(() => {
    loadArchive();
  }, [page]);

  async function loadArchive() {
    try {
      setLoading(true);

      const response = await api.get("/archive", {
        params: {
          page,
          limit: POSTS_PER_PAGE,
        },
      });

      setPosts(response.data?.posts || []);
      setTotalPages(response.data?.total_pages || 1);
    } catch (error) {
      console.error("Archive error:", error);
      toast.error("Couldn't load the archive.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmitted() {
    setShowSubmit(false);
    setPage(1);
    loadArchive();
  }

  return (
    <div className="mx-auto max-w-3xl">

      {/* ARCHIVE HEADER */}

      <div className="relative mb-8 overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/55 p-7 shadow-[0_15px_45px_rgba(70,50,60,0.06)] backdrop-blur-md md:p-9">

        <div className="pointer-events-none absolute right-8 top-6 rotate-[-10deg] text-4xl opacity-15">
          ♡
        </div>

        <div className="pointer-events-none absolute bottom-4 right-28 text-xl opacity-10">
          ✦
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              fan art collection
            </p>

            <h3 className="mt-2 font-serif-display text-4xl md:text-5xl">
              HANEULZ Archive
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--ink-soft)]">
              A scrolling collection of fan art shared by the HANEULZ community.
            </p>

          </div>

          <button
            type="button"
            onClick={() => setShowSubmit(true)}
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--pink-deep)]"
          >
            <Upload size={13} />
            Submit your work
          </button>

        </div>

      </div>

      {/* FEED */}

      {loading ? (
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[420px] animate-pulse rounded-[2.5rem] bg-white/50"
            />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-[2.5rem] border border-dashed border-[color:var(--line)] bg-white/40 px-6 py-24 text-center">

          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/70 shadow-sm">
            <Sparkles
              size={25}
              className="text-[color:var(--pink-deep)]"
            />
          </div>

          <h3 className="mt-6 font-serif-display text-3xl">
            the archive is empty
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            Be the first person to add something to this collection.
          </p>

        </div>
      ) : (
        <div className="space-y-6">

          {posts.map((post) => (
            <ArchivePost
              key={post.id}
              post={post}
              onChanged={loadArchive}
            />
          ))}

        </div>
      )}

      {/* PAGINATION */}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">

          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((value) => value - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/70 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            page {page} / {totalPages}
          </span>

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((value) => value + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/70 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>

        </div>
      )}

      {/* SUBMIT MODAL */}

      {showSubmit && (
        <ArchiveSubmission
          onSubmitted={handleSubmitted}
          onClose={() => setShowSubmit(false)}
        />
      )}

    </div>
  );
}


/* ============================================================
   ARCHIVE POST
============================================================ */

function ArchivePost({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);

  async function handleLike() {
    try {
      const response = await api.post(`/archive/${post.id}/like`);

      setLikes(response.data.likes);
      setLiked(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadComments() {
    try {
      const response = await api.get(
        `/archive/${post.id}/comments`
      );

      setComments(response.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't load comments.");
    }
  }

  async function toggleComments() {
    const next = !commentsOpen;

    setCommentsOpen(next);

    if (next) {
      await loadComments();
    }
  }

  async function submitComment(event) {
    event.preventDefault();

    if (!commentText.trim()) {
      return;
    }

    try {
      setCommentLoading(true);

      await api.post(`/archive/${post.id}/comments`, {
        author_name: commentName.trim() || "Anonymous",
        text: commentText.trim(),
      });

      setCommentName("");
      setCommentText("");

      toast.success("Comment sent for approval ♡");
    } catch (error) {
      console.error(error);
      toast.error("Couldn't send your comment.");
    } finally {
      setCommentLoading(false);
    }
  }

  return (
    <article className="overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/75 shadow-[0_12px_40px_rgba(70,50,60,0.07)] backdrop-blur-md">

      {/* HEADER */}

      <div className="flex items-center justify-between px-5 py-5 md:px-7">

        <div className="flex min-w-0 items-center gap-3">

          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)] font-serif-display text-lg shadow-sm">
            {post.author_name?.charAt(0)?.toUpperCase() || "♡"}
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold">
              {post.author_name || "Anonymous"}
            </p>

            <p className="text-[9px] uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
              {formatDate(post.created_at)}
            </p>

          </div>

        </div>

        {post.original_url && (
          <a
            href={post.original_url}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[color:var(--line)] text-[color:var(--ink-soft)] transition hover:bg-white hover:text-[color:var(--ink)]"
            aria-label="Open original post"
          >
            <ExternalLink size={14} />
          </a>
        )}

      </div>

      {/* IMAGE */}

      <div className="bg-[color:var(--cream)]">

        <img
          src={post.image_url}
          alt={post.caption || "HANEULZ fan art"}
          className="mx-auto max-h-[750px] w-full object-contain"
        />

      </div>

      {/* ACTIONS */}

      <div className="px-5 pb-6 pt-5 md:px-7">

        <div className="flex items-center gap-5">

          <button
            type="button"
            onClick={handleLike}
            className={`flex items-center gap-2 text-sm transition ${
              liked
                ? "text-[color:var(--pink-deep)]"
                : "text-[color:var(--ink-soft)] hover:text-[color:var(--pink-deep)]"
            }`}
          >
            <Heart
              size={20}
              strokeWidth={1.5}
              fill={liked ? "currentColor" : "none"}
            />

            <span>{likes}</span>
          </button>

          <button
            type="button"
            onClick={toggleComments}
            className="flex items-center gap-2 text-sm text-[color:var(--ink-soft)] transition hover:text-[color:var(--ink)]"
          >
            <MessageCircle
              size={20}
              strokeWidth={1.5}
            />

            <span>Comments</span>
          </button>

        </div>

        {/* CAPTION */}

        {post.caption && (
          <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-[color:var(--ink)]">
            <span className="font-semibold">
              {post.author_name}
            </span>{" "}
            {post.caption}
          </p>
        )}

        {/* COMMENTS */}

        {commentsOpen && (
          <div className="mt-5 border-t border-[color:var(--line)] pt-5">

            {comments.length > 0 && (
              <div className="space-y-3">

                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="rounded-2xl bg-[color:var(--cream)] px-4 py-3"
                  >
                    <p className="text-xs font-semibold">
                      {comment.author_name}
                    </p>

                    <p className="mt-1 text-sm leading-5 text-[color:var(--ink-soft)]">
                      {comment.text}
                    </p>
                  </div>
                ))}

              </div>
            )}

            <form
              onSubmit={submitComment}
              className="mt-4"
            >

              <input
                value={commentName}
                onChange={(event) =>
                  setCommentName(event.target.value)
                }
                placeholder="Your name"
                className="w-full rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--pink-deep)]"
              />

              <div className="mt-2 flex gap-2">

                <input
                  value={commentText}
                  onChange={(event) =>
                    setCommentText(event.target.value)
                  }
                  placeholder="Write a little comment..."
                  className="min-w-0 flex-1 rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--pink-deep)]"
                />

                <button
                  type="submit"
                  disabled={commentLoading}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--ink)] text-white disabled:opacity-50"
                >
                  <Send size={15} />
                </button>

              </div>

            </form>

          </div>
        )}

      </div>

    </article>
  );
}


/* ============================================================
   SUBMISSION MODAL
============================================================ */

function ArchiveSubmission({ onSubmitted, onClose }) {
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [image, setImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event) {
    event.preventDefault();

    if (!username.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!image) {
      toast.error("Please choose your artwork.");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();

      formData.append(
        "author_name",
        username.trim()
      );

      formData.append(
        "caption",
        caption.trim()
      );

      formData.append(
        "original_url",
        originalUrl.trim()
      );

      formData.append(
        "image",
        image
      );

      await api.post("/archive", formData);

      toast.success(
        "Your artwork was submitted for review ♡"
      );

      onSubmitted();
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail ||
        "Couldn't submit your artwork."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">

      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2.5rem] border border-white/60 bg-[color:var(--cream)] p-6 shadow-2xl md:p-8">

        {/* CLOSE BUTTON */}

        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          aria-label="Close submission form"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/75 text-[color:var(--ink-soft)] transition hover:bg-white hover:text-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <X size={17} />
        </button>

        {/* DECOR */}

        <div className="pointer-events-none absolute left-6 top-6 text-2xl opacity-15">
          ✦
        </div>

        <div className="pointer-events-none absolute bottom-8 right-8 text-2xl opacity-10">
          ୨୧
        </div>

        <div className="text-center">

          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm">
            <Sparkles
              size={20}
              className="text-[color:var(--pink-deep)]"
            />
          </div>

          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
            HANEULZ ARCHIVE
          </p>

          <h2 className="mt-2 font-serif-display text-4xl">
            add to the archive
          </h2>

          <p className="mt-3 text-sm leading-6 text-[color:var(--ink-soft)]">
            Share a fan creation and it can become part of the collection
            after review.
          </p>

        </div>

        <form
          onSubmit={submit}
          className="mt-7 space-y-4"
        >

          {/* USERNAME */}

          <div>

            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Name / username
            </label>

            <input
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
              required
              placeholder="@yourusername"
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--pink-deep)]"
            />

          </div>

          {/* IMAGE */}

          <div>

            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Artwork
            </label>

            <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[color:var(--line)] bg-white/50 px-5 text-center transition hover:bg-white">

              <Upload
                size={20}
                className="text-[color:var(--pink-deep)]"
              />

              <span className="mt-3 max-w-full truncate text-sm">
                {image
                  ? image.name
                  : "Choose your fan art"}
              </span>

              <span className="mt-1 text-[10px] text-[color:var(--ink-soft)]">
                JPG, PNG, WEBP
              </span>

              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={(event) =>
                  setImage(
                    event.target.files?.[0] || null
                  )
                }
              />

            </label>

          </div>

          {/* CAPTION */}

          <div>

            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Caption
            </label>

            <textarea
              value={caption}
              onChange={(event) =>
                setCaption(event.target.value)
              }
              rows={4}
              placeholder="Add a caption if you'd like ♡"
              className="w-full resize-none rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--pink-deep)]"
            />

          </div>

          {/* ORIGINAL LINK */}

          <div>

            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Original post link
              <span className="ml-1 font-normal normal-case tracking-normal opacity-60">
                (optional)
              </span>
            </label>

            <input
              type="url"
              value={originalUrl}
              onChange={(event) =>
                setOriginalUrl(event.target.value)
              }
              placeholder="https://..."
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--pink-deep)]"
            />

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[color:var(--pink-deep)] disabled:cursor-not-allowed disabled:opacity-50"
          >

            {submitting ? (
              "Submitting..."
            ) : (
              <>
                <Send size={13} />
                Submit artwork
              </>
            )}

          </button>

          <p className="text-center text-[10px] leading-5 text-[color:var(--ink-soft)]">
            Your submission will be reviewed before appearing in the archive.
          </p>

        </form>

      </div>

    </div>
  );
}


/* ============================================================
   DATE
============================================================ */

function formatDate(value) {
  if (!value) {
    return "";
  }

  try {
    return new Date(value).toLocaleDateString(
      undefined,
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  } catch {
    return "";
  }
}
