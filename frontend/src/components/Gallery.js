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
  Bookmark,
  Star,
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";
const POSTS_PER_PAGE = 6;
export default function Gallery() {
  const [section, setSection] = useState("gallery");
  return (
    <section className="relative overflow-hidden pb-16">
      {/* BACKGROUND DECOR */}
      <div className="pointer-events-none absolute left-0 top-20 h-40 w-40 rounded-full bg-[color:var(--pink)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[30%] h-56 w-56 rounded-full bg-[color:var(--blue)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute left-[8%] top-[48%] rotate-[-12deg] text-3xl opacity-20">
        ✦
      </div>
      <div className="pointer-events-none absolute right-[10%] top-[18%] rotate-[10deg] text-3xl opacity-20">
        ♡
      </div>
      <div className="pointer-events-none absolute right-[20%] top-[65%] text-2xl opacity-15">
        ୨୧
      </div>
      <div className="pointer-events-none absolute left-[20%] top-[82%] text-2xl opacity-15">
        ✧
      </div>
      {/* HEADER */}
      <div className="relative mx-auto max-w-5xl px-5 pt-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[color:var(--ink)] opacity-30" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
                HANEULZ · 06
              </span>
              <Sparkles
                size={13}
                strokeWidth={1.5}
                className="text-[color:var(--pink-deep)]"
              />
            </div>
            <h2 className="font-serif-display text-5xl font-medium leading-[0.88] tracking-tight md:text-8xl">
              HANEULZ
              <br />
              <span className="ml-8 italic text-[color:var(--pink-deep)] md:ml-16">
                Gallery
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-[color:var(--ink-soft)]">
              Photos, fan creations, and little pieces of the HANEULZ
              community collected in one place.
            </p>
          </div>
          {/* MINI STAMP */}
          <div className="hidden rotate-3 border border-[color:var(--line)] bg-white/60 px-6 py-5 text-center shadow-sm backdrop-blur-sm md:block">
            <Camera
              size={18}
              className="mx-auto mb-2 text-[color:var(--pink-deep)]"
            />
            <p className="text-[8px] font-semibold uppercase tracking-[0.25em]">
              HANEULZ
            </p>
            <p className="mt-1 font-serif-display text-lg italic">
              little archive
            </p>
            <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              photos · art · memories
            </p>
          </div>
        </div>
        {/* SECTION SWITCH */}
        <div className="mt-10 flex max-w-lg rounded-[1.25rem] border border-[color:var(--line)] bg-white/50 p-1.5 shadow-sm backdrop-blur-md">
          <button
            type="button"
            onClick={() => setSection("gallery")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] transition ${
              section === "gallery"
                ? "bg-[color:var(--ink)] text-white shadow-md"
                : "text-[color:var(--ink-soft)] hover:bg-white"
            }`}
          >
            <ImageIcon size={13} />
            Gallery
          </button>
          <button
            type="button"
            onClick={() => setSection("archive")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] transition ${
              section === "archive"
                ? "bg-[color:var(--ink)] text-white shadow-md"
                : "text-[color:var(--ink-soft)] hover:bg-white"
            }`}
          >
            <Bookmark size={13} />
            Archive
          </button>
        </div>
      </div>
      {/* CONTENT */}
      <div className="relative mt-14 px-5 md:px-8">
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
      <div className="mb-9 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
            <Star size={12} />
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em]">
              selected moments
            </p>
          </div>
          <h3 className="mt-2 font-serif-display text-4xl md:text-5xl">
            photo wall
          </h3>
        </div>
        <p className="hidden text-right text-[9px] uppercase leading-5 tracking-[0.18em] text-[color:var(--ink-soft)] sm:block">
          tap any image
          <br />
          to view the original
        </p>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square animate-pulse rounded-[1.5rem] border border-[color:var(--line)] bg-white/50"
            />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/50 px-6 py-24 text-center shadow-sm">
          <div className="absolute left-8 top-8 rotate-[-12deg] text-3xl opacity-20">
            ✦
          </div>
          <div className="absolute right-8 top-8 rotate-[12deg] text-3xl opacity-20">
            ♡
          </div>
          <ImageIcon
            className="mx-auto text-[color:var(--pink-deep)]"
            size={32}
            strokeWidth={1.3}
          />
          <h3 className="mt-5 font-serif-display text-3xl">
            the wall is empty
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            New photos will appear here once they have been added to the
            HANEULZ collection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
          {posts.map((post, index) => {
            const rotations = [
              "rotate-[-1deg]",
              "rotate-[1.5deg]",
              "rotate-[-0.5deg]",
              "rotate-[1deg]",
              "rotate-[-1.5deg]",
              "rotate-[0.5deg]",
            ];
            return (
              <a
                key={post.id}
                href={post.original_url}
                target="_blank"
                rel="noreferrer"
                className={`group relative block ${rotations[index % rotations.length]}`}
              >
                {/* TAPE */}
                <div className="absolute left-1/2 top-[-7px] z-10 h-5 w-16 -translate-x-1/2 rotate-[-2deg] bg-white/60 shadow-sm backdrop-blur-sm" />
                <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white p-2 shadow-[0_12px_35px_rgba(70,50,60,0.10)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(70,50,60,0.16)] md:rounded-[1.5rem] md:p-3">
                  <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-[color:var(--cream)] md:rounded-[1.15rem]">
                    <img
                      src={post.image_url}
                      alt={post.caption || "HANEULZ Gallery"}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/85 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-black backdrop-blur-sm">
                        view post
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
                        <ExternalLink size={13} />
                      </span>
                    </div>
                  </div>
                  {post.caption && (
                    <p className="truncate px-1 pb-1 pt-3 font-serif-display text-sm italic text-[color:var(--ink-soft)]">
                      {post.caption}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
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
    <div className="mx-auto max-w-4xl">
      {/* ARCHIVE INTRO */}
      <div className="relative mb-10 overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/55 p-6 shadow-sm backdrop-blur-md md:p-9">
        <div className="absolute right-[-15px] top-[-20px] rotate-12 text-7xl opacity-10">
          ୨୧
        </div>
        <div className="absolute bottom-[-25px] left-[-10px] text-7xl opacity-10">
          ✦
        </div>
        <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
              <Bookmark size={12} />
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em]">
                community archive
              </p>
            </div>
            <h3 className="mt-3 font-serif-display text-4xl leading-none md:text-6xl">
              HANEULZ
              <br />
              <span className="italic">Archive</span>
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[color:var(--ink-soft)]">
              A space for fan art, illustrations, edits, and other
              creations shared by the HANEULZ community.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowSubmit(true)}
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:-translate-y-1 hover:bg-[color:var(--pink-deep)]"
          >
            <Upload size={13} />
            Submit a creation
          </button>
        </div>
      </div>
      {/* FEED */}
      {loading ? (
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[430px] animate-pulse rounded-[2rem] border border-[color:var(--line)] bg-white/50"
            />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-[color:var(--line)] bg-white/40 px-6 py-24 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm">
            <Sparkles
              size={22}
              className="text-[color:var(--pink-deep)]"
            />
          </div>
          <h3 className="mt-5 font-serif-display text-3xl">
            nothing archived yet
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            This section will fill up as community submissions are
            reviewed and added.
          </p>
        </div>
      ) : (
        <div className="space-y-7">
          {posts.map((post) => (
            <ArchivePost
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((value) => value - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/70 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            {page} / {totalPages}
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
      {/* SUBMISSION MODAL */}
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
function ArchivePost({ post }) {
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
    <article className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/75 shadow-[0_12px_40px_rgba(70,50,60,0.07)] backdrop-blur-md">
      {/* POST HEADER */}
      <div className="flex items-center justify-between px-5 py-5 md:px-7">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)] font-serif-display text-lg shadow-sm">
            {post.author_name?.charAt(0)?.toUpperCase() || "♡"}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              {post.author_name || "Anonymous"}
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
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
      <div className="relative overflow-hidden bg-[color:var(--cream)]">
        <img
          src={post.image_url}
          alt={post.caption || "HANEULZ fan art"}
          className="mx-auto max-h-[750px] w-full object-contain"
        />
      </div>
      {/* ACTIONS */}
      <div className="px-5 pb-6 pt-5 md:px-7">
        <div className="flex items-center gap-6">
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
          <p className="mt-5 whitespace-pre-wrap text-sm leading-6 text-[color:var(--ink)]">
            <span className="font-semibold">
              {post.author_name}
            </span>{" "}
            {post.caption}
          </p>
        )}
        {/* COMMENTS */}
        {commentsOpen && (
          <div className="mt-6 border-t border-[color:var(--line)] pt-6">
            {comments.length > 0 && (
              <div className="space-y-3">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--cream)] px-4 py-3"
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
                className="w-full rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
              />
              <div className="mt-2 flex gap-2">
                <input
                  value={commentText}
                  onChange={(event) =>
                    setCommentText(event.target.value)
                  }
                  placeholder="Write a little comment..."
                  className="min-w-0 flex-1 rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
                />
                <button
                  type="submit"
                  disabled={commentLoading}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--ink)] text-white transition hover:bg-[color:var(--pink-deep)] disabled:opacity-50"
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-md">
      <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/60 bg-[color:var(--cream)] p-6 shadow-2xl md:p-8">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          aria-label="Close submission form"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/75 text-[color:var(--ink-soft)] shadow-sm transition hover:bg-white hover:text-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <X size={17} />
        </button>
        {/* DECOR */}
        <div className="pointer-events-none absolute right-16 top-7 rotate-12 text-2xl opacity-20">
          ✦
        </div>
        <div className="pointer-events-none absolute bottom-10 left-5 text-2xl opacity-15">
          ୨୧
        </div>
        {/* TITLE */}
        <div className="pr-12 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm">
            <Camera
              size={20}
              className="text-[color:var(--pink-deep)]"
            />
          </div>
          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
            HANEULZ ARCHIVE
          </p>
          <h2 className="mt-2 font-serif-display text-4xl">
            add your work
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
            Share a creation with the archive. Submissions are reviewed
            before appearing publicly.
          </p>
        </div>
        {/* FORM */}
        <form
          onSubmit={submit}
          className="relative mt-8 space-y-5"
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
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white/75 px-4 py-3.5 text-sm outline-none transition focus:border-[color:var(--pink-deep)] focus:bg-white"
            />
          </div>
          {/* IMAGE */}
          <div>
            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Artwork
            </label>
            <label className="group flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[color:var(--line)] bg-white/55 px-5 text-center transition hover:border-[color:var(--pink-deep)] hover:bg-white">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sm transition group-hover:scale-105">
                <Upload
                  size={19}
                  className="text-[color:var(--pink-deep)]"
                />
              </div>
              <span className="mt-3 text-sm">
                {image
                  ? image.name
                  : "Choose your fan art"}
              </span>
              <span className="mt-1 text-[10px] text-[color:var(--ink-soft)]">
                JPG · PNG · WEBP
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
              placeholder="Add a caption or a few words about your creation..."
              className="w-full resize-none rounded-2xl border border-[color:var(--line)] bg-white/75 px-4 py-3.5 text-sm outline-none transition focus:border-[color:var(--pink-deep)] focus:bg-white"
            />
          </div>
          {/* ORIGINAL LINK */}
          <div>
            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
              Original post link
              <span className="ml-1 font-normal normal-case tracking-normal opacity-60">
                optional
              </span>
            </label>
            <input
              type="url"
              value={originalUrl}
              onChange={(event) =>
                setOriginalUrl(event.target.value)
              }
              placeholder="https://..."
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white/75 px-4 py-3.5 text-sm outline-none transition focus:border-[color:var(--pink-deep)] focus:bg-white"
            />
          </div>
          {/* SUBMIT */}
          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--pink-deep)] disabled:cursor-not-allowed disabled:opacity-50"
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
            You can close this window anytime before submitting.
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
