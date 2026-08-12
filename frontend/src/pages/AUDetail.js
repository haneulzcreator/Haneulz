import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bookmark,
  ExternalLink,
  Heart,
  Send,
  Sparkles,
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
      <div className="grid min-h-screen place-items-center bg-[color:var(--cream)] text-[color:var(--ink-soft)]">
        <div className="text-center">
          <Sparkles
            size={20}
            className="mx-auto mb-4 animate-pulse text-[color:var(--pink-deep)]"
          />

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
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--cream)] text-[color:var(--ink)]">

      {/* =====================================================
          SOFT BACKGROUND DECOR
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[color:var(--pink-soft)] opacity-60 blur-3xl" />

        <div className="absolute -right-32 top-[45%] h-96 w-96 rounded-full bg-[color:var(--blue)] opacity-50 blur-3xl" />

        <div className="absolute right-[10%] top-[18%] rotate-12 font-serif-display text-[6rem] text-[color:var(--pink-deep)] opacity-[0.06]">
          ♡
        </div>

        <div className="absolute bottom-[20%] left-[8%] font-serif-display text-[7rem] text-[color:var(--ink)] opacity-[0.025]">
          ✦
        </div>

      </div>


      <main className="relative pt-28 md:pt-32">

        <article className="mx-auto max-w-4xl px-5 md:px-8">

          {/* =================================================
              BACK
          ================================================= */}

          <Reveal>

            <Link
              to="/aus"
              className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)] transition hover:text-[color:var(--pink-deep)]"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />

              Back to library
            </Link>

          </Reveal>


          {/* =================================================
              STORY HEADER
          ================================================= */}

          <Reveal className="mt-8">

            <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white px-6 py-10 md:px-10 md:py-14">

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--pink-soft)] opacity-70 blur-3xl" />

              <div className="relative">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="rounded-full bg-[color:var(--pink-soft)] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[color:var(--pink-deep)]">
                    {typeLabel}
                  </span>

                  {source?.label && (
                    <span className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                      {source.label}
                    </span>
                  )}

                  {statusLabel && (
                    <span className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                      {statusLabel}
                    </span>
                  )}

                </div>


                <div className="mt-7 flex items-start gap-3">

                  <Sparkles
                    size={15}
                    className="mt-3 shrink-0 text-[color:var(--pink-deep)]"
                  />

                  <h1 className="max-w-3xl font-serif-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] md:text-7xl">
                    {au.title}
                  </h1>

                </div>


                <p className="mt-5 text-xs text-[color:var(--ink-soft)]">
                  by{" "}
                  <span className="font-semibold text-[color:var(--ink)]">
                    {author}
                  </span>
                </p>


                {description && (
                  <p className="mt-7 max-w-2xl font-serif-display text-xl italic leading-relaxed text-[color:var(--ink-soft)] md:text-2xl">
                    {description}
                  </p>
                )}

              </div>

            </div>

          </Reveal>


          {/* =================================================
              COVER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-7 overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white p-2 shadow-[0_24px_70px_-40px_rgba(41,39,37,0.25)]"
          >

            <div className="relative overflow-hidden rounded-[1.6rem]">

              <img
                src={cover}
                alt={au.title}
                className="max-h-[620px] w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

            </div>

          </motion.div>


          {/* =================================================
              META / ACTIONS
          ================================================= */}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

            <div className="flex flex-wrap gap-2">

              {au.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[color:var(--blue)] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[color:var(--ink)]"
                >
                  {tag}
                </span>
              ))}

            </div>


            <BookmarkButton
              id={au.id}
              title={au.title}
              variant="pill"
            />

          </div>


          {/* =================================================
              STORY
          ================================================= */}

          {story && (
            <Reveal>

              <section className="mt-12">

                <div className="mb-7 flex items-center gap-3">

                  <span className="h-px w-8 bg-[color:var(--pink-deep)]" />

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[color:var(--pink-deep)]">
                    The story
                  </p>

                </div>


                <div
                  className="rounded-[2rem] border border-[color:var(--line)] bg-white px-6 py-8 md:px-10 md:py-12"
                  data-testid="au-full-story"
                >

                  <div className="space-y-6 text-[1rem] leading-[1.9] text-[color:var(--ink)] md:text-[1.05rem]">

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
              READ SOURCE
          ================================================= */}

          {au.source_url && (

            <Reveal>

              <div className="mt-7 rounded-[2rem] border border-[color:var(--line)] bg-white p-5 md:p-6">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.23em] text-[color:var(--pink-deep)]">
                      Original source
                    </p>

                    <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
                      Read the original story on{" "}
                      {source?.label || "the original platform"}.
                    </p>

                  </div>


                  <a
                    href={au.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--pink-deep)]"
                  >
                    <ExternalLink size={13} />

                    Read Story
                  </a>

                </div>

              </div>

            </Reveal>
          )}


          {/* =================================================
              FAN NOTES
          ================================================= */}

          <section
            className="mt-16 border-t border-[color:var(--line)] pt-12"
            data-testid="comments-section"
          >

            <div className="flex items-end justify-between gap-4">

              <div>

                <div className="flex items-center gap-2">

                  <Heart
                    size={13}
                    className="text-[color:var(--pink-deep)]"
                  />

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[color:var(--pink-deep)]">
                    Fan notes
                  </p>

                </div>

                <h2 className="mt-2 font-serif-display text-4xl md:text-5xl">
                  Little thoughts.
                </h2>

              </div>

              {comments.length > 0 && (
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  {comments.length}{" "}
                  {comments.length === 1
                    ? "note"
                    : "notes"}
                </span>
              )}

            </div>


            {/* Comment form */}

            <form
              onSubmit={submitComment}
              className="mt-7 rounded-[2rem] border border-[color:var(--line)] bg-white p-5 md:p-7"
            >

              <p className="text-xs leading-6 text-[color:var(--ink-soft)]">
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
                className="mt-5 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--cream)] px-5 py-3.5 text-sm outline-none transition focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]"
              />


              <textarea
                value={text}
                onChange={(event) =>
                  setText(event.target.value)
                }
                placeholder="Leave a soft note…"
                rows={4}
                data-testid="comment-text-input"
                className="mt-3 w-full resize-none rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--cream)] px-5 py-4 text-sm leading-6 outline-none transition focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]"
              />


              <div className="mt-4 flex justify-end">

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="comment-submit-btn"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--pink-deep)] disabled:cursor-not-allowed disabled:opacity-50"
                >

                  <Send size={13} />

                  {submitting
                    ? "Sending…"
                    : "Post note"}

                </button>

              </div>

            </form>


            {/* Existing comments */}

            <div className="mt-7 space-y-3">

              {comments.length === 0 && (

                <div className="rounded-[2rem] border border-dashed border-[color:var(--line)] bg-white px-6 py-12 text-center">

                  <div className="font-serif-display text-3xl text-[color:var(--pink-deep)]">
                    ♡
                  </div>

                  <p className="mt-3 text-sm text-[color:var(--ink-soft)]">
                    No notes yet — leave the first one.
                  </p>

                </div>

              )}


              {comments.map((comment) => (

                <div
                  key={comment.id}
                  className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-30px_rgba(41,39,37,0.35)]"
                  data-testid={`comment-${comment.id}`}
                >

                  <div className="flex items-center gap-2">

                    <div className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--pink-soft)] text-[color:var(--pink-deep)]">
                      <Heart size={11} />
                    </div>

                    <p className="text-sm font-semibold">
                      {comment.author_name}
                    </p>

                  </div>

                  <p className="mt-3 pl-9 text-sm leading-6 text-[color:var(--ink-soft)]">
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
