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
  Palette,
  Camera,
  ArrowUpRight,
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";

const POSTS_PER_PAGE = 6;

export default function Gallery() {
  const [section, setSection] = useState("gallery");

  return (
    <section className="relative min-h-screen overflow-hidden pb-24">

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[color:var(--pink)]/20 blur-3xl" />

        <div className="absolute -right-24 top-[28rem] h-80 w-80 rounded-full bg-[color:var(--blue)]/20 blur-3xl" />

        <div className="absolute left-[35%] top-[45rem] h-64 w-64 rounded-full bg-purple-200/20 blur-3xl" />

        <div className="absolute left-[5%] top-32 rotate-[-12deg] text-3xl text-[color:var(--pink-deep)] opacity-40">
          ✦
        </div>

        <div className="absolute right-[7%] top-40 rotate-12 text-4xl text-[color:var(--blue)] opacity-40">
          ♡
        </div>

        <div className="absolute left-[12%] top-[38%] text-2xl opacity-25">
          ୨୧
        </div>

        <div className="absolute right-[10%] top-[62%] rotate-[-8deg] text-3xl opacity-25">
          ✧
        </div>

        <div className="absolute left-[5%] bottom-40 text-xl opacity-20">
          ☁
        </div>

        <div className="absolute right-[18%] bottom-24 rotate-12 text-2xl opacity-20">
          ♡
        </div>

      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <div className="relative mx-auto max-w-5xl px-4 pt-4 text-center md:pt-8">

        <div className="mx-auto mb-6 flex items-center justify-center gap-4">

          <span className="h-px w-12 bg-[color:var(--line)] md:w-20" />

          <span className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white shadow-[0_8px_25px_rgba(70,50,60,0.08)]">
            <Sparkles
              size={15}
              className="text-[color:var(--pink-deep)]"
            />
          </span>

          <span className="h-px w-12 bg-[color:var(--line)] md:w-20" />

        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">

          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--pink-deep)]" />

          <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            06 · visual archive
          </p>

          <span className="text-[10px]">
            ♡
          </span>

        </div>

        <h2 className="mt-7 font-serif-display text-5xl font-medium leading-[0.88] tracking-tight md:text-8xl">

          little

          <br />

          <span className="italic text-[color:var(--pink-deep)]">
            HANEULZ
          </span>

          <br />

          <span className="text-3xl md:text-5xl">
            archive
          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
          A little corner for fan creations, screenshots,
          illustrations, and HANEULZ moments worth keeping.
        </p>

      </div>

      {/* =========================================================
          SECTION SWITCHER
      ========================================================= */}

      <div className="relative mx-auto mt-12 max-w-2xl px-4">

        <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/75 p-2 shadow-[0_18px_55px_rgba(70,50,60,0.09)] backdrop-blur-md">

          <div className="grid grid-cols-2 gap-2">

            {/* GALLERY TAB */}

            <button
              type="button"
              onClick={() => setSection("gallery")}
              className={`group relative overflow-hidden rounded-[1.5rem] px-4 py-4 text-left transition duration-300 ${
                section === "gallery"
                  ? "bg-[color:var(--ink)] text-white shadow-lg"
                  : "text-[color:var(--ink-soft)] hover:bg-[color:var(--pink)]/15"
              }`}
            >

              <div className="relative z-10 flex items-center gap-3">

                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                    section === "gallery"
                      ? "bg-white/15"
                      : "bg-[color:var(--pink)]/30"
                  }`}
                >
                  <Camera size={16} />
                </div>

                <div className="min-w-0">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    HANEULZ Gallery
                  </p>

                  <p
                    className={`mt-1 text-[10px] ${
                      section === "gallery"
                        ? "text-white/60"
                        : "text-[color:var(--ink-soft)]"
                    }`}
                  >
                    curated visuals
                  </p>

                </div>

              </div>

              {section === "gallery" && (
                <>
                  <span className="absolute -right-2 -top-4 text-4xl opacity-15">
                    ✦
                  </span>

                  <span className="absolute bottom-0 right-5 text-lg opacity-20">
                    ♡
                  </span>
                </>
              )}

            </button>

            {/* ARCHIVE TAB */}

            <button
              type="button"
              onClick={() => setSection("archive")}
              className={`group relative overflow-hidden rounded-[1.5rem] px-4 py-4 text-left transition duration-300 ${
                section === "archive"
                  ? "bg-[color:var(--ink)] text-white shadow-lg"
                  : "text-[color:var(--ink-soft)] hover:bg-[color:var(--blue)]/15"
              }`}
            >

              <div className="relative z-10 flex items-center gap-3">

                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                    section === "archive"
                      ? "bg-white/15"
                      : "bg-[color:var(--blue)]/30"
                  }`}
                >
                  <Palette size={16} />
                </div>

                <div className="min-w-0">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    HANEULZ Archive
                  </p>

                  <p
                    className={`mt-1 text-[10px] ${
                      section === "archive"
                        ? "text-white/60"
                        : "text-[color:var(--ink-soft)]"
                    }`}
                  >
                    fan creations
                  </p>

                </div>

              </div>

              {section === "archive" && (
                <>
                  <span className="absolute -left-2 -top-4 text-4xl opacity-15">
                    ♡
                  </span>

                  <span className="absolute bottom-0 right-5 text-lg opacity-20">
                    ✧
                  </span>
                </>
              )}

            </button>

          </div>

        </div>

        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
          {section === "gallery"
            ? "browse the little moments"
            : "share something with the community"}
        </p>

      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mt-12 px-4 md:mt-16">

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

    } catch (err) {

      console.error("Gallery error:", err);

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
    <div className="mx-auto max-w-6xl">

      {/* GALLERY INTRO */}

      <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">

        <div>

          <div className="mb-3 flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--pink-deep)]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              selected visuals
            </p>

          </div>

          <h3 className="font-serif-display text-4xl md:text-6xl">
            little snapshots
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-6 text-[color:var(--ink-soft)]">
            A collection of moments gathered from around the
            HANEULZ community.
          </p>

        </div>

        <div className="rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 md:max-w-xs md:text-right">

          <p className="font-serif-display text-base italic text-[color:var(--ink-soft)]">
            tap any piece to visit its original source
          </p>

        </div>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">

          {[1, 2, 3, 4, 5, 6].map((item) => (

            <div
              key={item}
              className="aspect-square animate-pulse rounded-[2rem] border border-[color:var(--line)] bg-white/70"
            />

          ))}

        </div>

      )}

      {/* ERROR */}

      {!loading && error && (

        <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/75 px-6 py-20 text-center shadow-[0_15px_45px_rgba(70,50,60,0.07)]">

          <div className="absolute left-8 top-8 text-3xl opacity-20">
            ✦
          </div>

          <div className="absolute right-10 top-10 text-3xl opacity-20">
            ♡
          </div>

          <ImageIcon
            className="mx-auto text-[color:var(--pink-deep)]"
            size={34}
            strokeWidth={1.2}
          />

          <h3 className="mt-5 font-serif-display text-3xl">
            the gallery is resting
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            We couldn't connect to the gallery right now.
          </p>

          <button
            type="button"
            onClick={loadGallery}
            className="mt-6 rounded-full bg-[color:var(--ink)] px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--pink-deep)]"
          >
            Try again
          </button>

        </div>

      )}

      {/* EMPTY */}

      {!loading && !error && posts.length === 0 && (

        <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/75 px-6 py-24 text-center shadow-[0_15px_45px_rgba(70,50,60,0.06)]">

          <div className="absolute left-8 top-8 rotate-[-12deg] text-3xl opacity-20">
            ✦
          </div>

          <div className="absolute right-10 top-12 rotate-12 text-3xl opacity-20">
            ♡
          </div>

          <div className="absolute bottom-8 left-1/4 text-2xl opacity-15">
            ୨୧
          </div>

          <ImageIcon
            className="mx-auto text-[color:var(--ink-soft)]"
            size={34}
            strokeWidth={1.2}
          />

          <h3 className="mt-6 font-serif-display text-3xl">
            the collection is quiet
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
            There aren't any gallery pieces here yet.
            Check back when the next set of visuals arrives.
          </p>

        </div>

      )}

      {/* GALLERY GRID */}

      {!loading && !error && posts.length > 0 && (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">

          {posts.map((post, index) => (

            <a
              key={post.id}
              href={
                post.original_url &&
                /^https?:\/\//i.test(post.original_url)
                  ? post.original_url
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (
                  !post.original_url ||
                  !/^https?:\/\//i.test(post.original_url)
                ) {
                  event.preventDefault();
                }
              }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-1.5 shadow-[0_12px_40px_rgba(70,50,60,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-xl md:rounded-[2rem] ${
                index % 5 === 0
                  ? "md:rotate-[-1deg]"
                  : ""
              } ${
                index % 5 === 2
                  ? "md:rotate-[1deg]"
                  : ""
              }`}
            >

              <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-[color:var(--cream)] md:rounded-[1.6rem]">

                <img
                  src={post.image_url}
                  alt={
                    post.caption ||
                    "HANEULZ Gallery"
                  }
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* COLOR OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,25,35,0.75)] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* NUMBER */}

                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.15em] text-black opacity-0 shadow-sm backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* SOURCE */}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition duration-300 group-hover:opacity-100">

                  <span className="rounded-full bg-white/95 px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.15em] text-black backdrop-blur-md">
                    {post.original_url
                      ? "view original"
                      : "gallery piece"}
                  </span>

                  {post.original_url && (
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black shadow-lg">
                      <ArrowUpRight size={14} />
                    </span>
                  )}

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

      const response = await api.get("/archive", {
        params: {
          page,
          limit: POSTS_PER_PAGE,
        },
      });

      setPosts(
        response.data?.posts || []
      );

      setTotalPages(
        response.data?.total_pages || 1
      );

    } catch (error) {

      console.error("Archive error:", error);

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

    if (page === 1) {
      loadArchive();
    } else {
      setPage(1);
    }

  }

  return (
    <div className="mx-auto max-w-3xl">

      {/* =======================================================
          ARCHIVE HERO
      ======================================================= */}

      <div className="relative mb-10 overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-br from-[color:var(--pink)]/35 via-white/80 to-[color:var(--blue)]/30 p-7 shadow-[0_18px_55px_rgba(70,50,60,0.08)] md:p-10">

        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/70" />

        <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border border-white/70" />

        <div className="absolute bottom-6 right-8 rotate-12 text-3xl opacity-30">
          ♡
        </div>

        <div className="absolute left-8 bottom-7 rotate-[-8deg] text-xl opacity-20">
          ✦
        </div>

        <div className="relative">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">

            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--pink-deep)]" />

            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
              community archive
            </p>

          </div>

          <h3 className="font-serif-display text-4xl md:text-6xl">

            HANEULZ

            <br />

            <span className="italic text-[color:var(--pink-deep)]">
              Archive
            </span>

          </h3>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[color:var(--ink-soft)]">
            A little home for fan art and creative pieces
            submitted by the HANEULZ community.
          </p>

          <button
            type="button"
            onClick={() => setShowSubmit(true)}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[color:var(--pink-deep)]"
          >
            <Upload size={13} />
            Add your work
          </button>

        </div>

      </div>

      {/* =======================================================
          FEED
      ======================================================= */}

      {loading && (

        <div className="space-y-7">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="h-[430px] animate-pulse rounded-[2.5rem] border border-[color:var(--line)] bg-white/70"
            />

          ))}

        </div>

      )}

      {/* ERROR */}

      {!loading && archiveError && (

        <div className="rounded-[2.5rem] border border-[color:var(--line)] bg-white/80 px-6 py-20 text-center shadow-sm">

          <Sparkles
            className="mx-auto text-[color:var(--pink-deep)]"
            size={34}
            strokeWidth={1.2}
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
            className="mt-6 rounded-full bg-[color:var(--ink)] px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[color:var(--pink-deep)]"
          >
            Try again
          </button>

        </div>

      )}

      {/* EMPTY */}

      {!loading &&
        !archiveError &&
        posts.length === 0 && (

          <div className="relative overflow-hidden rounded-[2.5rem] border border-dashed border-[color:var(--line)] bg-white/75 px-6 py-24 text-center">

            <div className="absolute left-8 top-8 text-3xl opacity-20">
              ✦
            </div>

            <div className="absolute right-8 top-10 text-3xl opacity-20">
              ♡
            </div>

            <Sparkles
              className="mx-auto text-[color:var(--pink-deep)]"
              size={34}
              strokeWidth={1.2}
            />

            <h3 className="mt-6 font-serif-display text-3xl">
              nothing filed yet
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
              Be the first person to leave something
              in the HANEULZ archive.
            </p>

            <button
              type="button"
              onClick={() => setShowSubmit(true)}
              className="mt-6 rounded-full bg-[color:var(--pink-deep)] px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Submit your art
            </button>

          </div>

        )}

      {/* POSTS */}

      {!loading &&
        !archiveError &&
        posts.length > 0 && (

          <div className="space-y-8">

            {posts.map((post) => (

              <ArchivePost
                key={post.id}
                post={post}
              />

            ))}

          </div>

        )}

      {/* PAGINATION */}

      {!archiveError && totalPages > 1 && (

        <div className="mt-12 flex items-center justify-center gap-3">

          <button
            type="button"
            disabled={page <= 1}
            onClick={() =>
              setPage((value) => value - 1)
            }
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="rounded-full border border-[color:var(--line)] bg-white/80 px-6 py-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            {page} / {totalPages}
          </span>

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() =>
              setPage((value) => value + 1)
            }
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>

        </div>

      )}

      {/* SUBMISSION */}

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

    if (liked) return;

    try {

      const response = await api.post(
        `/archive/${post.id}/like`
      );

      setLikes(response.data.likes);
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
          author_name:
            commentName.trim() || "Anonymous",
          text: commentText.trim(),
        }
      );

      setCommentName("");
      setCommentText("");

      toast.success(
        "Comment sent for approval ♡"
      );

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
    <article className="overflow-hidden rounded-[2.5rem] border border-white bg-white/90 shadow-[0_18px_55px_rgba(70,50,60,0.08)]">

      {/* HEADER */}

      <div className="flex items-center justify-between px-5 py-5 md:px-7">

        <div className="flex min-w-0 items-center gap-3">

          <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)] font-serif-display text-lg shadow-sm">

            {post.author_name
              ?.charAt(0)
              ?.toUpperCase() || "♡"}

            <span className="absolute -bottom-1 -right-1 text-[10px]">
              ✦
            </span>

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
            rel="noopener noreferrer"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] transition hover:bg-[color:var(--pink)]/20 hover:text-[color:var(--ink)]"
            aria-label="Open original post"
          >
            <ExternalLink size={14} />
          </a>
        )}

      </div>

      {/* IMAGE */}

      <div className="relative bg-[color:var(--cream)]">

        <div className="pointer-events-none absolute left-5 top-5 z-10 h-5 w-16 rotate-[-5deg] bg-white/30 backdrop-blur-sm" />

        <img
          src={post.image_url}
          alt={
            post.caption ||
            "HANEULZ fan art"
          }
          className="mx-auto max-h-[750px] w-full object-contain"
        />

      </div>

      {/* CONTENT */}

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
              size={20}
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

          <p className="mt-5 whitespace-pre-wrap text-sm leading-7 text-[color:var(--ink)]">

            <span className="font-semibold">
              {post.author_name}
            </span>{" "}

            {post.caption}

          </p>

        )}

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
                  setCommentName(
                    event.target.value
                  )
                }
                placeholder="Your name"
                className="w-full rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
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
                  className="min-w-0 flex-1 rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
                />

                <button
                  type="submit"
                  disabled={commentLoading}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--ink)] text-white transition hover:bg-[color:var(--pink-deep)] disabled:opacity-50"
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
   ARCHIVE SUBMISSION MODAL
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

  /* IMAGE PREVIEW */

  useEffect(() => {

    if (!image) {

      setPreview("");

      return;

    }

    const objectUrl =
      URL.createObjectURL(image);

    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };

  }, [image]);

  /* ESCAPE */

  useEffect(() => {

    function handleEscape(event) {

      if (
        event.key === "Escape" &&
        !submitting
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

  }, [onClose, submitting]);

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

    if (!file) return;

    if (
      !file.type.startsWith("image/")
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
      className="fixed inset-0 z-[200] flex items-end justify-center bg-[rgba(35,25,35,0.58)] p-0 backdrop-blur-md sm:items-center sm:p-5"
      onMouseDown={(event) => {

        if (
          event.target ===
            event.currentTarget &&
          !submitting
        ) {
          onClose();
        }

      }}
    >

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="archive-submission-title"
        className="relative max-h-[94vh] w-full max-w-xl overflow-y-auto rounded-t-[2rem] border border-white/80 bg-[color:var(--cream)] shadow-2xl sm:rounded-[2rem]"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >

        {/* COLOR DECORATIONS */}

        <div className="pointer-events-none absolute -right-16 top-16 h-40 w-40 rounded-full bg-[color:var(--pink)]/30 blur-2xl" />

        <div className="pointer-events-none absolute -left-16 bottom-20 h-36 w-36 rounded-full bg-[color:var(--blue)]/25 blur-2xl" />

        <div className="pointer-events-none absolute right-10 top-24 rotate-12 text-3xl opacity-20">
          ♡
        </div>

        <div className="pointer-events-none absolute left-7 top-36 rotate-[-10deg] text-2xl opacity-20">
          ✦
        </div>

        {/* TOP BAR */}

        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[color:var(--line)] bg-[color:var(--cream)] px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm">

              <Sparkles
                size={16}
                className="text-[color:var(--pink-deep)]"
              />

            </div>

            <div>

              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
                HANEULZ ARCHIVE
              </p>

              <p className="font-serif-display text-lg">
                submit a piece
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close submission form"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--ink)] shadow-sm transition hover:bg-[color:var(--ink)] hover:text-white"
          >
            <X size={18} />
          </button>

        </div>

        {/* CONTENT */}

        <div className="relative p-5 sm:p-7">

          <div className="mb-7">

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--pink)]/30 px-3 py-1.5">

              <span className="text-xs">
                ♡
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[color:var(--pink-deep)]">
                made by you
              </span>

            </div>

            <h2
              id="archive-submission-title"
              className="font-serif-display text-3xl sm:text-4xl"
            >
              add a little something
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
              Share your fan art with HANEULZ.
              We'll review it before it appears
              in the public archive.
            </p>

          </div>

          <form
            onSubmit={submit}
            className="space-y-5"
          >

            {/* NAME */}

            <div>

              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
                Your name / username
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
                className="w-full rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition placeholder:text-[color:var(--ink-soft)] focus:border-[color:var(--pink-deep)] focus:ring-2 focus:ring-[color:var(--pink)]/30"
              />

            </div>

            {/* IMAGE */}

            <div>

              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
                Your artwork
              </label>

              <label
                htmlFor="archive-image-upload"
                className={`group relative block cursor-pointer overflow-hidden rounded-2xl border border-dashed border-[color:var(--line)] bg-white transition hover:border-[color:var(--pink-deep)] ${
                  preview
                    ? "p-2"
                    : "p-6"
                }`}
              >

                {preview ? (

                  <div className="relative overflow-hidden rounded-xl bg-[color:var(--cream)]">

                    <img
                      src={preview}
                      alt="Artwork preview"
                      className="max-h-72 w-full object-contain"
                    />

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100">

                      <div className="p-4 text-white">

                        <p className="text-xs font-semibold">
                          {image?.name}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.15em] opacity-80">
                          Tap to choose another
                        </p>

                      </div>

                    </div>

                  </div>

                ) : (

                  <div className="flex min-h-36 flex-col items-center justify-center text-center">

                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--pink)]/35">

                      <Upload
                        size={20}
                        className="text-[color:var(--pink-deep)]"
                      />

                    </div>

                    <p className="mt-4 text-sm font-medium">
                      Choose your fan art
                    </p>

                    <p className="mt-1 text-[10px] text-[color:var(--ink-soft)]">
                      JPG · PNG · WEBP
                    </p>

                  </div>

                )}

                <input
                  id="archive-image-upload"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={handleFileChange}
                />

              </label>

            </div>

            {/* CAPTION */}

            <div>

              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">
                Tell us about it
                <span className="ml-1 font-normal normal-case tracking-normal text-[color:var(--ink-soft)]">
                  optional
                </span>
              </label>

              <textarea
                value={caption}
                onChange={(event) =>
                  setCaption(
                    event.target.value
                  )
                }
                rows={3}
                placeholder="Add a little caption..."
                className="w-full resize-none rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3.5 text-sm leading-6 shadow-sm outline-none transition placeholder:text-[color:var(--ink-soft)] focus:border-[color:var(--pink-deep)] focus:ring-2 focus:ring-[color:var(--pink)]/30"
              />

            </div>

            {/* ORIGINAL SOURCE */}

            <div>

              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em]">

                Original post / source

                <span className="ml-1 font-normal normal-case tracking-normal text-[color:var(--ink-soft)]">
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
                className="w-full rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition placeholder:text-[color:var(--ink-soft)] focus:border-[color:var(--pink-deep)] focus:ring-2 focus:ring-[color:var(--pink)]/30"
              />

              <p className="mt-2 text-[9px] leading-4 text-[color:var(--ink-soft)]">
                You can paste a link from X, Instagram,
                TikTok, Tumblr, YouTube, or any other website.
              </p>

            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--pink-deep)] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_10px_30px_rgba(180,90,120,0.25)] transition hover:-translate-y-0.5 hover:bg-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-50"
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

            <p className="text-center text-[9px] leading-5 text-[color:var(--ink-soft)]">
              ♡ Your artwork will be reviewed before
              appearing in the public archive.
            </p>

          </form>

        </div>

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
