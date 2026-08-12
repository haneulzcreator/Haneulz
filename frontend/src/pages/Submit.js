import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  ShieldAlert,
  Link2,
  ImagePlus,
  Send,
} from "lucide-react";

import { api, formatApiError } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const empty = {
  title: "",
  author_name: "",
  short_description: "",
  full_story: "",
  source_url: "",
  au_type: "story",
  source: "x",
  image: null,
};

export default function Submit() {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);

  const set = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!form.source_url) {
      toast.error("Please add the original work link.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append(
        "author_name",
        form.author_name.trim() || "Anonymous"
      );
      formData.append(
        "short_description",
        form.short_description
      );
      formData.append("full_story", form.full_story);
      formData.append("source_url", form.source_url);
      formData.append("au_type", form.au_type);
      formData.append("source", form.source);

      if (form.image) {
        formData.append("image", form.image);
      }

      await api.post("/aus", formData);

      setForm(empty);

      toast.success(
        "Your AU is waiting for approval. 💗🌩️💙"
      );
    } catch (err) {
      toast.error(
        formatApiError(err.response?.data?.detail)
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle =
    "w-full rounded-2xl border border-[color:var(--line)] bg-white px-5 py-3.5 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--ink-soft)]/60 focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]";

  const choiceStyle = (active, pink = false) =>
    `rounded-full px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
      active
        ? pink
          ? "bg-[color:var(--pink-deep)] text-white"
          : "bg-[color:var(--ink)] text-white"
        : "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
    }`;

  return (
    <div className="min-h-screen pt-28 md:pt-32">

      <section className="mx-auto max-w-4xl px-5 md:px-6">

        {/* =====================================================
            HERO
        ====================================================== */}

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white px-6 py-12 md:px-12 md:py-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--pink-soft)] opacity-70 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[color:var(--pink-soft)] opacity-40 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
                <Sparkles size={14} />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  HANEULZ Corner
                </span>
              </div>

              <h1 className="mt-5 max-w-2xl font-serif-display text-5xl font-medium leading-[0.95] md:text-7xl">
                Leave something
                <br />
                here. ♡
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
                Found an AU, headcanon, or little story worth
                remembering? Add it to the corner and let other
                fans find it too.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full bg-[color:var(--pink-soft)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em]">
                  Fan submissions
                </span>

                <span className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
                  Reviewed before posting
                </span>

              </div>

            </div>
          </div>
        </Reveal>


        {/* =====================================================
            SUBMISSION FORM
        ====================================================== */}

        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            className="mt-7 rounded-[2.5rem] border border-[color:var(--line)] bg-white p-6 md:p-10"
          >

            {/* TITLE */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Title{" "}
                <span className="text-[color:var(--pink-deep)]">
                  *
                </span>
              </label>

              <input
                required
                value={form.title}
                onChange={set("title")}
                className={inputStyle}
                placeholder="What is the AU called?"
              />
            </div>


            {/* AUTHOR */}

            <div className="mt-6">
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Creator / Author
              </label>

              <input
                value={form.author_name}
                onChange={set("author_name")}
                className={inputStyle}
                placeholder="Leave blank for Anonymous"
              />
            </div>


            {/* TYPE */}

            <div className="mt-7">

              <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                What are you submitting?
              </label>

              <div className="flex flex-wrap gap-2">

                {[
                  { v: "story", l: "AU Story" },
                  { v: "headcanon", l: "Headcanon" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.v}
                    onClick={() =>
                      setForm({
                        ...form,
                        au_type: item.v,
                      })
                    }
                    className={choiceStyle(
                      form.au_type === item.v
                    )}
                  >
                    {item.l}
                  </button>
                ))}

              </div>
            </div>


            {/* SOURCE */}

            <div className="mt-7">

              <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Where was it originally posted?
              </label>

              <div className="flex flex-wrap gap-2">

                {[
                  { v: "x", l: "X" },
                  { v: "tiktok", l: "TikTok" },
                  { v: "ao3", l: "AO3" },
                  { v: "other", l: "Other" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.v}
                    onClick={() =>
                      setForm({
                        ...form,
                        source: item.v,
                      })
                    }
                    className={choiceStyle(
                      form.source === item.v,
                      true
                    )}
                  >
                    {item.l}
                  </button>
                ))}

              </div>
            </div>


            {/* ORIGINAL LINK */}

            <div className="mt-7">

              <label className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                <Link2 size={12} />

                Original Work Link

                <span className="text-[color:var(--pink-deep)]">
                  *
                </span>
              </label>

              <input
                required
                type="url"
                value={form.source_url}
                onChange={set("source_url")}
                className={inputStyle}
                placeholder="Paste the original post or story link"
              />

              <p className="mt-2 text-[10px] leading-5 text-[color:var(--ink-soft)]">
                Readers will be able to visit the original work
                through this link.
              </p>

            </div>


            {/* COVER IMAGE */}

            <div className="mt-7">

              <label className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                <ImagePlus size={12} />

                Cover Image

                <span className="font-normal normal-case tracking-normal">
                  · optional
                </span>
              </label>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[color:var(--line)] bg-[color:var(--pink-soft)]/30 px-6 py-8 text-center transition hover:bg-[color:var(--pink-soft)]">

                <ImagePlus
                  size={22}
                  className="text-[color:var(--pink-deep)]"
                />

                <span className="mt-3 text-xs font-semibold">
                  {form.image
                    ? form.image.name
                    : "Add a cover image"}
                </span>

                <span className="mt-1 text-[10px] text-[color:var(--ink-soft)]">
                  Optional · upload an image for the AU
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      image: e.target.files?.[0] || null,
                    })
                  }
                  className="hidden"
                />

              </label>

            </div>


            {/* SHORT DESCRIPTION */}

            <div className="mt-7">

              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Short Description
              </label>

              <textarea
                value={form.short_description}
                onChange={set("short_description")}
                rows={4}
                className={inputStyle}
                placeholder="Give readers a little idea of what the AU is about..."
              />

            </div>


            {/* FULL STORY */}

            <div className="mt-7">

              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Full Story
                <span className="ml-2 font-normal normal-case tracking-normal">
                  · optional
                </span>
              </label>

              <textarea
                value={form.full_story}
                onChange={set("full_story")}
                rows={7}
                className={inputStyle}
                placeholder="Optional — only add the story here if you want it displayed directly on HANEULZ Corner."
              />

            </div>


            {/* =================================================
                COMMUNITY NOTE
            ================================================== */}

            <div className="mt-10 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--pink-soft)]/40 p-6 md:p-7">

              <div className="flex items-center gap-2">

                <ShieldAlert
                  size={15}
                  className="text-[color:var(--pink-deep)]"
                />

                <h2 className="text-[9px] font-bold uppercase tracking-[0.2em]">
                  A little note before you submit ♡
                </h2>

              </div>

              <div className="mt-5 space-y-4 text-xs leading-6 text-[color:var(--ink-soft)]">

                <p>
                  HANEULZ Corner is a fan-made archive created
                  to help others discover AU works and the
                  creators behind them. Please be mindful when
                  submitting and make sure your entry follows
                  our community guidelines.
                </p>

                <p>
                  <strong className="text-[color:var(--ink)]">
                    Please do not submit content that violates
                    HANEULZ Corner's rules.
                  </strong>{" "}
                  Submissions containing inappropriate, harmful,
                  hateful, misleading, or otherwise prohibited
                  content may be rejected or removed.
                </p>

                <p>
                  <strong className="text-[color:var(--ink)]">
                    Creator credit matters.
                  </strong>{" "}
                  The original work remains with its respective
                  creator. HANEULZ Corner does not claim ownership
                  of submitted works, and submitted entries should
                  always lead back to the original source.
                </p>

                <p>
                  By submitting an AU, you acknowledge that it
                  will be reviewed by the HANEULZ Corner admin
                  before being added to the archive. We may edit
                  the listing details, tags, or presentation when
                  needed to keep the archive organized and
                  consistent.
                </p>

                <p>
                  <strong className="text-[color:var(--ink)]">
                    Please submit thoughtfully and respect the
                    creators, the community, and the people
                    represented in the works. ♡
                  </strong>
                </p>

              </div>
            </div>


            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--pink-deep)] py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >

              <Send size={14} />

              {submitting
                ? "Sending to Admin..."
                : "Submit for Review"}

            </button>

            <p className="mt-3 text-center text-[9px] leading-5 text-[color:var(--ink-soft)]">
              Submissions are reviewed before appearing on
              HANEULZ Corner.
            </p>

          </form>
        </Reveal>

      </section>

      <Footer />
    </div>
  );
}
