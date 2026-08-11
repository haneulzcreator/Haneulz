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
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";

const POSTS_PER_PAGE = 6;

export default function Gallery() {
  const [section, setSection] = useState("gallery");

  return (
    <section className="relative pb-10">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-10 top-10 text-5xl opacity-20">
        ✦
      </div>

      <div className="pointer-events-none absolute right-0 top-24 text-4xl opacity-20">
        ♡
      </div>

      <div className="pointer-events-none absolute left-1/4 top-[45%] text-3xl opacity-10">
        ୨୧
      </div>

      <div className="pointer-events-none absolute right-1/4 top-[70%] text-3xl opacity-10">
        ☁
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto max-w-3xl text-center">

        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[color:var(--line)]" />

          <Sparkles
            size={15}
            strokeWidth={1.5}
            className="text-[color:var(--pink-deep)]"
          />

          <span className="h-px w-12 bg-[color:var(--line)]" />
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
          06 · little archive
        </p>

        <h2 className="mt-4 font-serif-display text-5xl font-medium tracking-tight md:text-7xl">
          HANEULZ
          <br />
          <span className="italic">Gallery</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
          A little collection of moments, artworks, and memories
          gathered in one cozy corner of HANEULZ ♡
        </p>

      </div>

      {/* =====================================================
          SECTION SWITCH
      ===================================================== */}

      <div className="mx-auto mt-10 flex max-w-md justify-center rounded-full border border-[color:var(--line)] bg-white/50 p-1.5 backdrop-blur-sm">

        <button
          type="button"
          onClick={() => setSection("gallery")}
          className={`flex-1 rounded-full px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] transition ${
            section === "gallery"
              ? "bg-[color:var(--ink)] text-white shadow-sm"
              : "text-[color:var(--ink-soft)] hover:bg-white"
          }`}
        >
          HANEULZ Gallery
        </button>

        <button
          type="button"
          onClick={() => setSection("archive")}
          className={`flex-1 rounded-full px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] transition ${
            section === "archive"
              ? "bg-[color:var(--ink)] text-white shadow-sm"
              : "text-[color:var(--ink-soft)] hover:bg-white"
          }`}
        >
          HANEULZ Archive
        </button>

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mt-12">

        {section === "gallery" && (
          <HaneulzGallery />
        )}

        {section === "archive" && (
          <HaneulzArchive />
        )}

      </div>

    </section>
  );
}


/* =============================================================
   HANEULZ GALLERY
   ADMIN CURATED GRID
============================================================= */

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

      console.error(error);

      toast.error("Couldn't load the gallery.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="mx-auto max-w-6xl">

      <div className="mb-8 flex items-end justify-between gap-4">

        <div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
            curated by HANEULZ
          </p>

          <h3 className="mt-2 font-serif-display text-4xl md:text-5xl">
            little snapshots
          </h3>

        </div>

        <div className="hidden text-right sm:block">

          <p className="font-serif-display text-sm text-[color:var(--ink-soft)]">
            click a photo
          </p>

          <p className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            to visit the original post
          </p>

        </div>

      </div>

      {loading ? (

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square animate-pulse rounded-[1.5rem] bg-white/60"
            />
          ))}

        </div>

      ) : posts.length === 0 ? (

        <div className="rounded-[2rem] border border-dashed border-[color:var(--line)] bg-white/40 px-6 py-20 text-center">

          <ImageIcon
            className="mx-auto text-[color:var(--ink-soft)]"
            size={30}
          />

          <h3 className="mt-5 font-serif-display text-3xl">
            nothing here yet
          </h3>

          <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
            The HANEULZ Gallery is waiting for its first little collection.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">

          {posts.map((post) => (

            <a
              key={post.id}
              href={post.original_url}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[1.25rem] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:rounded-[1.75rem]"
            >

              <img
                src={post.image_url}
                alt={post.caption || "HANEULZ Gallery"}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition duration-300 group-hover:opacity-100">

                <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-black backdrop-blur-sm">
                  original post
                </span>

                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
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


/* =============================================================
   HANEULZ ARCHIVE
   X-STYLE FAN ART FEED
============================================================= */

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

      setPosts(response.data.posts || []);
      setTotalPages(response.data.total_pages || 1);

    } catch (error) {

      console.error(error);

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

      {/* ===================================================
          ARCHIVE HEADER
      =================================================== */}

      <div className="mb-8">

        <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/55 p-6 shadow-sm backdrop-blur-sm md:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                fan art archive
              </p>

              <h3 className="mt-2 font-serif-display text-4xl md:text-5xl">
                HANEULZ Archive
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--ink-soft)]">
                A timeline of fan-made works created with love for HANEULZ.
              </p>

            </div>

            <button
              type="button"
              onClick={() => setShowSubmit(true)}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--pink-deep)]"
            >
              <Upload size={13} />
              Submit your work
            </button>

          </div>

        </div>

      </div>

      {/* ===================================================
          FEED
      =================================================== */}

      {loading ? (

        <div className="space-y-5">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[420px] animate-pulse rounded-[2rem] bg-white/50"
            />
          ))}

        </div>

      ) : posts.length === 0 ? (

        <div className="rounded-[2rem] border border-dashed border-[color:var(--line)] bg-white/40 px-6 py-20 text-center">

          <Sparkles
            className="mx-auto text-[color:var(--pink-deep)]"
            size={30}
          />

          <h3 className="mt-5 font-serif-display text-3xl">
            the archive is waiting
          </h3>

          <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
            Be the first to leave a little piece of HANEULZ here ♡
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {posts.map((post) => (
            <ArchivePost
              key={post.id}
              post={post}
              onChanged={loadArchive}
            />
          ))}

        </div>

      )}

      {/* ===================================================
          PAGINATION
      =================================================== */}

      {totalPages > 1 && (

        <div className="mt-10 flex items-center justify-center gap-3">

          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((value) => value - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="rounded-full bg-white/60 px-5 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            page {page} / {totalPages}
          </span>

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((value) => value + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>

        </div>

      )}

      {/* ===================================================
          SUBMISSION MODAL
      =================================================== */}

      {showSubmit && (
        <ArchiveSubmission
          onSubmitted={handleSubmitted}
        />
      )}

    </div>
  );
}


/* =============================================================
   ARCHIVE POST
============================================================= */

function ArchivePost({ post, onChanged }) {

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  const [commentLoading, setCommentLoading] = useState(false);

  async function handleLike() {

    try {

      const response = await api.post(
        `/archive/${post.id}/like`
      );

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

      await api.post(
        `/archive/${post.id}/comments`,
        {
          author_name: commentName.trim() || "Anonymous",
          text: commentText.trim(),
        }
      );

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
    <article className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/75 shadow-[0_8px_30px_rgba(70,50,60,0.06)] backdrop-blur-sm">

      {/* ===================================================
          POST HEADER
      =================================================== */}

      <div className="flex items-center justify-between px-5 py-4 md:px-6">

        <div className="flex min-w-0 items-center gap-3">

          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)] font-serif-display text-lg">
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

      {/* ===================================================
          IMAGE
      =================================================== */}

      <div className="bg-[color:var(--cream)]">

        <img
          src={post.image_url}
          alt={post.caption || "HANEULZ fan art"}
          className="mx-auto max-h-[750px] w-full object-contain"
        />

      </div>

      {/* ===================================================
          ACTIONS
      =================================================== */}

      <div className="px-5 pb-5 pt-4 md:px-6">

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
            <MessageCircle size={20} strokeWidth={1.5} />
            <span>Comments</span>
          </button>

        </div>

        {/* =================================================
            CAPTION
        ================================================= */}

        {post.caption && (
          <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-[color:var(--ink)]">
            <span className="font-semibold">
              {post.author_name}
            </span>{" "}
            {post.caption}
          </p>
        )}

        {/* =================================================
            COMMENTS
        ================================================= */}

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


/* =============================================================
   SUBMISSION MODAL
============================================================= */

function ArchiveSubmission({ onSubmitted }) {

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

      await api.post(
        "/archive",
        formData
      );

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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    >

      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-white/50 bg-[color:var(--cream)] p-6 shadow-2xl md:p-8"
      >

        {/* NO X BUTTON ON PURPOSE */}

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
            leave something here ♡
          </h2>

          <p className="mt-3 text-sm leading-6 text-[color:var(--ink-soft)]">
            Share your HANEULZ fan art with the archive.
            Your work will appear after admin approval.
          </p>

        </div>

        <form
          onSubmit={submit}
          className="mt-7 space-y-4"
        >

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

          <div>

            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Artwork
            </label>

            <label className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[color:var(--line)] bg-white/50 px-5 text-center transition hover:bg-white">

              <Upload
                size={20}
                className="text-[color:var(--pink-deep)]"
              />

              <span className="mt-3 text-sm">
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
                  setImage(event.target.files?.[0] || null)
                }
              />

            </label>

          </div>

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
              placeholder="Tell us a little about your artwork ♡"
              className="w-full resize-none rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--pink-deep)]"
            />

          </div>

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
            You won't be able to close this form until your submission
            has been completed.
          </p>

        </form>

      </div>

    </div>
  );
}


/* =============================================================
   DATE
============================================================= */

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
