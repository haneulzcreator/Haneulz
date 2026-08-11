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
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";

const POSTS_PER_PAGE = 6;

/* =============================================================
   MAIN GALLERY PAGE
============================================================= */

export default function Gallery() {
  const [section, setSection] = useState("gallery");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fffafd] pb-24">
      {/* =====================================================
          BACKGROUND DECOR
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#ffd9e8] opacity-50 blur-3xl" />

        <div className="absolute -right-24 top-[32rem] h-72 w-72 rounded-full bg-[#dce9ff] opacity-60 blur-3xl" />

        <div className="absolute left-[35%] top-[55rem] h-64 w-64 rounded-full bg-[#eadcff] opacity-40 blur-3xl" />

        <div className="absolute right-[15%] top-28 rotate-12 text-4xl text-[#e79bb8]">
          ♡
        </div>

        <div className="absolute left-[7%] top-[32rem] rotate-[-12deg] text-3xl text-[#b7ccef]">
          ✦
        </div>

        <div className="absolute right-[8%] top-[62rem] text-3xl text-[#c9aee8]">
          ୨୧
        </div>

        <div className="absolute bottom-32 left-[8%] text-2xl text-[#e5a8c0]">
          ✧
        </div>
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0c8d8] bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#e58aaa]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8e6877]">
                06 · visual archive
              </span>
            </div>

            <h2 className="font-serif-display text-6xl font-medium leading-[0.82] tracking-tight text-[#30252b] md:text-8xl">
              little
              <br />

              <span className="italic text-[#df7fa5]">
                HANEULZ
              </span>

              <br />

              <span className="text-4xl text-[#6f6268] md:text-5xl">
                archive
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#766a70] md:text-base">
              A little corner for fan creations, screenshots,
              illustrations, and HANEULZ moments worth keeping.
            </p>
          </div>

          {/* MINI INFO CARD */}

          <div className="relative overflow-hidden rounded-[2rem] border border-[#ead5df] bg-white p-6 shadow-[0_18px_50px_rgba(100,65,80,0.08)]">
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-[#ffe2ed]" />

            <div className="relative">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#fff0f5]">
                <Sparkles
                  size={16}
                  className="text-[#dc82a5]"
                />
              </div>

              <p className="font-serif-display text-xl text-[#30252b]">
                made by HANEULZ
              </p>

              <p className="mt-2 text-xs leading-5 text-[#85777e]">
                Browse the collection or leave something
                of your own for the archive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SECTION NAV
      ===================================================== */}

      <div className="relative mx-auto mt-12 max-w-3xl px-5 md:mt-16">
        <div className="rounded-[2rem] border border-[#ead5df] bg-white p-2 shadow-[0_14px_45px_rgba(100,65,80,0.08)]">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setSection("gallery")}
              className={`relative overflow-hidden rounded-[1.5rem] px-4 py-4 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                section === "gallery"
                  ? "bg-[#df86a7] text-white shadow-lg shadow-[#df86a7]/20"
                  : "text-[#8a747d] hover:bg-[#fff2f6]"
              }`}
            >
              <span className="relative z-10">
                HANEULZ Gallery
              </span>

              {section === "gallery" && (
                <span className="absolute -right-1 -top-3 text-3xl opacity-30">
                  ✦
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setSection("archive")}
              className={`relative overflow-hidden rounded-[1.5rem] px-4 py-4 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                section === "archive"
                  ? "bg-[#8fa8d8] text-white shadow-lg shadow-[#8fa8d8]/20"
                  : "text-[#8a747d] hover:bg-[#f2f6ff]"
              }`}
            >
              <span className="relative z-10">
                HANEULZ Archive
              </span>

              {section === "archive" && (
                <span className="absolute -left-1 -top-3 text-3xl opacity-30">
                  ♡
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto mt-14 max-w-7xl px-5 md:px-8">
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
      {/* TITLE */}

      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#df86a7]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#927b84]">
              selected visuals
            </p>
          </div>

          <h3 className="font-serif-display text-4xl text-[#30252b] md:text-6xl">
            little snapshots
          </h3>
        </div>

        <div className="max-w-xs md:text-right">
          <p className="font-serif-display text-lg italic text-[#8d7981]">
            tiny pieces of HANEULZ
          </p>

          <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a28e96]">
            tap an image to visit its original post
          </p>
        </div>
      </div>

      {/* LOADING */}

      {loading && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square animate-pulse rounded-[2rem] border border-[#ecdbe2] bg-white"
            />
          ))}
        </div>
      )}

      {/* ERROR */}

      {!loading && error && (
        <div className="rounded-[2.5rem] border border-[#ecdbe2] bg-white px-6 py-20 text-center shadow-[0_15px_45px_rgba(100,65,80,0.06)]">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#fff0f5]">
            <ImageIcon
              size={28}
              strokeWidth={1.3}
              className="text-[#df86a7]"
            />
          </div>

          <h3 className="mt-6 font-serif-display text-3xl text-[#30252b]">
            the gallery is resting
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#81747a]">
            We couldn't connect to the gallery right now.
          </p>

          <button
            type="button"
            onClick={loadGallery}
            className="mt-6 rounded-full bg-[#30252b] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#df86a7]"
          >
            Try again
          </button>
        </div>
      )}

      {/* EMPTY */}

      {!loading && !error && posts.length === 0 && (
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ecdbe2] bg-white px-6 py-24 text-center shadow-[0_15px_45px_rgba(100,65,80,0.06)]">
          <div className="absolute left-8 top-8 rotate-[-12deg] text-3xl text-[#e4a4bc] opacity-40">
            ✦
          </div>

          <div className="absolute right-10 top-12 rotate-12 text-3xl text-[#aebfe2] opacity-50">
            ♡
          </div>

          <div className="absolute bottom-8 left-[20%] text-2xl text-[#c9aee4] opacity-40">
            ୨୧
          </div>

          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#fff0f5]">
            <ImageIcon
              size={28}
              strokeWidth={1.2}
              className="text-[#df86a7]"
            />
          </div>

          <h3 className="mt-6 font-serif-display text-3xl text-[#30252b]">
            the collection is quiet
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#81747a]">
            There aren't any gallery pieces here yet.
            Check back when the next set of visuals arrives.
          </p>
        </div>
      )}

      {/* GALLERY GRID */}

      {!loading && !error && posts.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7">
          {posts.map((post, index) => {
            const originalUrl =
              post.original_url?.trim();

            return (
              <a
                key={post.id}
                href={originalUrl || undefined}
                target={
                  originalUrl
                    ? "_blank"
                    : undefined
                }
                rel={
                  originalUrl
                    ? "noreferrer"
                    : undefined
                }
                onClick={(event) => {
                  if (!originalUrl) {
                    event.preventDefault();
                  }
                }}
                className={`group relative overflow-hidden rounded-[2rem] border border-[#ead8e0] bg-white p-2 shadow-[0_15px_45px_rgba(90,60,75,0.08)] transition-all duration-500 ${
                  originalUrl
                    ? "cursor-pointer hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(90,60,75,0.14)]"
                    : "cursor-default"
                } ${
                  index % 5 === 0
                    ? "md:rotate-[-1deg]"
                    : ""
                } ${
                  index % 5 === 2
                    ? "md:rotate-[1deg]"
                    : ""
                }`}
              >
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#fff3f7]">
                  <img
                    src={post.image_url}
                    alt={
                      post.caption ||
                      "HANEULZ Gallery"
                    }
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c2228]/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.15em] text-[#54454c] shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {originalUrl && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/95 px-3 py-2 text-[7px] font-bold uppercase tracking-[0.13em] text-[#30252b] shadow-sm">
                        open original
                      </span>

                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#30252b] shadow-lg">
                        <ExternalLink size={13} />
                      </span>
                    </div>
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
  const [archiveError, setArchiveError] =
    useState(false);
  const [showSubmit, setShowSubmit] =
    useState(false);

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

    if (page === 1) {
      loadArchive();
    } else {
      setPage(1);
    }
  }

  return (
    <div>
      {/* ARCHIVE INTRO */}

      <div className="relative mb-10 overflow-hidden rounded-[2.5rem] border border-[#ead7e5] bg-gradient-to-br from-[#fff2f7] via-[#fffafd] to-[#eef4ff] p-7 shadow-[0_18px_55px_rgba(75,95,135,0.09)] md:p-10">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f6d8e8]" />

        <div className="absolute right-8 top-10 text-4xl text-[#91a8d7] opacity-40">
          ♡
        </div>

        <div className="absolute bottom-5 right-24 text-2xl text-[#a995d1] opacity-40">
          ✦
        </div>

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ead7e5] bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#df86a7]" />

            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#806875]">
              community archive
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-serif-display text-5xl leading-[0.9] text-[#303542] md:text-6xl">
                HANEULZ
                <br />

                <span className="italic text-[#7795cf]">
                  Archive
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#6d7485]">
                A cozy collection of fan art and
                creative pieces submitted by the
                HANEULZ community.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setShowSubmit(true)
              }
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#df86a7] to-[#91a8d7] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Upload size={13} />
              Add your work
            </button>
          </div>
        </div>
      </div>

      {/* LOADING */}

      {loading && (
        <div className="space-y-7">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[430px] animate-pulse rounded-[2.5rem] border border-[#e5e8ef] bg-white"
            />
          ))}
        </div>
      )}

      {/* ERROR */}

      {!loading && archiveError && (
        <div className="rounded-[2.5rem] border border-[#e5e8ef] bg-white px-6 py-20 text-center shadow-sm">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f0f4ff]">
            <Sparkles
              size={28}
              strokeWidth={1.2}
              className="text-[#7795cf]"
            />
          </div>

          <h3 className="mt-5 font-serif-display text-3xl text-[#303542]">
            the archive is resting
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#777d8b]">
            We couldn't connect to the archive right now.
          </p>

          <button
            type="button"
            onClick={loadArchive}
            className="mt-6 rounded-full bg-[#303542] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#7795cf]"
          >
            Try again
          </button>
        </div>
      )}

      {/* EMPTY */}

      {!loading &&
        !archiveError &&
        posts.length === 0 && (
          <div className="rounded-[2.5rem] border border-dashed border-[#d9dfeb] bg-white px-6 py-24 text-center shadow-sm">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f0f4ff]">
              <Sparkles
                size={28}
                strokeWidth={1.2}
                className="text-[#7795cf]"
              />
            </div>

            <h3 className="mt-6 font-serif-display text-3xl text-[#303542]">
              nothing filed yet
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#777d8b]">
              The archive is waiting for its
              first little piece.
            </p>
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

      {!archiveError &&
        totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() =>
                setPage(
                  (value) => value - 1
                )
              }
              className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe3ec] bg-white text-[#5e6575] transition hover:bg-[#eef4ff] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="rounded-full border border-[#dfe3ec] bg-white px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#73798a]">
              {page} / {totalPages}
            </span>

            <button
              type="button"
              disabled={
                page >= totalPages
              }
              onClick={() =>
                setPage(
                  (value) => value + 1
                )
              }
              className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe3ec] bg-white text-[#5e6575] transition hover:bg-[#eef4ff] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

      {/* SUBMISSION MODAL */}

      {showSubmit && (
        <ArchiveSubmission
          onSubmitted={
            handleSubmitted
          }
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
  const [liked, setLiked] =
    useState(false);

  const [likes, setLikes] =
    useState(post.likes || 0);

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
            commentName.trim() ||
            "Anonymous",
          text: commentText.trim(),
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
    <article className="overflow-hidden rounded-[2.5rem] border border-[#eadde3] bg-white shadow-[0_18px_55px_rgba(90,60,75,0.08)]">
      {/* HEADER */}

      <div className="flex items-center justify-between px-5 py-5 md:px-7">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ffd7e7] to-[#dbe6ff] font-serif-display text-lg text-[#6e5d66] shadow-sm">
            {post.author_name
              ?.charAt(0)
              ?.toUpperCase() || "♡"}

            <span className="absolute -bottom-1 -right-1 text-[10px]">
              ✦
            </span>
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[#40363c]">
              {post.author_name ||
                "Anonymous"}
            </p>

            <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#9a8c94]">
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
            rel="noreferrer"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#eadde3] bg-[#fff8fb] text-[#8e7982] transition hover:bg-[#df86a7] hover:text-white"
            aria-label="Open original post"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* IMAGE */}

      <div className="relative bg-[#fff5f8]">
        <div className="pointer-events-none absolute left-5 top-5 z-10 h-5 w-16 rotate-[-5deg] bg-white/40 backdrop-blur-sm" />

        <img
          src={post.image_url}
          alt={
            post.caption ||
            "HANEULZ fan art"
          }
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
                ? "text-[#df86a7]"
                : "text-[#93828a] hover:text-[#df86a7]"
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
            onClick={
              toggleComments
            }
            className="flex items-center gap-2 text-sm text-[#93828a] transition hover:text-[#4c4147]"
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

        {/* CAPTION */}

        {post.caption && (
          <p className="mt-5 whitespace-pre-wrap text-sm leading-7 text-[#51464c]">
            <span className="font-bold">
              {post.author_name}
            </span>{" "}
            {post.caption}
          </p>
        )}

        {/* COMMENTS */}

        {commentsOpen && (
          <div className="mt-6 border-t border-[#eee1e7] pt-6">
            {comments.length > 0 && (
              <div className="space-y-3">
                {comments.map(
                  (comment) => (
                    <div
                      key={comment.id}
                      className="rounded-2xl border border-[#eadde3] bg-[#fff8fb] px-4 py-3"
                    >
                      <p className="text-xs font-bold text-[#4b4046]">
                        {
                          comment.author_name
                        }
                      </p>

                      <p className="mt-1 text-sm leading-5 text-[#81747a]">
                        {comment.text}
                      </p>
                    </div>
                  )
                )}
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
                className="w-full rounded-2xl border border-[#eadde3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#df86a7]"
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
                  className="min-w-0 flex-1 rounded-2xl border border-[#eadde3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#df86a7]"
                />

                <button
                  type="submit"
                  disabled={
                    commentLoading
                  }
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#40363c] text-white transition hover:bg-[#df86a7] disabled:opacity-50"
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
      URL.revokeObjectURL(
        objectUrl
      );
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
        error?.response?.data
          ?.detail ||
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
      className="fixed inset-0 z-[200] flex items-end justify-center bg-[#241d22]/80 p-0 sm:items-center sm:p-5"
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
        className="relative max-h-[94vh] w-full max-w-xl overflow-y-auto rounded-t-[2rem] border border-[#ead6df] bg-[#fffafd] shadow-[0_30px_100px_rgba(30,20,25,0.35)] sm:rounded-[2.25rem]"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        {/* TOP BAR */}

        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#eedee5] bg-[#fffafd] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#ffe5ef]">
              <Sparkles
                size={16}
                className="text-[#df86a7]"
              />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#a0808d]">
                HANEULZ ARCHIVE
              </p>

              <p className="font-serif-display text-lg text-[#342a30]">
                submit a piece
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close submission form"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#eadde3] bg-white text-[#66575f] shadow-sm transition hover:bg-[#df86a7] hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* CONTENT */}

        <div className="p-5 sm:p-7">
          <div className="mb-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fff0f5] px-3 py-1.5">
              <span className="text-xs">
                ♡
              </span>

              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#a06c80]">
                for the HANEULZ community
              </span>
            </div>

            <h2
              id="archive-submission-title"
              className="font-serif-display text-3xl leading-tight text-[#342a30] sm:text-4xl"
            >
              add a little something
              <span className="text-[#df86a7]">
                {" "}
                ♡
              </span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#7d6e75]">
              Share your fan art with
              HANEULZ. Submissions are
              reviewed before they appear
              in the public archive.
            </p>
          </div>

          <form
            onSubmit={submit}
            className="space-y-5"
          >
            {/* NAME */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#67565e]">
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
                className="w-full rounded-2xl border border-[#eadde3] bg-white px-4 py-3.5 text-sm text-[#40343b] shadow-sm outline-none transition placeholder:text-[#b5a4ad] focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
              />
            </div>

            {/* ARTWORK */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#67565e]">
                Artwork
              </label>

              <label
                htmlFor="archive-image-upload"
                className={`group relative block cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-[#e8cbd7] bg-[#fff4f8] transition hover:border-[#df86a7] hover:bg-[#ffedf4] ${
                  preview
                    ? "p-2"
                    : "p-6"
                }`}
              >
                {preview ? (
                  <div className="relative overflow-hidden rounded-xl bg-white">
                    <img
                      src={preview}
                      alt="Artwork preview"
                      className="max-h-72 w-full object-contain"
                    />

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#30242a]/70 to-transparent opacity-0 transition group-hover:opacity-100">
                      <div className="p-4 text-white">
                        <p className="max-w-[280px] truncate text-xs font-semibold">
                          {image?.name}
                        </p>

                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] opacity-80">
                          Tap to change image
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-36 flex-col items-center justify-center text-center">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ffe0ec]">
                      <Upload
                        size={20}
                        className="text-[#df86a7]"
                      />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#493b42]">
                      Choose your fan art
                    </p>

                    <p className="mt-1 text-[10px] text-[#9a858e]">
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

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#67565e]">
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
                className="w-full resize-none rounded-2xl border border-[#eadde3] bg-white px-4 py-3.5 text-sm leading-6 text-[#40343b] shadow-sm outline-none transition placeholder:text-[#b5a4ad] focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
              />
            </div>

            {/* ORIGINAL LINK */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#67565e]">
                Original post

                <span className="ml-1 font-normal normal-case tracking-normal text-[#aa969f]">
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
                placeholder="https://x.com/..."
                className="w-full rounded-2xl border border-[#eadde3] bg-white px-4 py-3.5 text-sm text-[#40343b] shadow-sm outline-none transition placeholder:text-[#b5a4ad] focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
              />
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#df86a7] to-[#91a8d7] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-white shadow-[0_10px_25px_rgba(223,134,167,0.25)] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
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

            <p className="text-center text-[10px] leading-5 text-[#96858d]">
              Your submission will be reviewed
              before appearing in the public
              archive ♡
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
