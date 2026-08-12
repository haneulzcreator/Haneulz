import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, ShieldAlert, Link2, ImagePlus } from "lucide-react";
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
  const [agreed, setAgreed] = useState(false);

  const set = (key) => (e) =>
    setForm({
      ...form,
      [key]: e.target.value,
    });

  const submit = async (e) => {
    e.preventDefault();

    if (!form.source_url) {
      toast.error("Please add the original story or post link.");
      return;
    }

    if (!agreed) {
      toast.error("Please read and agree to the community notice.");
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
      formData.append("short_description", form.short_description);
      formData.append("full_story", form.full_story);
      formData.append("source_url", form.source_url);
      formData.append("au_type", form.au_type);
      formData.append("source", form.source);

      if (form.image) {
        formData.append("image", form.image);
      }

      await api.post("/aus", formData);

      setForm(empty);
      setAgreed(false);

      toast.success("Your AU is waiting for approval. ♡");
    } catch (err) {
      toast.error(
        formatApiError(
          err.response?.data?.detail || "Something went wrong."
        )
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle =
    "w-full rounded-2xl border border-[color:var(--line)] bg-white px-5 py-3.5 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--ink-soft)]/60 focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]";

  const optionButton =
    "rounded-full px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] transition";

  return (
    <div className="min-h-screen pt-28 md:pt-32">

      <section className="mx-auto max-w-3xl px-5 md:px-6">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white px-6 py-12 md:px-10 md:py-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--pink-soft)] opacity-70 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-8 font-serif-display text-7xl text-[color:var(--pink-deep)]/10">
              ♡
            </div>

            <div className="relative">

              <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
                <Sparkles size={14} />

                <p className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  Haneulz Corner
                </p>
              </div>

              <h1 className="mt-5 max-w-xl font-serif-display text-5xl font-medium leading-[0.95] md:text-7xl">
                Leave a little
                <br />
                story here.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
                Have an AU you'd like to share with the Corner?
                Send it our way and we'll take a look before it
                joins the collection.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full bg-[color:var(--pink-soft)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em]">
                  Fan submissions
                </span>

                <span className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[color:var(--ink-soft)]">
                  Reviewed before publishing
                </span>

              </div>

            </div>
          </div>
        </Reveal>


        {/* =====================================================
            FORM
        ===================================================== */}

        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            className="mt-7 space-y-7 rounded-[2.5rem] border border-[color:var(--line)] bg-white p-6 md:p-9"
          >

            {/* TITLE */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                AU Title <span className="text-[color:var(--pink-deep)]">*</span>
              </label>

              <input
                required
                value={form.title}
                onChange={set("title")}
                className={inputStyle}
                placeholder="e.g. Coffee Shop AU"
              />
            </div>


            {/* AUTHOR */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Creator Name
              </label>

              <input
                value={form.author_name}
                onChange={set("author_name")}
                className={inputStyle}
                placeholder="Your name or username"
              />

              <p className="mt-2 text-[10px] leading-5 text-[color:var(--ink-soft)]">
                Leave blank if you'd prefer to be listed as Anonymous.
              </p>
            </div>


            {/* TYPE */}

            <div>
              <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Type
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
                    className={`${optionButton} ${
                      form.au_type === item.v
                        ? "bg-[color:var(--ink)] text-white"
                        : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                    }`}
                  >
                    {item.l}
                  </button>
                ))}

              </div>
            </div>


            {/* SOURCE */}

            <div>
              <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Where is it posted?
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
                    className={`${optionButton} ${
                      form.source === item.v
                        ? "bg-[color:var(--pink-deep)] text-white"
                        : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                    }`}
                  >
                    {item.l}
                  </button>
                ))}

              </div>
            </div>


            {/* LINK */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                <Link2 size={12} />
                Original Story / Post Link
                <span className="text-[color:var(--pink-deep)]">*</span>
              </label>

              <input
                required
                type="url"
                value={form.source_url}
                onChange={set("source_url")}
                className={inputStyle}
                placeholder="https://x.com/... or https://archiveofourown.org/..."
              />

              <p className="mt-2 text-[10px] leading-5 text-[color:var(--ink-soft)]">
                This link will be used to credit the original post
                and help visitors find the source.
              </p>
            </div>


            {/* COVER */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                <ImagePlus size={12} />
                Cover Image
                <span className="font-normal normal-case tracking-normal">
                  (optional)
                </span>
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.files?.[0] || null,
                  })
                }
                className={inputStyle}
              />

              <p className="mt-2 text-[10px] leading-5 text-[color:var(--ink-soft)]">
                Don't have one? That's okay. The Haneulz Corner
                team can set up the cover during review.
              </p>
            </div>


            {/* SHORT DESCRIPTION */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Short Description
              </label>

              <textarea
                value={form.short_description}
                onChange={set("short_description")}
                rows={4}
                className={inputStyle}
                placeholder="Give us a little idea of what the AU is about..."
              />
            </div>


            {/* FULL STORY */}

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                Full Story
                <span className="ml-2 font-normal normal-case tracking-normal">
                  (optional)
                </span>
              </label>

              <textarea
                value={form.full_story}
                onChange={set("full_story")}
                rows={7}
                className={inputStyle}
                placeholder="Only add the story here if you'd like it displayed directly on Haneulz Corner."
              />
            </div>


            {/* =================================================
                COMMUNITY NOTICE
            ================================================= */}

            <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--pink-soft)]/35">

              <div className="flex items-center gap-2 border-b border-[color:var(--line)] px-5 py-4">

                <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-[color:var(--pink-deep)]">
                  <ShieldAlert size={14} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em]">
                    Disclaimer & Community Notice
                  </p>

                  <p className="mt-0.5 text-[10px] text-[color:var(--ink-soft)]">
                    Just a little note before you submit ♡
                  </p>
                </div>

              </div>


              <div className="space-y-4 px-5 py-5 text-xs leading-6 text-[color:var(--ink-soft)]">

                <p>
                  <strong className="text-[color:var(--ink)]">
                    Haneulz Corner
                  </strong>{" "}
                  is a fan-made and unofficial space created for
                  fans to share AUs, stories, and creative works.
                  It is not affiliated with, endorsed by, or
                  officially connected to the people or companies
                  represented here.
                </p>

                <p>
                  All submitted works belong to their respective
                  creators. Please provide the{" "}
                  <strong className="text-[color:var(--ink)]">
                    original post or source link
                  </strong>{" "}
                  so proper credit can be given and visitors can
                  easily find the original work.
                </p>

                <p>
                  Haneulz Corner is meant to be a fun, creative,
                  and welcoming space. Please don't use
                  submissions to harass, target, expose, or share
                  private information about anyone.
                </p>

                <p>
                  Submissions may be reviewed before appearing on
                  Haneulz Corner. We may decline or remove
                  submissions that don't follow these guidelines or
                  aren't suitable for the community.
                </p>

                <p className="font-serif-display text-base text-[color:var(--ink)]">
                  Thank you for helping keep Haneulz Corner a cozy
                  little place for everyone's stories. ♡
                </p>

              </div>


              {/* AGREEMENT */}

              <label className="flex cursor-pointer gap-3 border-t border-[color:var(--line)] bg-white/60 px-5 py-4">

                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) =>
                    setAgreed(e.target.checked)
                  }
                  className="mt-1 h-4 w-4 accent-[var(--pink-deep)]"
                />

                <span className="text-[10px] leading-5 text-[color:var(--ink-soft)]">
                  I have read and agree to the Haneulz Corner
                  Community Notice and confirm that my submission
                  follows these guidelines.
                </span>

              </label>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              disabled={submitting}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--ink)] py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--pink-deep)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting
                ? "Sending to Haneulz Corner..."
                : "Submit for Review"}

              {!submitting && (
                <Sparkles
                  size={13}
                  className="transition-transform group-hover:rotate-12"
                />
              )}
            </button>

            <p className="text-center text-[9px] uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
              Your submission will be reviewed before it appears
              in the Corner.
            </p>

          </form>
        </Reveal>

      </section>

      <Footer />
    </div>
  );
}
