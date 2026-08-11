import React, { useCallback, useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Flag,
  Mail,
  X,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { api } from "../lib/api";
import { toast } from "sonner";

const LETTERS_PER_PAGE = 6;

export default function Letters() {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showComposer, setShowComposer] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadLetters = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await api.get("/letters", {
        params: {
          page,
          limit: LETTERS_PER_PAGE,
        },
      });

      setLetters(response.data?.letters || []);
      setTotalPages(response.data?.total_pages || 1);
    } catch (err) {
      console.error("Letters error:", err);

      setLetters([]);
      setTotalPages(1);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadLetters();
  }, [loadLetters]);

  function handleSubmitted() {
    setShowComposer(false);

    if (page === 1) {
      loadLetters();
    } else {
      setPage(1);
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff9fc] pb-24">

      {/* BACKGROUND DECOR */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#ffd9e8]/70 blur-3xl" />

        <div className="absolute -right-32 top-[30rem] h-96 w-96 rounded-full bg-[#dce8ff]/70 blur-3xl" />

        <div className="absolute left-[35%] top-[70rem] h-80 w-80 rounded-full bg-[#eadcff]/60 blur-3xl" />

        <span className="absolute right-[12%] top-32 rotate-12 text-4xl text-[#e2a1bc]">
          ♡
        </span>

        <span className="absolute left-[8%] top-[28rem] -rotate-12 text-3xl text-[#aebfe5]">
          ✦
        </span>

        <span className="absolute right-[7%] top-[65rem] text-3xl text-[#c8afe5]">
          ୨୧
        </span>
      </div>

      {/* HEADER */}
      <div className="relative mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">

        <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-end">

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0cadb] bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#df86a7]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8f707d]">
                07 · little letters
              </span>
            </div>

            <h1 className="font-serif-display text-6xl font-medium leading-[0.82] tracking-tight text-[#30252b] md:text-8xl">
              little
              <br />

              <span className="italic text-[#df86a7]">
                letters
              </span>

              <br />

              <span className="text-4xl text-[#71646b] md:text-5xl">
                from haneulz
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#776b72] md:text-base">
              A tiny corner where HANEULZ fans can leave words,
              thoughts, messages, memories, or simply something
              they want to share.
            </p>

          </div>

          {/* SIDE CARD */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#ead6df] bg-white p-6 shadow-[0_18px_50px_rgba(100,65,80,0.08)]">

            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#ffe0ec]" />

            <div className="relative">

              <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#fff0f5]">
                <Mail
                  size={18}
                  className="text-[#df86a7]"
                />
              </div>

              <p className="font-serif-display text-xl text-[#30252b]">
                leave a little note
              </p>

              <p className="mt-2 text-xs leading-5 text-[#85777e]">
                It doesn't have to be addressed to anyone.
                Just write whatever is in your heart.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* WRITE BUTTON */}
      <div className="relative mx-auto mt-12 max-w-6xl px-5 md:px-8">

        <div className="flex flex-col gap-5 rounded-[2rem] border border-[#ead6df] bg-white p-5 shadow-[0_15px_45px_rgba(100,65,80,0.07)] sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>
            <p className="font-serif-display text-2xl text-[#30252b]">
              have something to say? ♡
            </p>

            <p className="mt-1 text-xs text-[#8b7b83]">
              Write a letter, thought, message, or anything you
              would like to leave here.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowComposer(true)}
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#df86a7] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_10px_25px_rgba(223,134,167,0.2)] transition hover:-translate-y-1 hover:bg-[#d6759b]"
          >
            <Mail size={14} />
            Write a letter
          </button>

        </div>
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto mt-14 max-w-4xl px-5 md:px-8">

        <div className="mb-8">

          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#df86a7]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#927b84]">
              from the community
            </p>
          </div>

          <h2 className="font-serif-display text-4xl text-[#30252b] md:text-5xl">
            little words, big feelings
          </h2>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="space-y-7">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-72 animate-pulse rounded-[2rem] border border-[#ecdbe2] bg-white"
              />
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-[2.5rem] border border-[#ecdbe2] bg-white px-6 py-20 text-center shadow-[0_15px_45px_rgba(100,65,80,0.06)]">

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#fff0f5]">
              <Mail
                size={27}
                strokeWidth={1.3}
                className="text-[#df86a7]"
              />
            </div>

            <h3 className="mt-6 font-serif-display text-3xl text-[#30252b]">
              the letters are resting
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#81747a]">
              We couldn't connect to the letters right now.
            </p>

            <button
              type="button"
              onClick={loadLetters}
              className="mt-6 rounded-full bg-[#30252b] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#df86a7]"
            >
              Try again
            </button>

          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && letters.length === 0 && (
          <div className="relative overflow-hidden rounded-[2.5rem] border border-dashed border-[#e3d2dc] bg-white px-6 py-24 text-center shadow-sm">

            <span className="absolute left-10 top-10 rotate-[-12deg] text-3xl text-[#e3aac0]/60">
              ✦
            </span>

            <span className="absolute right-10 top-12 rotate-12 text-3xl text-[#b6c5e6]/70">
              ♡
            </span>

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#fff0f5]">
              <Mail
                size={28}
                strokeWidth={1.2}
                className="text-[#df86a7]"
              />
            </div>

            <h3 className="mt-6 font-serif-display text-3xl text-[#30252b]">
              the mailbox is empty
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#81747a]">
              Be the first person to leave a little letter here.
            </p>

            <button
              type="button"
              onClick={() => setShowComposer(true)}
              className="mt-6 rounded-full bg-[#df86a7] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#d6759b]"
            >
              Write the first letter
            </button>

          </div>
        )}

        {/* LETTERS */}
        {!loading && !error && letters.length > 0 && (
          <div className="space-y-7">

            {letters.map((letter) => (
              <LetterCard
                key={letter.id}
                letter={letter}
                onChanged={loadLetters}
              />
            ))}

          </div>
        )}

        {/* PAGINATION */}
        {!error && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3">

            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((value) => value - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#e0d9de] bg-white text-[#70636a] transition hover:bg-[#fff0f5] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronDown
                size={16}
                className="rotate-90"
              />
            </button>

            <span className="rounded-full border border-[#e0d9de] bg-white px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#777078]">
              {page} / {totalPages}
            </span>

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((value) => value + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#e0d9de] bg-white text-[#70636a] transition hover:bg-[#fff0f5] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronDown
                size={16}
                className="-rotate-90"
              />
            </button>

          </div>
        )}

      </div>

      {/* COMPOSER */}
      {showComposer && (
        <LetterComposer
          onClose={() => setShowComposer(false)}
          onSubmitted={handleSubmitted}
        />
      )}

    </section>
  );
}


/* ============================================================
   LETTER CARD
============================================================ */

function LetterCard({ letter }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(letter.likes || 0);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);

  const [reportOpen, setReportOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [reporting, setReporting] = useState(false);

  async function handleLike() {
    if (liked) return;

    try {
      const response = await api.post(
        `/letters/${letter.id}/like`
      );

      setLikes(response.data?.likes ?? likes + 1);
      setLiked(true);
    } catch (error) {
      console.error("Like error:", error);
      toast.error("Couldn't react right now.");
    }
  }

  async function loadComments() {
    try {
      const response = await api.get(
        `/letters/${letter.id}/comments`
      );

      setComments(response.data || []);
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

    if (!commentText.trim()) return;

    try {
      setCommentLoading(true);

      await api.post(
        `/letters/${letter.id}/comments`,
        {
          author_name:
            commentName.trim() || "Anonymous",
          text: commentText.trim(),
        }
      );

      setCommentName("");
      setCommentText("");

      toast.success(
        "Your comment was sent for approval ♡"
      );

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

  async function submitReport() {
    if (!reportReason.trim()) {
      toast.error(
        "Please tell us why you're reporting this."
      );
      return;
    }

    try {
      setReporting(true);

      await api.post(
        `/letters/${letter.id}/report`,
        {
          reason: reportReason.trim(),
        }
      );

      toast.success(
        "Thank you. The report has been sent to the admins."
      );

      setReportReason("");
      setReportOpen(false);

    } catch (error) {
      console.error("Report error:", error);

      toast.error(
        error?.response?.data?.detail ||
          "Couldn't send the report."
      );

    } finally {
      setReporting(false);
    }
  }

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#ead9e1] bg-white shadow-[0_15px_45px_rgba(90,60,75,0.07)] transition hover:shadow-[0_20px_55px_rgba(90,60,75,0.1)]">

      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-5 md:px-7">

        <div className="flex min-w-0 items-center gap-3">

          <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ffd7e7] to-[#dbe5ff] font-serif-display text-lg text-[#6e5d66]">
            {letter.author_name?.charAt(0)?.toUpperCase() || "♡"}

            <span className="absolute -bottom-1 -right-1 text-[10px]">
              ✦
            </span>
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-bold text-[#40363c]">
              {letter.author_name || "Anonymous"}
            </p>

            <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#9a8c94]">
              {formatDate(letter.created_at)}
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={() => setReportOpen(true)}
          aria-label="Report letter"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#eee1e7] bg-[#fffafd] text-[#a08e97] transition hover:border-[#e4a6ba] hover:bg-[#fff0f5] hover:text-[#d6759b]"
        >
          <Flag size={14} />
        </button>

      </div>


      {/* LETTER BODY */}
      <div className="px-6 pb-6 md:px-9 md:pb-8">

        <div className="relative rounded-[1.5rem] bg-[#fff8fb] px-6 py-7 md:px-8 md:py-9">

          <span className="absolute -left-1 -top-4 font-serif-display text-5xl text-[#edb1c6]/60">
            “
          </span>

          <p className="whitespace-pre-wrap text-[15px] leading-8 text-[#51464c] md:text-base">
            {letter.message || letter.text}
          </p>

          <span className="absolute -bottom-8 right-4 font-serif-display text-5xl text-[#edb1c6]/60">
            ”
          </span>

        </div>


        {/* OPTIONAL LINK */}
        {letter.original_url && (
          <a
            href={letter.original_url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#eadde3] bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#8d7780] transition hover:border-[#df86a7] hover:text-[#df86a7]"
          >
            Open shared link
          </a>
        )}


        {/* ACTIONS */}
        <div className="mt-7 flex items-center gap-6">

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
              fill={liked ? "currentColor" : "none"}
            />

            <span>{likes}</span>
          </button>


          <button
            type="button"
            onClick={toggleComments}
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


        {/* COMMENTS */}
        {commentsOpen && (
          <div className="mt-7 border-t border-[#eee1e7] pt-6">

            {comments.length > 0 && (
              <div className="space-y-3">

                {comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    comment={comment}
                    letterId={letter.id}
                    onChanged={loadComments}
                  />
                ))}

              </div>
            )}


            <form
              onSubmit={submitComment}
              className="mt-5"
            >

              <input
                value={commentName}
                onChange={(event) =>
                  setCommentName(event.target.value)
                }
                placeholder="Your name"
                className="w-full rounded-2xl border border-[#eadde3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
              />

              <div className="mt-2 flex gap-2">

                <input
                  value={commentText}
                  onChange={(event) =>
                    setCommentText(event.target.value)
                  }
                  placeholder="Write a little comment..."
                  className="min-w-0 flex-1 rounded-2xl border border-[#eadde3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
                />

                <button
                  type="submit"
                  disabled={commentLoading}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#40363c] text-white transition hover:bg-[#df86a7] disabled:opacity-50"
                >
                  <Send size={15} />
                </button>

              </div>

            </form>

          </div>
        )}


        {/* REPORT */}
        {reportOpen && (
          <div className="mt-6 rounded-2xl border border-[#efd9e1] bg-[#fff8fb] p-5">

            <div className="flex items-center justify-between">

              <p className="text-sm font-semibold text-[#493c43]">
                Report this letter
              </p>

              <button
                type="button"
                onClick={() => setReportOpen(false)}
                className="text-[#98868f]"
              >
                <X size={16} />
              </button>

            </div>

            <textarea
              value={reportReason}
              onChange={(event) =>
                setReportReason(event.target.value)
              }
              rows={3}
              placeholder="Tell the admins what you noticed..."
              className="mt-4 w-full resize-none rounded-2xl border border-[#eadde3] bg-white px-4 py-3 text-sm outline-none focus:border-[#df86a7]"
            />

            <button
              type="button"
              disabled={reporting}
              onClick={submitReport}
              className="mt-3 rounded-full bg-[#40363c] px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#df86a7] disabled:opacity-50"
            >
              {reporting ? "Sending..." : "Send report"}
            </button>

          </div>
        )}

      </div>
    </article>
  );
}


/* ============================================================
   COMMENT
============================================================ */

function Comment({
  comment,
  letterId,
  onChanged,
}) {
  const [reportOpen, setReportOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [sending, setSending] = useState(false);

  async function reportComment() {
    if (!reason.trim()) {
      toast.error("Please enter a reason.");
      return;
    }

    try {
      setSending(true);

      await api.post(
        `/letters/${letterId}/comments/${comment.id}/report`,
        {
          reason: reason.trim(),
        }
      );

      toast.success(
        "Comment reported to the admins."
      );

      setReason("");
      setReportOpen(false);

      onChanged?.();

    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail ||
          "Couldn't report the comment."
      );

    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-2xl border border-[#eadde3] bg-[#fffafd] px-4 py-3">

      <div className="flex items-start justify-between gap-3">

        <div>

          <p className="text-xs font-bold text-[#4b4046]">
            {comment.author_name || "Anonymous"}
          </p>

          <p className="mt-1 whitespace-pre-wrap text-sm leading-5 text-[#81747a]">
            {comment.text}
          </p>

        </div>

        <button
          type="button"
          onClick={() => setReportOpen((value) => !value)}
          aria-label="Report comment"
          className="shrink-0 text-[#ad99a2] transition hover:text-[#d6759b]"
        >
          <Flag size={13} />
        </button>

      </div>


      {reportOpen && (
        <div className="mt-3 border-t border-[#eee1e7] pt-3">

          <textarea
            value={reason}
            onChange={(event) =>
              setReason(event.target.value)
            }
            rows={2}
            placeholder="Why are you reporting this?"
            className="w-full resize-none rounded-xl border border-[#eadde3] bg-white px-3 py-2 text-xs outline-none focus:border-[#df86a7]"
          />

          <button
            type="button"
            disabled={sending}
            onClick={reportComment}
            className="mt-2 rounded-full bg-[#40363c] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white hover:bg-[#df86a7] disabled:opacity-50"
          >
            {sending ? "Sending..." : "Report comment"}
          </button>

        </div>
      )}

    </div>
  );
}


/* ============================================================
   LETTER COMPOSER
============================================================ */

function LetterComposer({
  onClose,
  onSubmitted,
}) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && !submitting) {
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
      toast.error("Please enter your name.");
      return;
    }

    if (!message.trim()) {
      toast.error("Please write something first.");
      return;
    }

    try {
      setSubmitting(true);

      await api.post("/letters", {
        author_name: username.trim(),
        message: message.trim(),
        original_url: originalUrl.trim(),
      });

      toast.success(
        "Your letter was sent for review ♡"
      );

      onSubmitted();

    } catch (error) {
      console.error(
        "Letter submission error:",
        error
      );

      toast.error(
        error?.response?.data?.detail ||
          "Couldn't send your letter."
      );

    } finally {
      setSubmitting(false);
    }
  }


  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-[#241d22]/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget &&
          !submitting
        ) {
          onClose();
        }
      }}
    >

      <div
        role="dialog"
        aria-modal="true"
        className="relative max-h-[94vh] w-full max-w-xl overflow-y-auto rounded-t-[2rem] border border-[#ead6df] bg-[#fffafc] shadow-[0_30px_100px_rgba(30,20,25,0.25)] sm:rounded-[2.25rem]"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >

        {/* TOP BAR */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#eedee5] bg-[#fffafc] px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#ffe5ef]">
              <Mail
                size={17}
                className="text-[#df86a7]"
              />
            </div>

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#a0808d]">
                HANEULZ LETTERS
              </p>

              <p className="font-serif-display text-lg text-[#342a30]">
                write a little note
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#eadde3] bg-white text-[#66575f] shadow-sm transition hover:bg-[#df86a7] hover:text-white"
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
                a little space for you
              </span>

            </div>

            <h2 className="font-serif-display text-3xl leading-tight text-[#342a30] sm:text-4xl">
              what would you like to say?
              <span className="text-[#df86a7]">
                {" "}
                ♡
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#7d6e75]">
              Your letter doesn't need a recipient.
              Write to HANEULZ, Han, JL, the whole group,
              another fan, or simply leave a thought.
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
                  setUsername(event.target.value)
                }
                required
                maxLength={50}
                placeholder="@yourusername"
                className="w-full rounded-2xl border border-[#eadde3] bg-white px-4 py-3.5 text-sm text-[#40343b] shadow-sm outline-none transition placeholder:text-[#b5a4ad] focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
              />

            </div>


            {/* MESSAGE */}
            <div>

              <label className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-[#67565e]">

                <span>
                  Your letter
                </span>

                <span className="font-normal tracking-normal text-[#aa969f]">
                  {message.length}/2000
                </span>

              </label>

              <textarea
                value={message}
                onChange={(event) => {
                  if (event.target.value.length <= 2000) {
                    setMessage(event.target.value);
                  }
                }}
                required
                rows={8}
                placeholder="Dear HANEULZ..."
                className="w-full resize-none rounded-2xl border border-[#eadde3] bg-white px-4 py-4 text-sm leading-7 text-[#40343b] shadow-sm outline-none transition placeholder:text-[#b5a4ad] focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
              />

            </div>


            {/* OPTIONAL LINK */}
            <div>

              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#67565e]">

                Shared link

                <span className="ml-1 font-normal normal-case tracking-normal text-[#aa969f]">
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
                className="w-full rounded-2xl border border-[#eadde3] bg-white px-4 py-3.5 text-sm text-[#40343b] shadow-sm outline-none transition placeholder:text-[#b5a4ad] focus:border-[#df86a7] focus:ring-4 focus:ring-[#ffdce9]"
              />

            </div>


            {/* NOTICE */}
            <div className="rounded-2xl border border-[#efd9e2] bg-[#fff4f8] px-4 py-3">

              <div className="flex gap-3">

                <Sparkles
                  size={16}
                  className="mt-0.5 shrink-0 text-[#df86a7]"
                />

                <p className="text-[10px] leading-5 text-[#876f79]">
                  Your letter will be reviewed by the HANEULZ
                  admins before it appears publicly.
                </p>

              </div>

            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#df86a7] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-white shadow-[0_10px_25px_rgba(223,134,167,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d8749a] disabled:cursor-not-allowed disabled:opacity-50"
            >

              {submitting ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={13} />
                  Send my letter
                </>
              )}

            </button>

            <p className="text-center text-[10px] leading-5 text-[#96858d]">
              Be kind. Be respectful. ♡
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   DATE
============================================================ */

function formatDate(value) {
  if (!value) return "";

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
