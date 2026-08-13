import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Heart, Send } from "lucide-react";
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
  if (type === "social media au" || type === "social media") {
    return "Social Media AU";
  }
  if (type === "written au" || type === "written") {
    return "Written AU";
  }
  if (type === "one-shot" || type === "oneshot") {
    return "One-shot";
  }
  if (type === "series") return "Series";

  return "AU Story";
}

function getStatusLabel(au) {
  const status = normalize(au.status || au.au_status);

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
        console.error("AU detail loading error:", error);

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

  if (!au) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#f8f5ef] text-[#77716b]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-5 w-5 animate-pulse rounded-full border border-[#b86f7d]/30 border-t-[#b86f7d]" />

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
    <div className="min-h-screen bg-[#f8f5ef] text-[#292725]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <main className="relative pt-28 md:pt-32">

        <article className="mx-auto max-w-5xl px-5 md:px-8">

          {/* BACK */}

          <Reveal>
            <Link
              to="/aus"
              className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#817b74] transition-colors hover:text-[#b86f7d]"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />

              Back to library
            </Link>
          </Reveal>


          {/* =================================================
              AU INTRO
          ================================================= */}

          <Reveal className="mt-10">

            <section className="border-y border-[#292725]/10 py-10 md:py-14">

              <div className="grid gap-10 md:grid-cols-[1fr_230px] md:gap-14">

                {/* LEFT — INFORMATION */}

                <div className="flex flex-col justify-center">

                  {/* META */}

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#b86f7d]">
                      {typeLabel}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#aaa39b]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#817b74]">
                      {source?.label || "HANEULZ"}
                    </span>

                    {statusLabel && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-[#aaa39b]" />

                        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#817b74]">
                          {statusLabel}
                        </span>
                      </>
                    )}

                  </div>


                  {/* TITLE */}

                  <h1 className="mt-6 max-w-3xl font-serif-display text-5xl font-medium leading-[0.94] tracking-[-0.035em] md:text-7xl">
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
                    <p className="mt-7 max-w-2xl font-serif-display text-lg italic leading-relaxed text-[#6f6963] md:text-xl">
                      {description}
                    </p>
                  )}


                  {/* TAGS */}

                  {au.tags?.length > 0 && (
                    <div className="mt-7 flex max-w-2xl flex-wrap gap-x-2 gap-y-2">

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

                  <div className="mt-8 flex flex-wrap items-center gap-3">

                    {au.source_url && (
                      <a
                        href={au.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#292725] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#b86f7d]"
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

                <div className="order-first mx-auto w-full max-w-[230px] md:order-none md:mx-0">

                  <div className="overflow-hidden border border-[#292725]/10 bg-[#fffdf8] p-1.5">

                    <img
                      src={cover}
                      alt={au.title}
                      className="aspect-[3/4] w-full object-cover"
                    />

                  </div>

                  <p className="mt-3 text-center text-[7px] font-semibold uppercase tracking-[0.2em] text-[#aaa39b]">
                    HANEULZ ARCHIVE
                  </p>

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

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#b86f7d]">
                    The story
                  </p>

                </div>


                <div
                  className="max-w-3xl"
                  data-testid="au-full-story"
                >

                  <div className="space-y-6 font-serif-display text-[1.05rem] leading-[1.9] text-[#403d39] md:text-[1.12rem]">

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
              ORIGINAL SOURCE
          ================================================= */}

          {au.source_url && (
            <Reveal>

              <section className="mt-14 border-y border-[#292725]/10 py-6">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.23em] text-[#b86f7d]">
                      Original source
                    </p>

                    <p className="mt-1 text-xs text-[#817b74]">
                      Originally shared on{" "}
                      {source?.label || "the original platform"}.
                    </p>

                  </div>


                  <a
                    href={au.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#292725]/15 bg-[#fffdf8] px-5 py-2.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#292725] transition hover:border-[#b86f7d] hover:text-[#b86f7d]"
                  >
                    <ExternalLink size={12} />
                    Original story
                  </a>

                </div>

              </section>

            </Reveal>
          )}


          {/* =================================================
              FAN NOTES
          ================================================= */}

          <section
            className="mt-16 border-t border-[#292725]/10 pt-12"
            data-testid="comments-section"
          >

            <div className="flex items-end justify-between gap-4">

              <div>

                <div className="flex items-center gap-2">

                  <Heart
                    size={12}
                    className="text-[#b86f7d]"
                  />

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#b86f7d]">
                    Fan notes
                  </p>

                </div>

                <h2 className="mt-2 font-serif-display text-4xl md:text-5xl">
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


            {/* COMMENT FORM */}

            <form
              onSubmit={submitComment}
              className="mt-7 border border-[#292725]/10 bg-[#fffdf8] p-5 md:p-7"
            >

              <p className="text-xs leading-6 text-[#817b74]">
                Loved something about this AU?
                Leave a little note for the author
                and other readers. ♡
              </p>


              <input
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Your name / @handle"
                data-testid="comment-name-input"
                className="mt-5 w-full border-b border-[#292725]/15 bg-transparent px-1 py-3 text-sm outline-none transition focus:border-[#b86f7d]"
              />


              <textarea
                value={text}
                onChange={(event) =>
                  setText(event.target.value)
                }
                placeholder="Leave a soft note…"
                rows={4}
                data-testid="comment-text-input"
                className="mt-3 w-full resize-none border-b border-[#292725]/15 bg-transparent px-1 py-3 text-sm leading-6 outline-none transition focus:border-[#b86f7d]"
              />


              <div className="mt-5 flex justify-end">

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="comment-submit-btn"
                  className="inline-flex items-center gap-2 bg-[#292725] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#b86f7d] disabled:cursor-not-allowed disabled:opacity-50"
                >

                  <Send size={12} />

                  {submitting
                    ? "Sending…"
                    : "Post note"}

                </button>

              </div>

            </form>


            {/* EXISTING COMMENTS */}

            <div className="mt-7 space-y-4">

              {comments.length === 0 && (

                <div className="border border-dashed border-[#292725]/15 px-6 py-12 text-center">

                  <div className="font-serif-display text-3xl text-[#b86f7d]">
                    ♡
                  </div>

                  <p className="mt-3 text-sm text-[#817b74]">
                    No notes yet — leave the first one.
                  </p>

                </div>

              )}


              {comments.map((comment) => (

                <div
                  key={comment.id}
                  className="border-b border-[#292725]/10 py-5"
                  data-testid={`comment-${comment.id}`}
                >

                  <div className="flex items-center gap-2">

                    <div className="grid h-7 w-7 place-items-center rounded-full bg-[#f1e8e5] text-[#b86f7d]">
                      <Heart size={10} />
                    </div>

                    <p className="text-sm font-semibold">
                      {comment.author_name}
                    </p>

                  </div>

                  <p className="mt-3 pl-9 text-sm leading-6 text-[#817b74]">
                    {comment.text}
                  </p>

                </div>

              ))}

            </div>

          </section>

        </article>

      </main>


      <Footer />

    </div>
  );
}
