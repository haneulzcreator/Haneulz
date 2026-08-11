import React, { useCallback, useEffect, useState } from "react";
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
  ArrowUpRight,
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";

const POSTS_PER_PAGE = 6;

export default function Gallery() {
  const [section, setSection] = useState("gallery");

  return (
    <section className="relative min-h-screen overflow-hidden pb-24">

      {/* BACKGROUND DECOR */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[color:var(--pink)]/20 blur-3xl" />
        <div className="absolute -right-24 top-[45%] h-80 w-80 rounded-full bg-[color:var(--blue)]/20 blur-3xl" />

        <span className="absolute left-[5%] top-24 rotate-[-14deg] font-serif-display text-4xl text-[color:var(--pink-deep)] opacity-40">
          ✦
        </span>

        <span className="absolute right-[8%] top-44 rotate-12 text-5xl text-[color:var(--blue)] opacity-30">
          ♡
        </span>

        <span className="absolute left-[8%] top-[52%] text-3xl opacity-20">
          ୨୧
        </span>

        <span className="absolute right-[9%] top-[72%] rotate-[-12deg] text-4xl opacity-20">
          ✧
        </span>

        <span className="absolute left-[12%] bottom-20 text-2xl opacity-20">
          ☁
        </span>
      </div>

      {/* HERO */}

      <div className="relative mx-auto max-w-6xl px-5 pt-8 md:px-8 md:pt-14">

        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">

          <div className="relative">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[color:var(--ink)]/30" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
                06 · visual archive
              </span>

              <Sparkles
                size={12}
                className="text-[color:var(--pink-deep)]"
              />
            </div>

            <h1 className="font-serif-display text-[4.5rem] font-medium leading-[0.78] tracking-[-0.055em] sm:text-[6rem] md:text-[8.5rem]">
              little
              <br />

              <span className="ml-[8%] italic text-[color:var(--pink-deep)]">
                HANEULZ
              </span>

              <br />

              <span className="ml-[24%] text-[2.2rem] tracking-[-0.03em] text-[color:var(--ink)] sm:text-[3rem] md:text-[4.2rem]">
                archive
              </span>
            </h1>

          </div>

          {/* HERO NOTE */}

          <div className="relative max-w-xs md:pb-3">

            <div className="absolute -left-4 -top-5 text-2xl opacity-20">
              ✦
            </div>

            <div className="rotate-[2deg] border border-[color:var(--line)] bg-white/65 p-5 shadow-[5px_8px_25px_rgba(70,50,60,0.08)] backdrop-blur-sm">

              <p className="font-serif-display text-lg leading-6">
                little things worth keeping,
                <br />
                one memory at a time.
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-[color:var(--line)] pt-3">

                <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
                  HANEULZ COMMUNITY
                </span>

                <span className="text-sm text-[color:var(--pink-deep)]">
                  ♡
                </span>

              </div>

            </div>

          </div>

        </div>

        <p className="mt-9 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:ml-[8%]">
          A visual corner for fan creations, screenshots, illustrations,
          and tiny HANEULZ moments worth saving.
        </p>

      </div>

      {/* TABS */}

      <div className="relative mx-auto mt-14 max-w-6xl px-5 md:px-8">

        <div className="flex items-center justify-between border-b border-[color:var(--line)]">

          <div className="flex">

            <button
              type="button"
              onClick={() => setSection("gallery")}
              className={`relative px-1 pb-4 pr-7 text-[9px] font-semibold uppercase tracking-[0.25em] transition ${
                section === "gallery"
                  ? "text-[color:var(--ink)]"
                  : "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]"
              }`}
            >
              Gallery

              {section === "gallery" && (
                <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[color:var(--pink-deep)]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setSection("archive")}
              className={`relative px-1 pb-4 text-[9px] font-semibold uppercase tracking-[0.25em] transition ${
                section === "archive"
                  ? "text-[color:var(--ink)]"
                  : "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]"
              }`}
            >
              Community Archive

              {section === "archive" && (
                <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[color:var(--pink-deep)]" />
              )}
            </button>

          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)] sm:block">
            keep · create · remember
          </span>

        </div>

      </div>

      {/* CONTENT */}

      <div className="relative mx-auto mt-14 max-w-6xl px-5 md:px-8">

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
  const [error, setError] = useState(false);

  const loadGallery = useCallback(async () => {

    try {

      setLoading(true);
      setError(false);

      const response = await api.get("/gallery");

      setPosts(
        Array.isArray(response.data)
          ? response.data
          : []
      );

    } catch (error) {

      console.error("Gallery error:", error);

      setPosts([]);
      setError(true);

    } finally {

      setLoading(false);

    }

  }, []);

  useEffect(() => {
    loadGallery();
  }, [loadGallery]);

  return (
    <div>

      {/* SECTION INTRO */}

      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>

          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--pink-deep)]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              selected visuals
            </span>
          </div>

          <h2 className="font-serif-display text-4xl md:text-6xl">
            little snapshots
          </h2>

        </div>

        <p className="max-w-xs text-right font-serif-display text-lg italic leading-6 text-[color:var(--ink-soft)]">
          a collection of moments
          <br />
          saved from the timeline.
        </p>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7">

          {[1, 2, 3, 4, 5, 6].map((item) => (

            <div
              key={item}
              className={`relative aspect-[0.92] animate-pulse bg-white/55 ${
                item % 3 === 0
                  ? "rotate-[1.5deg]"
                  : item % 3 === 1
                    ? "rotate-[-1deg]"
                    : ""
              }`}
            >
              <div className="absolute inset-2 border border-[color:var(--line)]" />
            </div>

          ))}

        </div>

      )}

      {/* ERROR */}

      {!loading && error && (

        <div className="mx-auto max-w-xl border border-[color:var(--line)] bg-white/60 px-7 py-20 text-center shadow-[8px_12px_35px_rgba(70,50,60,0.06)]">

          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[color:var(--line)] bg-white">
            <ImageIcon
              size={24}
              strokeWidth={1.2}
              className="text-[color:var(--pink-deep)]"
            />
          </div>

          <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
            temporarily away
          </p>

          <h3 className="mt-2 font-serif-display text-3xl">
            the gallery is resting
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            We couldn't connect to the gallery right now.
          </p>

          <button
            type="button"
            onClick={loadGallery}
            className="mt-7 border border-[color:var(--ink)] bg-[color:var(--ink)] px-7 py-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[color:var(--pink-deep)] hover:border-[color:var(--pink-deep)]"
          >
            Try again
          </button>

        </div>

      )}

      {/* EMPTY */}

      {!loading && !error && posts.length === 0 && (

        <div className="relative overflow-hidden border border-[color:var(--line)] bg-white/50 px-7 py-24 text-center">

          <span className="absolute left-8 top-8 rotate-[-12deg] text-3xl opacity-20">
            ✦
          </span>

          <span className="absolute right-10 top-12 rotate-12 text-3xl opacity-20">
            ♡
          </span>

          <span className="absolute bottom-8 left-[20%] text-2xl opacity-15">
            ୨୧
          </span>

          <span className="absolute bottom-12 right-[20%] text-2xl opacity-15">
            ✧
          </span>

          <ImageIcon
            className="mx-auto text-[color:var(--ink-soft)]"
            size={30}
            strokeWidth={1.1}
          />

          <h3 className="mt-6 font-serif-display text-3xl">
            the collection is quiet
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            There aren't any gallery pieces here yet.
          </p>

        </div>

      )}

      {/* GALLERY */}

      {!loading && !error && posts.length > 0 && (

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14">

          {posts.map((post, index) => (

            <a
              key={post.id}
              href={post.original_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block ${
                index % 5 === 0
                  ? "md:translate-y-3"
                  : index % 5 === 2
                    ? "md:-translate-y-3"
                    : index % 5 === 4
                      ? "md:translate-y-6"
                      : ""
              }`}
            >

              {/* PAPER */}

              <div
                className={`relative bg-white p-2 pb-12 shadow-[5px_8px_28px_rgba(70,50,60,0.10)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[10px_18px_40px_rgba(70,50,60,0.16)] ${
                  index % 5 === 0
                    ? "rotate-[-1.5deg]"
                    : index % 5 === 1
                      ? "rotate-[1deg]"
                      : index % 5 === 2
                        ? "rotate-[-0.5deg]"
                        : index % 5 === 3
                          ? "rotate-[1.5deg]"
                          : "rotate-[-1deg]"
                }`}
              >

                {/* TAPE */}

                <div className="pointer-events-none absolute -top-3 left-1/2 z-20 h-7 w-20 -translate-x-1/2 rotate-[-2deg] bg-[color:var(--pink)]/55 shadow-sm" />

                {/* IMAGE */}

                <div className="relative aspect-square overflow-hidden bg-[color:var(--cream)]">

                  <img
                    src={post.image_url}
                    alt={
                      post.caption ||
                      "HANEULZ Gallery"
                    }
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={15} />
                  </div>

                </div>

                {/* CAPTION STRIP */}

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 pb-3">

                  <span className="max-w-[75%] truncate font-serif-display text-sm text-[color:var(--ink)]">
                    {post.caption || "a little HANEULZ moment ♡"}
                  </span>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
                    {String(index + 1).padStart(2, "0")}
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
  const [archiveError, setArchiveError] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  const loadArchive = useCallback(async () => {

    try {

      setLoading(true);
      setArchiveError(false);

      const response = await api.get(
        "/archive",
        {
          params: {
            page,
            limit: POSTS_PER_PAGE,
          },
        }
      );

      setPosts(
        response.data?.posts || []
      );

      setTotalPages(
        response.data?.total_pages || 1
      );

    } catch (error) {

      console.error(
        "Archive error:",
        error
      );

      setPosts([]);
      setTotalPages(1);
      setArchiveError(true);

    } finally {

      setLoading(false);

    }

  }, [page]);

  useEffect(() => {
    loadArchive();
  }, [loadArchive]);

  function handleSubmitted() {

    setShowSubmit(false);

    if (page !== 1) {
      setPage(1);
    } else {
      loadArchive();
    }

  }

  return (
    <div className="mx-auto max-w-4xl">

      {/* ARCHIVE HEADER */}

      <div className="relative mb-12 overflow-hidden border-y border-[color:var(--line)] py-9">

        <div className="absolute right-0 top-0 h-full w-1/3 bg-[color:var(--pink)]/10" />

        <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-4 flex items-center gap-2">

              <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                community archive
              </span>

              <span className="text-[color:var(--pink-deep)]">
                ✦
              </span>

            </div>

            <h2 className="font-serif-display text-5xl leading-[0.85] md:text-7xl">

              things
              <br />

              <span className="italic text-[color:var(--pink-deep)]">
                we made.
              </span>

            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
              A little corner for fan art and creative pieces
              made by the HANEULZ community.
            </p>

          </div>

          <button
            type="button"
            onClick={() => setShowSubmit(true)}
            className="group flex items-center justify-center gap-3 self-start border border-[color:var(--ink)] bg-[color:var(--ink)] px-6 py-4 text-[8px] font-semibold uppercase tracking-[0.25em] text-white transition hover:border-[color:var(--pink-deep)] hover:bg-[color:var(--pink-deep)] md:self-end"
          >

            <Upload size={13} />

            Add your work

            <ArrowUpRight
              size={13}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </button>

        </div>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="space-y-10">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="animate-pulse border border-[color:var(--line)] bg-white/50"
            >
              <div className="h-12 border-b border-[color:var(--line)]" />
              <div className="aspect-[4/3] bg-white/40" />
            </div>

          ))}

        </div>

      )}

      {/* ERROR */}

      {!loading && archiveError && (

        <div className="border border-[color:var(--line)] bg-white/60 px-7 py-20 text-center">

          <Sparkles
            className="mx-auto text-[color:var(--pink-deep)]"
            size={30}
            strokeWidth={1.1}
          />

          <h3 className="mt-5 font-serif-display text-3xl">
            the archive is resting
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            We couldn't connect to the archive right now.
          </p>

          <button
            type="button"
            onClick={loadArchive}
            className="mt-7 border border-[color:var(--ink)] bg-[color:var(--ink)] px-7 py-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[color:var(--pink-deep)] hover:border-[color:var(--pink-deep)]"
          >
            Try again
          </button>

        </div>

      )}

      {/* EMPTY */}

      {!loading && !archiveError && posts.length === 0 && (

        <div className="border border-dashed border-[color:var(--line)] bg-white/45 px-7 py-24 text-center">

          <div className="mx-auto grid h-14 w-14 place-items-center border border-[color:var(--line)] bg-white">
            <Sparkles
              size={23}
              className="text-[color:var(--pink-deep)]"
              strokeWidth={1.1}
            />
          </div>

          <h3 className="mt-6 font-serif-display text-3xl">
            nothing filed yet
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            Be the first little piece in the archive.
          </p>

        </div>

      )}

      {/* POSTS */}

      {!loading && !archiveError && posts.length > 0 && (

        <div className="space-y-12">

          {posts.map((post) => (
            <ArchivePost
              key={post.id}
              post={post}
            />
          ))}

        </div>

      )}

      {/* PAGINATION */}

      {!loading &&
        !archiveError &&
        totalPages > 1 && (

          <div className="mt-14 flex items-center justify-center gap-4">

            <button
              type="button"
              disabled={page <= 1}
              onClick={() =>
                setPage(
                  (value) => value - 1
                )
              }
              className="grid h-10 w-10 place-items-center border border-[color:var(--line)] bg-white transition hover:bg-[color:var(--ink)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={15} />
            </button>

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
              page {page} / {totalPages}
            </span>

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() =>
                setPage(
                  (value) => value + 1
                )
              }
              className="grid h-10 w-10 place-items-center border border-[color:var(--line)] bg-white transition hover:bg-[color:var(--ink)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={15} />
            </button>

          </div>

        )}

      {/* SUBMISSION */}

      {showSubmit && (
        <ArchiveSubmission
          onSubmitted={handleSubmitted}
          onClose={() =>
            setShowSubmit(false)
          }
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
  const [likes, setLikes] = useState(
    post.likes || 0
  );

  const [commentsOpen, setCommentsOpen] =
    useState(false);

  const [comments, setComments] =
    useState([]);

  const [commentName, setCommentName] =
    useState("");

  const [commentText, setCommentText] =
    useState("");

  const [commentLoading, setCommentLoading] =
    useState(false);

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

      setComments(
        response.data || []
      );

    } catch (error) {

      console.error(error);

    }

  }

  async function toggleComments() {

    const next =
      !commentsOpen;

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
          author_name:
            commentName.trim() ||
            "Anonymous",

          text:
            commentText.trim(),
        }
      );

      setCommentName("");
      setCommentText("");

      toast.success(
        "Comment sent for approval ♡"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Couldn't send your comment."
      );

    } finally {

      setCommentLoading(false);

    }

  }

  return (
    <article className="relative border border-[color:var(--line)] bg-white/75 shadow-[8px_12px_35px_rgba(70,50,60,0.07)] backdrop-blur-md">

      {/* HEADER */}

      <div className="flex items-center justify-between border-b border-[color:var(--line)] px-5 py-4 md:px-7">

        <div className="flex min-w-0 items-center gap-3">

          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--pink)]/40 font-serif-display text-lg">

            {post.author_name
              ?.charAt(0)
              ?.toUpperCase() ||
              "♡"}

          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold">
              {post.author_name ||
                "Anonymous"}
            </p>

            <p className="mt-0.5 text-[8px] uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
              {formatDate(
                post.created_at
              )}
            </p>

          </div>

        </div>

        {post.original_url && (

          <a
            href={post.original_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)] transition hover:text-[color:var(--pink-deep)]"
          >
            original

            <ExternalLink size={12} />

          </a>

        )}

      </div>

      {/* IMAGE */}

      <div className="relative bg-[color:var(--cream)]">

        <img
          src={post.image_url}
          alt={
            post.caption ||
            "HANEULZ fan art"
          }
          className="mx-auto max-h-[800px] w-full object-contain"
        />

      </div>

      {/* CONTENT */}

      <div className="px-5 py-6 md:px-7">

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
              size={19}
              strokeWidth={1.5}
              fill={
                liked
                  ? "currentColor"
                  : "none"
              }
            />

            <span>{likes}</span>

          </button>

          <button
            type="button"
            onClick={toggleComments}
            className="flex items-center gap-2 text-sm text-[color:var(--ink-soft)] transition hover:text-[color:var(--ink)]"
          >

            <MessageCircle
              size={19}
              strokeWidth={1.5}
            />

            <span>
              {comments.length > 0
                ? `${comments.length} comments`
                : "Comments"}
            </span>

          </button>

        </div>

        {post.caption && (

          <p className="mt-5 whitespace-pre-wrap text-sm leading-7">

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

                {comments.map(
                  (comment) => (

                    <div
                      key={comment.id}
                      className="border-l-2 border-[color:var(--pink)] bg-[color:var(--cream)] px-4 py-3"
                    >

                      <p className="text-xs font-semibold">
                        {comment.author_name}
                      </p>

                      <p className="mt-1 text-sm leading-5 text-[color:var(--ink-soft)]">
                        {comment.text}
                      </p>

                    </div>

                  )
                )}

              </div>

            )}

            <form
              onSubmit={submitComment}
              className="mt-5"
            >

              <input
                value={commentName}
                onChange={(event) =>
                  setCommentName(
                    event.target.value
                  )
                }
                placeholder="Your name"
                className="w-full border border-[color:var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
              />

              <div className="mt-2 flex gap-2">

                <input
                  value={commentText}
                  onChange={(event) =>
                    setCommentText(
                      event.target.value
                    )
                  }
                  placeholder="Write a little comment..."
                  className="min-w-0 flex-1 border border-[color:var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
                />

                <button
                  type="submit"
                  disabled={commentLoading}
                  className="grid h-11 w-11 shrink-0 place-items-center bg-[color:var(--ink)] text-white transition hover:bg-[color:var(--pink-deep)] disabled:opacity-50"
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

function ArchiveSubmission({
  onSubmitted,
  onClose,
}) {

  const [username, setUsername] =
    useState("");

  const [caption, setCaption] =
    useState("");

  const [originalUrl, setOriginalUrl] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  /* PREVIEW */

  useEffect(() => {

    if (!image) {

      setPreview("");

      return;

    }

    const objectUrl =
      URL.createObjectURL(image);

    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(
        objectUrl
      );
    };

  }, [image]);

  /* ESCAPE */

  useEffect(() => {

    function handleEscape(event) {

      if (
        event.key === "Escape"
      ) {
        onClose();
      }

    }

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [onClose]);

  async function submit(event) {

    event.preventDefault();

    if (!username.trim()) {

      toast.error(
        "Please enter your name."
      );

      return;

    }

    if (!image) {

      toast.error(
        "Please choose your artwork."
      );

      return;

    }

    try {

      setSubmitting(true);

      const formData =
        new FormData();

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

      console.error(
        "Archive submission error:",
        error
      );

      toast.error(
        error?.response?.data?.detail ||
        "Couldn't submit your artwork."
      );

    } finally {

      setSubmitting(false);

    }

  }

  function handleFileChange(event) {

    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    if (
      !file.type.startsWith(
        "image/"
      )
    ) {

      toast.error(
        "Please choose an image file."
      );

      return;

    }

    setImage(file);

  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-black/55 p-0 backdrop-blur-lg sm:items-center sm:p-5"
      onMouseDown={(event) => {

        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }

      }}
    >

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="archive-submission-title"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
        className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto bg-[color:var(--cream)] shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:max-h-[90vh]"
      >

        {/* DECORATIVE PAPER EDGE */}

        <div className="absolute left-0 right-0 top-0 h-1 bg-[color:var(--pink-deep)]" />

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close submission form"
          className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center border border-[color:var(--line)] bg-white text-[color:var(--ink)] shadow-sm transition hover:bg-[color:var(--ink)] hover:text-white sm:right-6 sm:top-6"
        >
          <X size={18} />
        </button>

        {/* HEADER */}

        <div className="relative border-b border-[color:var(--line)] px-6 pb-7 pt-8 sm:px-9">

          <div className="absolute left-8 top-4 rotate-[-8deg] text-2xl opacity-20">
            ✦
          </div>

          <div className="absolute right-20 top-9 rotate-12 text-2xl opacity-20">
            ♡
          </div>

          <div className="pr-12">

            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              HANEULZ ARCHIVE · COMMUNITY SUBMISSION
            </p>

            <h2
              id="archive-submission-title"
              className="mt-3 font-serif-display text-4xl leading-none sm:text-5xl"
            >
              add a little
              <br />
              <span className="italic text-[color:var(--pink-deep)]">
                something ♡
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[color:var(--ink-soft)]">
              Share something you made with the HANEULZ
              community. Every submission is reviewed before
              appearing in the archive.
            </p>

          </div>

        </div>

        {/* FORM */}

        <form
          onSubmit={submit}
          className="px-6 py-7 sm:px-9 sm:py-8"
        >

          <div className="grid gap-6 md:grid-cols-2">

            {/* NAME */}

            <div className="md:col-span-1">

              <label className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.25em]">
                Name / username
              </label>

              <input
                value={username}
                onChange={(event) =>
                  setUsername(
                    event.target.value
                  )
                }
                required
                placeholder="@yourusername"
                className="w-full border-b border-[color:var(--line)] bg-transparent px-1 py-3 text-sm outline-none transition placeholder:text-[color:var(--ink-soft)] focus:border-[color:var(--pink-deep)]"
              />

            </div>

            {/* ORIGINAL LINK */}

            <div className="md:col-span-1">

              <label className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.25em]">

                Original picture / post

                <span className="ml-2 font-normal normal-case tracking-normal text-[color:var(--ink-soft)]">
                  optional
                </span>

              </label>

              <input
                type="url"
                value={originalUrl}
                onChange={(event) =>
                  setOriginalUrl(
                    event.target.value
                  )
                }
                placeholder="https://..."
                className="w-full border-b border-[color:var(--line)] bg-transparent px-1 py-3 text-sm outline-none transition placeholder:text-[color:var(--ink-soft)] focus:border-[color:var(--pink-deep)]"
              />

              <p className="mt-2 text-[9px] leading-4 text-[color:var(--ink-soft)]">
                Any website is okay — X, Instagram,
                Tumblr, TikTok, or another site.
              </p>

            </div>

            {/* ARTWORK */}

            <div className="md:col-span-2">

              <label className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.25em]">
                Artwork
              </label>

              <label
                htmlFor="archive-image-upload"
                className={`group relative block cursor-pointer overflow-hidden border border-dashed border-[color:var(--line)] bg-white transition hover:border-[color:var(--pink-deep)] ${
                  preview
                    ? "p-2"
                    : "p-7"
                }`}
              >

                {preview ? (

                  <div className="relative bg-[color:var(--cream)]">

                    <img
                      src={preview}
                      alt="Artwork preview"
                      className="mx-auto max-h-80 w-full object-contain"
                    />

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100">

                      <div className="p-5 text-white">

                        <p className="text-xs font-medium">
                          {image?.name}
                        </p>

                        <p className="mt-1 text-[8px] uppercase tracking-[0.2em]">
                          Tap to change image
                        </p>

                      </div>

                    </div>

                  </div>

                ) : (

                  <div className="flex min-h-44 flex-col items-center justify-center text-center">

                    <div className="mb-4 grid h-14 w-14 place-items-center border border-[color:var(--line)] bg-[color:var(--pink)]/20">

                      <Upload
                        size={21}
                        strokeWidth={1.3}
                        className="text-[color:var(--pink-deep)]"
                      />

                    </div>

                    <p className="font-serif-display text-xl">
                      choose your artwork
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                      JPG · PNG · WEBP
                    </p>

                  </div>

                )}

                <input
                  id="archive-image-upload"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={
                    handleFileChange
                  }
                />

              </label>

            </div>

            {/* CAPTION */}

            <div className="md:col-span-2">

              <label className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.25em]">
                Caption
              </label>

              <textarea
                value={caption}
                onChange={(event) =>
                  setCaption(
                    event.target.value
                  )
                }
                rows={3}
                placeholder="Tell us a little about this piece..."
                className="w-full resize-none border border-[color:var(--line)] bg-white px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-[color:var(--ink-soft)] focus:border-[color:var(--pink-deep)]"
              />

            </div>

          </div>

          {/* SUBMIT AREA */}

          <div className="mt-7 flex flex-col gap-4 border-t border-[color:var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-xs text-[9px] leading-5 text-[color:var(--ink-soft)]">
              Your work will be reviewed before it
              appears publicly in the archive.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="flex shrink-0 items-center justify-center gap-2 bg-[color:var(--ink)] px-7 py-4 text-[8px] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[color:var(--pink-deep)] disabled:cursor-not-allowed disabled:opacity-50"
            >

              {submitting ? (

                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Submitting...
                </>

              ) : (

                <>
                  <Send size={13} />
                  Submit artwork
                </>

              )}

            </button>

          </div>

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

    return new Date(
      value
    ).toLocaleDateString(
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
