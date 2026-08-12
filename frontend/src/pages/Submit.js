import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  Link2,
  ImagePlus,
  FileText,
  Heart,
  ShieldAlert,
  ArrowRight,
  Check,
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

const sources = [
  { v: "x", l: "X" },
  { v: "tiktok", l: "TikTok" },
  { v: "ao3", l: "AO3" },
  { v: "other", l: "Other" },
];

const types = [
  { v: "story", l: "AU Story" },
  { v: "headcanon", l: "Headcanon" },
];

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
      toast.error("Please add the original story or post link.");
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

      toast.success("Your AU is waiting for approval. 💗");
    } catch (err) {
      toast.error(
        formatApiError(err.response?.data?.detail)
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle =
    "w-full rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--ink-soft)]/60 focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]";

  const sectionTitle =
    "mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[color:var(--pink-deep)]";

  const labelStyle =
    "mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]";

  return (
    <div className="min-h-screen pt-28 md:pt-32">

      <section className="mx-auto max-w-3xl px-5 md:px-6">

        {/* =====================================================
            HERO
        ===================================================== */}

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white px-6 py-10 md:px-10 md:py-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--pink-soft)] opacity-70 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[color:var(--pink-soft)] opacity-40 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
                <Sparkles size={14} />

                <p className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  HANEULZ Corner
                </p>
              </div>

              <h1 className="mt-5 max-w-xl font-serif-display text-5xl font-medium leading-[0.95] md:text-7xl">
                Share a little
                <br />
                world. ♡
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
                Found an AU or headcanon that deserves a little
                corner here? Add the original link and a few
                details below. We'll take care of the rest.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                <div className="flex items-center gap-2 rounded-full bg-[color:var(--pink-soft)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em]">
                  <Heart size={12} />
                  Community archive
                </div>

                <div className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
                  Original links required
                </div>

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
            className="mt-6 overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white"
          >

            {/* -------------------------------------------------
                ABOUT THE AU
            ------------------------------------------------- */}

            <div className="p-6 md:p-8">

              <div className="mb-7">
                <p className={sectionTitle}>
                  01 · About the AU
                </p>

                <h2 className="font-serif-display text-3xl">
                  Tell us about it.
                </h2>

                <p className="mt-2 text-xs leading-5 text-[color:var(--ink-soft)]">
                  Just the basics so we know what we're looking at.
                </p>
              </div>


              <div className="space-y-5">

                {/* TITLE */}

                <div>
                  <label className={labelStyle}>
                    Title <span className="text-[color:var(--pink-deep)]">*</span>
                  </label>

                  <input
                    required
                    value={form.title}
                    onChange={set("title")}
                    className={inputStyle}
                    placeholder="e.g. Coffee Shop AU"
                  />
                </div>


                {/* CREATOR */}

                <div>
                  <label className={labelStyle}>
                    Author / Creator
                  </label>

                  <input
                    value={form.author_name}
                    onChange={set("author_name")}
                    className={inputStyle}
                    placeholder="Leave blank for Anonymous"
                  />
                </div>


                {/* TYPE */}

                <div>
                  <label className={labelStyle}>
                    What kind of AU is it?
                  </label>

                  <div className="flex flex-wrap gap-2">

                    {types.map((item) => (
                      <button
                        type="button"
                        key={item.v}
                        onClick={() =>
                          setForm({
                            ...form,
                            au_type: item.v,
                          })
                        }
                        className={`rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                          form.au_type === item.v
                            ? "bg-[color:var(--ink)] text-white"
                            : "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                        }`}
                      >
                        {form.au_type === item.v && (
                          <Check
                            size={11}
                            className="mr-1.5 inline"
                          />
                        )}

                        {item.l}
                      </button>
                    ))}

                  </div>
                </div>

              </div>
            </div>


            {/* -------------------------------------------------
                ORIGINAL SOURCE
            ------------------------------------------------- */}

            <div className="border-t border-[color:var(--line)] p-6 md:p-8">

              <div className="mb-7">
                <p className={sectionTitle}>
                  02 · Original source
                </p>

                <h2 className="font-serif-display text-3xl">
                  Where can we find it?
                </h2>

                <p className="mt-2 text-xs leading-5 text-[color:var(--ink-soft)]">
                  The original link lets visitors find the actual
                  post or work.
                </p>
              </div>


              <div className="space-y-5">

                {/* PLATFORM */}

                <div>
                  <label className={labelStyle}>
                    Platform
                  </label>

                  <div className="flex flex-wrap gap-2">

                    {sources.map((item) => (
                      <button
                        type="button"
                        key={item.v}
                        onClick={() =>
                          setForm({
                            ...form,
                            source: item.v,
                          })
                        }
                        className={`rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                          form.source === item.v
                            ? "bg-[color:var(--pink-deep)] text-white"
                            : "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                        }`}
                      >
                        {form.source === item.v && (
                          <Check
                            size={11}
                            className="mr-1.5 inline"
                          />
                        )}

                        {item.l}
                      </button>
                    ))}

                  </div>
                </div>


                {/* LINK */}

                <div>
                  <label className={labelStyle}>
                    Original Story / Post Link{" "}
                    <span className="text-[color:var(--pink-deep)]">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <Link2
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--ink-soft)]"
                    />

                    <input
                      required
                      type="url"
                      value={form.source_url}
                      onChange={set("source_url")}
                      className={`${inputStyle} pl-11`}
                      placeholder="https://x.com/... "
                    />

                  </div>

                  <p className="mt-2 text-[10px] leading-5 text-[color:var(--ink-soft)]">
                    Please use the link to the original post,
                    thread, story, or work.
                  </p>
                </div>

              </div>
            </div>


            {/* -------------------------------------------------
                DETAILS
            ------------------------------------------------- */}

            <div className="border-t border-[color:var(--line)] p-6 md:p-8">

              <div className="mb-7">
                <p className={sectionTitle}>
                  03 · A little more
                </p>

                <h2 className="font-serif-display text-3xl">
                  Add some details.
                </h2>

                <p className="mt-2 text-xs leading-5 text-[color:var(--ink-soft)]">
                  These help make the archive entry feel complete.
                </p>
              </div>


              <div className="space-y-5">

                {/* IMAGE */}

                <div>
                  <label className={labelStyle}>
                    Cover Image · Optional
                  </label>

                  <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[color:var(--line)] bg-[color:var(--pink-soft)]/30 px-6 py-8 text-center transition hover:bg-[color:var(--pink-soft)]">

                    <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-[color:var(--pink-deep)] shadow-sm">
                      <ImagePlus size={18} />
                    </div>

                    <p className="mt-4 text-xs font-semibold">
                      {form.image
                        ? form.image.name
                        : "Choose a cover image"}
                    </p>

                    <p className="mt-1 text-[10px] text-[color:var(--ink-soft)]">
                      JPG, PNG, or another image format
                    </p>

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

                <div>
                  <label className={labelStyle}>
                    Short Description
                  </label>

                  <textarea
                    value={form.short_description}
                    onChange={set("short_description")}
                    rows={4}
                    className={`${inputStyle} resize-none`}
                    placeholder="Give us a little teaser..."
                  />
                </div>


                {/* FULL STORY */}

                <div>
                  <label className={labelStyle}>
                    Full Story · Optional
                  </label>

                  <textarea
                    value={form.full_story}
                    onChange={set("full_story")}
                    rows={7}
                    className={`${inputStyle} resize-none`}
                    placeholder="Only add this if you want the story text displayed directly on HANEULZ Corner."
                  />

                  <p className="mt-2 flex items-center gap-1.5 text-[10px] text-[color:var(--ink-soft)]">
                    <FileText size={11} />
                    This field is completely optional.
                  </p>
                </div>

              </div>
            </div>


            {/* -------------------------------------------------
                COMMUNITY NOTICE
            ------------------------------------------------- */}

            <div className="border-t border-[color:var(--line)] p-6 md:p-8">

              <div className="rounded-[1.75rem] bg-[color:var(--pink-soft)]/45 p-6">

                <div className="flex items-start gap-3">

                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[color:var(--pink-deep)]">
                    <ShieldAlert size={16} />
                  </div>

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)]">
                      Before you submit
                    </p>

                    <h3 className="mt-1 font-serif-display text-2xl">
                      A little community note ♡
                    </h3>

                  </div>

                </div>


                <div className="mt-5 space-y-3 text-xs leading-6 text-[color:var(--ink-soft)]">

                  <p>
                    HANEULZ Corner is a community archive for
                    HANEULZ AUs, headcanons, and fan-created
                    stories.
                  </p>

                  <p>
                    Please include the original link so anyone
                    viewing an entry can easily find the original
                    post or work.
                  </p>

                  <p>
                    HANEULZ Corner does not claim ownership of
                    the works listed here. The original creator
                    remains credited through their provided
                    source.
                  </p>

                  <p>
                    If you're the creator of a work listed here
                    and would like information changed or an
                    entry removed, you can contact us and we'll
                    review your request.
                  </p>

                </div>

              </div>

            </div>


            {/* -------------------------------------------------
                SUBMIT
            ------------------------------------------------- */}

            <div className="border-t border-[color:var(--line)] bg-[color:var(--pink-soft)]/20 p-6 md:p-8">

              <button
                type="submit"
                disabled={submitting}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--pink-deep)] py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting
                  ? "Sending to Admin..."
                  : "Submit for Review"}

                {!submitting && (
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>

              <p className="mt-4 text-center text-[9px] uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
                Submissions are reviewed before appearing in
                the archive.
              </p>

            </div>

          </form>
        </Reveal>

      </section>

      <Footer />
    </div>
  );
}
