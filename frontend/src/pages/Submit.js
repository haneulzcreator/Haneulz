import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  ShieldAlert,
  Link2,
  ImagePlus,
  Send,
  Info,
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

        {/* HERO */}
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


        {/* FORM */}
        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            className="mt-7 rounded-[2.5rem] border border-[color:var(--line)] bg-white p-6 md:p-10"
          >

            {/* TITLE */}
            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Title <span className="text-[color:var(--pink-deep)]">*</span>
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


            {/* LINK */}
            <div className="mt-7">
              <label className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                <Link2 size={12} />
                Original Work Link
                <span className="text-[color:var(--pink-deep)]">*</span>
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
                This link will be attached to the entry so readers
                can visit the original work.
              </p>
            </div>


            {/* COVER */}
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
                  Optional · JPG, PNG, or other image formats
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


            {/* DESCRIPTION */}
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


            {/* COMMUNITY NOTES */}
            <div className="mt-10 space-y-4">

              {/* DISCLAIMER */}
              <div className="rounded-[1.75rem] bg-[color:var(--pink-soft)]/60 p-6">

                <div className="flex items-center gap-2">
                  <ShieldAlert
                    size={15}
                    className="text-[color:var(--pink-deep)]"
                  />

                  <h2 className="text-[9px] font-bold uppercase tracking-[0.2em]">
                    Disclaimer ♡
                  </h2>
                </div>

                <p className="mt-4 text-xs leading-6 text-[color:var(--ink-soft)]">
                  HANEULZ Corner is a community-made archive for
                  HANEULZ-related AUs, headcanons, and fan-created
                  works. All works remain attributed to their
                  respective original creators. HANEULZ Corner does
                  not claim ownership of the stories, posts, or
                  artwork featured here.
                </p>

                <p className="mt-3 text-xs leading-6 text-[color:var(--ink-soft)]">
                  Every entry keeps its original source link so
                  readers can visit the creator's original work.
                </p>

              </div>


              {/* SUBMISSION NOTE */}
              <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6">

                <div className="flex items-center gap-2">
                  <Info
                    size={15}
                    className="text-[color:var(--pink-deep)]"
                  />

                  <h2 className="text-[9px] font-bold uppercase tracking-[0.2em]">
                    Before you submit ✦
                  </h2>
                </div>

                <p className="mt-4 text-xs leading-6 text-[color:var(--ink-soft)]">
                  Please make sure the information you provide is
                  accurate and that the original work link is
                  included. Submissions are reviewed before they
                  appear on HANEULZ Corner.
                </p>

                <p className="mt-3 text-xs leading-6 text-[color:var(--ink-soft)]">
                  We may adjust the formatting, tags, description,
                  or cover of an entry to keep the archive
                  organized. The original work itself will not be
                  altered.
                </p>

              </div>


              {/* RULES / WARNING */}
              <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6">

                <div className="flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-[color:var(--pink-deep)]"
                  />

                  <h2 className="text-[9px] font-bold uppercase tracking-[0.2em]">
                    Please keep in mind ✦
                  </h2>
                </div>

                <p className="mt-4 text-xs leading-6 text-[color:var(--ink-soft)]">
                  By submitting a work to HANEULZ Corner, please be
                  mindful of the community and make sure your
                  submission follows the rules and guidelines of
                  the website.
                </p>

                <p className="mt-3 text-xs leading-6 text-[color:var(--ink-soft)]">
                  Please do not submit anything that goes against
                  the rules of HANEULZ Corner or could create
                  unnecessary issues within the community.
                  Submissions that do not follow the guidelines may
                  not be accepted or may be removed after review.
                </p>

              </div>


              {/* CREATOR NOTE */}
              <div className="rounded-[1.75rem] bg-[color:var(--ink)] p-6 text-white">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--pink-soft)]">
                  Creator note ♡
                </p>

                <p className="mt-3 text-xs leading-6 text-white/75">
                  If you're the original creator and want your work
                  corrected or removed from the archive, you can
                  contact us and we'll review the request.
                </p>

              </div>

            </div>


            {/* SUBMIT */}
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

            <p className="text-center text-[9px] leading-5 text-[color:var(--ink-soft)]">
              Your submission will be reviewed before appearing
              on HANEULZ Corner.
            </p>

          </form>
        </Reveal>

      </section>

      <Footer />
    </div>
  );
}
