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
  Camera,
  Star,
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";

const POSTS_PER_PAGE = 6;

export default function Gallery() {
  const [section, setSection] = useState("gallery");

  return (
    <section className="relative overflow-hidden pb-16">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-30px] top-24 rotate-[-12deg] text-6xl opacity-[0.12]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[-15px] top-40 rotate-[15deg] text-7xl opacity-[0.12]">
        ♡
      </div>

      <div className="pointer-events-none absolute left-[8%] top-[48%] text-4xl opacity-[0.08]">
        ୨୧
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[72%] text-4xl opacity-[0.08]">
        ☁
      </div>

      <div className="pointer-events-none absolute left-[45%] top-[30%] text-2xl opacity-[0.08]">
        ✧
      </div>

      <div className="pointer-events-none absolute right-[30%] top-[58%] text-3xl opacity-[0.08]">
        ☆
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative mx-auto max-w-4xl px-4 text-center">

        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[color:var(--line)]" />

          <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 shadow-sm">
            <Sparkles
              size={14}
              strokeWidth={1.5}
              className="text-[color:var(--pink-deep)]"
            />
          </span>

          <span className="h-px w-16 bg-[color:var(--line)]" />
        </div>

        <div className="inline-flex rotate-[-2deg] items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm">
          <Camera
            size={12}
            className="text-[color:var(--pink-deep)]"
          />

          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            06 · little archive
          </p>
        </div>

        <h2 className="mt-6 font-serif-display text-5xl font-medium leading-[0.9] tracking-tight md:text-8xl">
          HANEULZ
          <br />
          <span className="relative italic">
            Gallery

            <span className="absolute -right-7 -top-3 text-2xl not-italic text-[color:var(--pink-deep)]">
              ✦
            </span>
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
          A little collection of moments, artworks, and memories
          gathered in one cozy corner of HANEULZ ♡
        </p>

        <div className="mx-auto mt-7 flex items-center justify-center gap-2 text-[color:var(--ink-soft)]">
          <span className="text-xs">♡</span>
          <span className="h-px w-5 bg-[color:var(--line)]" />
          <span className="text-[10px] uppercase tracking-[0.25em]">
            made with love
          </span>
          <span className="h-px w-5 bg-[color:var(--line)]" />
          <span className="text-xs">♡</span>
        </div>

      </div>

      {/* =====================================================
          SECTION SWITCH
      ===================================================== */}

      <div className="relative mx-auto mt-12 max-w-lg px-4">

        <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/55 p-1.5 shadow-sm backdrop-blur-md">

          <div className="grid grid-cols-2 gap-1">

            <button
              type="button"
              onClick={() => setSection("gallery")}
              className={`relative flex items-center justify-center gap-2 rounded-[1.5rem] px-4 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition ${
                section === "gallery"
                  ? "bg-[color:var(--ink)] text-white shadow-md"
                  : "text-[color:var(--ink-soft)] hover:bg-white/80"
              }`}
            >
              <Camera size={13} />
              HANEULZ Gallery
            </button>

            <button
              type="button"
              onClick={() => setSection("archive")}
              className={`relative flex items-center justify-center gap-2 rounded-[1.5rem] px-4 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition ${
                section === "archive"
                  ? "bg-[color:var(--ink)] text-white shadow-md"
                  : "text-[color:var(--ink-soft)] hover:bg-white/80"
              }`}
            >
              <Heart size={13} />
              HANEULZ Archive
            </button>

          </div>

        </div>

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mt-14 px-4">

        {section === "gallery" && <HaneulzGallery />}

        {section === "archive" && <HaneulzArchive />}

      </div>

    </section>
  );
}


/* =============================================================
   HANEULZ GALLERY
============================================================= */

function HaneulzGallery() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadGallery() {
      try {
        setLoading(true);

        const response = await api.get("/gallery");

        if (mounted) {
          setPosts(Array.isArray(response.data) ? response.data : []);
        }

      } catch (error) {

        console.error("Gallery loading error:", error);

        if (mounted) {
          setPosts([]);
        }

        // Don't show an annoying toast on initial gallery loading.
        // The empty state will explain that there are no posts.
      } finally {

        if (mounted) {
          setLoading(false);
        }

      }
    }

    loadGallery();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl">

      {/* HEADER CARD */}

      <div className="relative mb-10">

        <div className="absolute -right-2 -top-4 z-10 rotate-[5deg] rounded-sm bg-[color:var(--pink)] px-4 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] shadow-sm">
          memories ♡
        </div>

        <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/60 p-6 shadow-sm backdrop-blur-sm md:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
                <Sparkles size={14} />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                  curated by HANEULZ
                </p>
              </div>

              <h3 className="mt-3 font-serif-display text-4xl md:text-5xl">
                little snapshots
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--ink-soft)]">
                Tiny moments worth keeping forever — collected in one
                little corner.
              </p>

            </div>

            <div className="hidden rotate-[2deg] rounded-xl border border-[color:var(--line)] bg-[color:var(--cream)] px-4 py-3 text-center sm:block">
              <p className="font-serif-display text-sm">
                click a photo ♡
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                visit the original post
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* LOADING */}

      {loading ? (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square animate-pulse rounded-[1.75rem] bg-white/60"
            />
          ))}

        </div>

      ) : posts.length === 0 ? (

        <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-[color:var(--line)] bg-white/40 px-6 py-24 text-center">

          <div className="absolute left-6 top-5 rotate-[-12deg] text-3xl opacity-20">
            ✦
          </div>

          <div className="absolute right-7 top-8 rotate-[15deg] text-3xl opacity-20">
            ♡
          </div>

          <div className="mx-auto grid h-16 w-16 rotate-[-3deg] place-items-center rounded-2xl border border-[color:var(--line)] bg-white shadow-sm">
            <ImageIcon
              className="text-[color:var(--ink-soft)]"
              size={28}
            />
          </div>

          <h3 className="mt-6 font-serif-display text-3xl">
            nothing here yet
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
            The HANEULZ Gallery is waiting for its first little collection.
          </p>

          <div className="mt-5 text-lg text-[color:var(--pink-deep)]">
            ୨୧ ♡ ୨୧
          </div>

        </div>

      ) : (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">

          {posts.map((post, index) => (

            <a
              key={post.id}
              href={post.original_url}
              target="_blank"
              rel="noreferrer"
              className={`group relative aspect-square overflow-hidden rounded-[1.5rem] border border-white bg-white p-1.5 shadow-[0_8px_25px_rgba(70,50,60,0.08)] transition duration-500 hover:-translate-y-1 hover:rotate-0 hover:shadow-xl md:rounded-[2rem] ${
                index % 3 === 0
                  ? "rotate-[-1deg]"
                  : index % 3 === 1
                  ? "rotate-[1deg]"
                  : "rotate-[-0.5deg]"
              }`}
            >

              <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] md:rounded-[1.6rem]">

                <img
                  src={post.image_url}
                  alt={post.caption || "HANEULZ Gallery"}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/80 text-black opacity-0 shadow-sm backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  <Star size={12} />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition duration-300 group-hover:opacity-100">

                  <span className="rounded-full bg-white/85 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-black backdrop-blur-sm">
                    original post
                  </span>

                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black shadow-sm">
                    <ExternalLink size={13} />
                  </span>

                </div>

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
============================================================= */

function HaneulzArchive() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);
  const [showSubmit, setShowSubmit] = useState(false);

  async function loadArchive(targetPage = page) {

    try {

      setLoading(true);

      const response = await api.get("/archive", {
        params: {
          page: targetPage,
          limit: POSTS_PER_PAGE,
        },
      });

      const data = response.data || {};

      setPosts(Array.isArray(data.posts) ? data.posts : []);
      setTotalPages(data.total_pages || 1);

    } catch (error) {

      console.error("Archive loading error:", error);

      setPosts([]);
      setTotalPages(1);

      // Don't show a toast here because an empty archive should
      // not look like a broken page.

    } finally {

      setLoading(false);

    }
  }

  useEffect(() => {
    loadArchive(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleSubmitted() {

    setShowSubmit(false);
    setPage(1);

    loadArchive(1);

  }

  return (
    <div className="mx-auto max-w-3xl">

      {/* ===================================================
          ARCHIVE HEADER
      =================================================== */}

      <div className="relative mb-8">

        <div className="absolute -right-1 -top-5 z-10 rotate-[4deg] rounded-sm bg-[color:var(--blue)] px-4 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] shadow-sm">
          fan made ♡
        </div>

        <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/60 p-6 shadow-sm backdrop-blur-md md:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <Heart
                  size={14}
                  className="text-[color:var(--pink-deep)]"
                  fill="currentColor"
                />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                  fan art archive
                </p>

              </div>

              <h3 className="mt-3 font-serif-display text-4xl md:text-5xl">
                HANEULZ Archive
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--ink-soft)]">
                A timeline of fan-made works created with love for HANEULZ.
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

          <div className="mt-6 flex items-center gap-3 text-[color:var(--ink-soft)]">
            <span className="h-px flex-1 bg-[color:var(--line)]" />
            <span className="text-xs">୨୧</span>
            <span className="h-px flex-1 bg-[color:var(--line)]" />
          </div>

        </div>

      </div>

      {/* ===================================================
          FEED
      =================================================== */}

      {loading ? (

        <div className="space-y-6">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[420px] animate-pulse rounded-[2rem] bg-white/50"
            />
          ))}

        </div>

      ) : posts.length === 0 ? (

        <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-[color:var(--line)] bg-white/40 px-6 py-24 text-center">

          <div className="absolute left-8 top-7 rotate-[-10deg] text-3xl opacity-20">
            ♡
          </div>

          <div className="absolute right-8 top-7 rotate-[10deg] text-3xl opacity-20">
            ✦
          </div>

          <div className="mx-auto grid h-16 w-16 rotate-[3deg] place-items-center rounded-2xl bg-white shadow-sm">
            <Sparkles
              className="text-[color:var(--pink-deep)]"
              size={28}
            />
          </div>

          <h3 className="mt-6 font-serif-display text-3xl">
            the archive is waiting
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
            Be the first to leave a little piece of HANEULZ here ♡
          </p>

          <button
            type="button"
            onClick={() => setShowSubmit(true)}
            className="mt-6 rounded-full border border-[color:var(--line)] bg-white px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] transition hover:bg-[color:var(--cream)]"
          >
            submit fan art
          </button>

        </div>

      ) : (

        <div className="space-y-6">

          {posts.map((post) => (
            <ArchivePost
              key={post.id}
              post={post}
              onChanged={() => loadArchive(page)}
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
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/70 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            page {page} / {totalPages}
          </span>

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((value) => value + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/70 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
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
          onClose={() => setShowSubmit(false)}
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

    if (liked) {
      return;
    }

    try {

      const response = await api.post(
        `/archive/${post.id}/like`
      );

      setLikes(response.data?.likes ?? likes + 1);
      setLiked(true);

    } catch (error) {

      console.error("Like error:", error);

    }
  }

  async function loadComments() {

    try {

      const response = await api.get(
        `/archive/${post.id}/comments`
      );

      setComments(
        Array.isArray(response.data)
          ? response.data
          : []
      );

    } catch (error) {

      console.error("Comments error:", error);

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

      await loadComments();

    } catch (error) {

      console.error("Comment error:", error);

      toast.error(
        error?.response?.data?.detail ||
        "Couldn't send your comment."
      );

    } finally {

      setCommentLoading(false);

    }
  }

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/75 shadow-[0_10px_35px_rgba(70,50,60,0.07)] backdrop-blur-sm">

      {/* LITTLE TAPE */}

      <div className="absolute left-1/2 top-[-9px] z-10 h-5 w-20 -translate-x-1/2 rotate-[-2deg] bg-[color:var(--pink)] opacity-70 shadow-sm" />

      {/* POST HEADER */}

      <div className="flex items-center justify-between px-5 pb-4 pt-6 md:px-6">

        <div className="flex min-w-0 items-center gap-3">

          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)] font-serif-display text-lg shadow-sm">
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
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 text-[color:var(--ink-soft)] transition hover:bg-white hover:text-[color:var(--ink)]"
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

            {comments.length > 0 ? (

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

            ) : (

              <p className="text-center text-xs text-[color:var(--ink-soft)]">
                No comments yet ♡
              </p>

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

      await api.post(
        "/archive",
        formData
      );

      toast.success(
        "Your artwork was submitted for review ♡"
      );

      onSubmitted();

    } catch (error) {

      console.error("Submission error:", error);

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
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !submitting) {
          onClose();
        }
      }}
    >

      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-white/60 bg-[color:var(--cream)] p-6 shadow-2xl md:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >

        {/* ===================================================
            DECORATIVE TAPE
        =================================================== */}

        <div className="absolute left-1/2 top-[-8px] h-5 w-24 -translate-x-1/2 rotate-[2deg] bg-[color:var(--pink)] opacity-70 shadow-sm" />

        {/* ===================================================
            CLOSE BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          aria-label="Close submission form"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 text-[color:var(--ink-soft)] shadow-sm transition hover:bg-white hover:text-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <X size={16} />
        </button>

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="text-center">

          <div className="mx-auto grid h-14 w-14 rotate-[-4deg] place-items-center rounded-2xl bg-white shadow-sm">
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

        {/* ===================================================
            FORM
        =================================================== */}

        <form
          onSubmit={submit}
          className="mt-7 space-y-4"
        >

          {/* NAME */}

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
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
            />

          </div>

          {/* IMAGE */}

          <div>

            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Artwork
            </label>

            <label className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[color:var(--line)] bg-white/50 px-5 text-center transition hover:bg-white">

              <Upload
                size={20}
                className="text-[color:var(--pink-deep)]"
              />

              <span className="mt-3 max-w-full truncate px-4 text-sm">
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
              placeholder="Tell us a little about your artwork ♡"
              className="w-full resize-none rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
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
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
            />

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:bg-[color:var(--pink-deep)] disabled:cursor-not-allowed disabled:opacity-50"
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
            Your artwork will be reviewed before appearing
            in the archive. ♡
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
