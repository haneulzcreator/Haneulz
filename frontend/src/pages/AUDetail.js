import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Flag,
  Heart,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import {
  api,
  formatApiError,
  DEFAULT_COVERS,
  SOURCES,
} from "../lib/api";
import { Reveal } from "../components/Reveal";
import BookmarkButton from "../components/BookmarkButton";
import Footer from "../components/Footer";
function normalize(value) {
  return String(value || "").trim().toLowerCase();
}
function getSource(au) {
  return SOURCES[au.source] || SOURCES.other;
}
function getTypeLabel(au) {
  const type = normalize(au.au_type || au.type);
  if (type === "headcanon") return "Headcanon";
  if (
    type === "social media au" ||
    type === "social media"
  ) {
    return "Social Media AU";
  }
  if (
    type === "written au" ||
    type === "written"
  ) {
    return "Written AU";
  }
  if (
    type === "one-shot" ||
    type === "oneshot" ||
    type === "one shot"
  ) {
    return "One-shot";
  }
  if (type === "series") return "Series";
  return "AU Story";
}
function getStatusLabel(au) {
  const status = normalize(
    au.status || au.au_status
  );
  if (
    ["completed", "complete", "finished"].includes(status)
  ) {
    return "Completed";
  }
  if (
    ["ongoing", "in progress", "active"].includes(status)
  ) {
    return "Ongoing";
  }
  return null;
}
export default function AUDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [au, setAu] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [reporting, setReporting] = useState(null);
  useEffect(() => {
    let mounted = true;
    api
      .get(`/aus/${id}`)
      .then((response) => {
        if (mounted) {
          setAu(response.data);
        }
      })
      .catch((error) => {
        console.error(
          "AU detail loading error:",
          error
        );
        if (mounted) {
          navigate("/aus");
        }
      });
    api
      .get(`/aus/${id}/comments`)
      .then((response) => {
        if (mounted) {
          setComments(
            Array.isArray(response.data)
              ? response.data
              : []
          );
        }
      })
      .catch(() => {
        if (mounted) {
          setComments([]);
        }
      });
    return () => {
      mounted = false;
    };
  }, [id, navigate]);
  async function submitComment(event) {
    event.preventDefault();
    if (!name.trim() || !text.trim()) {
      toast.error("Please fill in both fields.");
      return;
    }
    setSubmitting(true);
    try {
      await api.post(`/aus/${id}/comments`, {
        author_name: name.trim(),
        text: text.trim(),
      });
      setName("");
      setText("");
      toast.success(
        "Comment sent! It'll appear once approved. 💌"
      );
    } catch (error) {
      toast.error(
        formatApiError(
          error.response?.data?.detail
        )
      );
    } finally {
      setSubmitting(false);
    }
  }
  async function reportComment(comment) {
    if (!comment?.id || reporting === comment.id) {
      return;
    }
    const confirmed = window.confirm(
      "Report this note to the HANEULZ admin?"
    );
    if (!confirmed) {
      return;
    }
    setReporting(comment.id);
    try {
      await api.post(
        `/comments/${comment.id}/report`
      );
      toast.success(
        "Report sent. Thank you for helping keep the notes safe."
      );
    } catch (error) {
      console.error(
        "Comment report error:",
        error
      );
      toast.error(
        formatApiError(
          error.response?.data?.detail
        ) ||
          "Unable to send the report right now."
      );
    } finally {
      setReporting(null);
    }
  }
  if (!au) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#f7f4ee] text-[#77716b]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-5 w-5 animate-pulse border border-[#292725]/20 border-t-[#b86f7d]" />
          <p className="text-[9px] font-bold uppercase tracking-[0.25em]">
            Opening story…
          </p>
        </div>
      </div>
    );
  }
  const cover =
    au.cover_image_url ||
    DEFAULT_COVERS[0];
  const source = getSource(au);
  const typeLabel = getTypeLabel(au);
  const statusLabel = getStatusLabel(au);
  const author =
    au.author_name ||
    au.author ||
    "Anonymous";
  const description =
    au.short_description ||
    au.summary ||
    au.description ||
    "";
  const story =
    au.full_story ||
    au.story ||
    "";
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#292725]">
      <main className="relative pt-28 md:pt-32">
        <article className="mx-auto max-w-5xl px-5 md:px-8">
          {/* =================================================
              BACK
          ================================================= */}
          <Reveal>
            <Link
              to="/aus"
              className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#817b74] transition-colors hover:text-[#292725]"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to library
            </Link>
          </Reveal>
          {/* =================================================
              AU HEADER
          ================================================= */}
          <Reveal className="mt-8">
            <section className="border-y border-[#292725]/12 py-9 md:py-12">
              <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_210px] md:gap-14">
                {/* LEFT — INFORMATION */}
                <div>
                  {/* Small archive label */}
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#b86f7d]" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8b847d]">
                      HANEULZ / AU ARCHIVE
                    </span>
                  </div>
                  {/* META */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#b86f7d]">
                      {typeLabel}
                    </span>
                    <span className="h-1 w-1 bg-[#aaa39b]" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#817b74]">
                      {source?.label || "HANEULZ"}
                    </span>
                    {statusLabel && (
                      <>
                        <span className="h-1 w-1 bg-[#aaa39b]" />
                        <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#817b74]">
                          {statusLabel}
                        </span>
                      </>
                    )}
                  </div>
                  {/* TITLE */}
                  <h1 className="mt-5 max-w-3xl font-serif-display text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl">
                    {au.title}
                  </h1>
                  {/* AUTHOR */}
                  <p className="mt-5 text-xs text-[#817b74]">
                    by{" "}
                    <span className="font-semibold text-[#292725]">
                      {author}
                    </span>
                  </p>
                  {/* DESCRIPTION */}
                  {description && (
                    <p className="mt-6 max-w-2xl font-serif-display text-lg italic leading-relaxed text-[#6f6963] md:text-xl">
                      {description}
                    </p>
                  )}
                  {/* TAGS */}
                  {au.tags?.length > 0 && (
                    <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
                      {au.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#292725]/10 bg-[#fffdf8] px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.12em] text-[#817b74]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* ACTIONS */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {au.source_url && (
                      <a
                        href={au.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#292725] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#3d3936]"
                      >
                        <ExternalLink size={12} />
                        Read Story
                      </a>
                    )}
                    <BookmarkButton
                      id={au.id}
                      title={au.title}
                      variant="pill"
                    />
                  </div>
                </div>
                {/* RIGHT — COVER */}
                <div className="mx-auto w-full max-w-[210px]">
                  <div className="border border-[#292725]/12 bg-[#fffdf8] p-1">
                    <img
                      src={cover}
                      alt={au.title}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[7px] font-semibold uppercase tracking-[0.18em] text-[#aaa39b]">
                    <span>
                      HANEULZ
                    </span>
                    <span>
                      {String(au.id).slice(-4)}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
          {/* =================================================
              STORY
          ================================================= */}
          {story && (
            <Reveal>
              <section className="mt-14 md:mt-18">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#b86f7d]" />
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8b847d]">
                    The story
                  </p>
                </div>
                <div
                  className="max-w-3xl"
                  data-testid="au-full-story"
                >
                  <div className="space-y-6 font-serif-display text-[1.04rem] leading-[1.95] text-[#403d39] md:text-[1.1rem]">
                    {story
                      .split("\n")
                      .filter(Boolean)
                      .map((paragraph, index) => (
                        <p key={index}>
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </section>
            </Reveal>
          )}
          {/* =================================================
              FAN NOTES
          ================================================= */}
          <section
            className="mt-20 border-t border-[#292725]/12 pt-12"
            data-testid="comments-section"
          >
            {/* SECTION HEADER */}
            <div className="flex items-end justify-between gap-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[#b86f7d]" />
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8b847d]">
                    Reader notes
                  </p>
                </div>
                <h2 className="mt-3 font-serif-display text-4xl font-medium tracking-[-0.025em] md:text-5xl">
                  Little thoughts.
                </h2>
              </div>
              {comments.length > 0 && (
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#aaa39b]">
                  {comments.length}{" "}
                  {comments.length === 1
                    ? "note"
                    : "notes"}
                </span>
              )}
            </div>
            {/* =================================================
                COMMENT FORM
            ================================================= */}
            <form
              onSubmit={submitComment}
              className="mt-8 border-y border-[#292725]/12 py-7"
            >
              <p className="max-w-lg text-xs leading-6 text-[#817b74]">
                Leave a little note about this AU.
                Your note will appear after it has
                been approved.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Your name / @handle"
                  data-testid="comment-name-input"
                  className="w-full border-b border-[#292725]/15 bg-transparent px-1 py-3 text-sm outline-none transition placeholder:text-[#aaa39b] focus:border-[#b86f7d]"
                />
                <input
                  value={text}
                  onChange={(event) =>
                    setText(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();
                    }
                  }}
                  placeholder="Write a note…"
                  data-testid="comment-text-input"
                  className="w-full border-b border-[#292725]/15 bg-transparent px-1 py-3 text-sm outline-none transition placeholder:text-[#aaa39b] focus:border-[#b86f7d]"
                />
              </div>
              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="comment-submit-btn"
                  className="inline-flex items-center gap-2 bg-[#292725] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#3d3936] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send size={12} />
                  {submitting
                    ? "Sending…"
                    : "Post note"}
                </button>
              </div>
            </form>
            {/* =================================================
                EXISTING NOTES
            ================================================= */}
            <div className="mt-8">
              {comments.length === 0 && (
                <div className="border-y border-dashed border-[#292725]/15 py-12 text-center">
                  <Heart
                    size={17}
                    className="mx-auto text-[#b86f7d]"
                  />
                  <p className="mt-3 text-sm text-[#817b74]">
                    No notes yet — leave the first one.
                  </p>
                </div>
              )}
              <div className="divide-y divide-[#292725]/10">
                {comments.map((comment) => (
                  <article
                    key={comment.id}
                    className="py-6"
                    data-testid={`comment-${comment.id}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="font-serif-display text-lg text-[#b86f7d]">
                            ♡
                          </span>
                          <p className="text-sm font-semibold text-[#292725]">
                            {comment.author_name}
                          </p>
                        </div>
                        <p className="mt-3 pl-7 text-sm leading-7 text-[#6f6963]">
                          {comment.text}
                        </p>
                      </div>
                      {/* REPORT */}
                      <button
                        type="button"
                        onClick={() =>
                          reportComment(comment)
                        }
                        disabled={
                          reporting === comment.id
                        }
                        className="group mt-1 flex shrink-0 items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#aaa39b] transition hover:text-[#292725] disabled:cursor-not-allowed disabled:opacity-40"
                        title="Report note"
                      >
                        <Flag
                          size={11}
                          className="transition-transform group-hover:-translate-y-px"
                        />
                        {reporting === comment.id
                          ? "Sending"
                          : "Report"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
