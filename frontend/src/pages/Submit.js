import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  Heart,
  Link2,
  FileText,
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
        "Your AU has been sent for review. 💗"
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

  const selectedButton =
    "border-[color:var(--ink)] bg-[color:var(--ink)] text-white shadow-sm";

  const normalButton =
    "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:border-[color:var(--pink-deep)] hover:bg-[color:var(--pink-soft)]";

  return (
    <div className="pt-28 md:pt-32">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mx-auto max-w-4xl px-5 md:px-6">

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white px-6 py-10 md:px-10 md:py-14">

            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--pink-soft)] opacity-70 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[color:var(--pink-soft)] opacity-40 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
                <Sparkles size={15} />

                <p className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  HANEULZ Corner
                </p>
              </div>

              <h1 className="mt-5 max-w-2xl font-serif-display text-5xl font-medium leading-[0.95] md:text-7xl">
                Leave a little
                <br />
                <span className="italic">
                  something here.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
                Found an AU, headcanon, or story that belongs
                in the corner? Send it our way and we’ll take
                a look before it joins the archive.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full bg-[color:var(--pink-soft)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em]">
                  AU submissions
                </span>

                <span className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[color:var(--ink-soft)]">
                  Reviewed before posting
                </span>

              </div>

            </div>
          </div>
        </Reveal>


        {/* ======================================================
            FORM
        ====================================================== */}

        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            className="mt-7"
          >

            {/* --------------------------------------------------
                BASIC INFORMATION
            -------------------------------------------------- */}

            <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 md:p-8">

              <div className="mb-7 flex items-start gap-4">

                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--pink-soft)] text-[color:var(--pink-deep)]">
                  <FileText size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[color:var(--pink-deep)]">
                    The basics
                  </p>

                  <h2 className="mt-1 font-serif-display text-2xl">
                    Tell us about it
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-[color:var(--ink-soft)]">
                    Just the little details we need to organize
                    your submission.
                  </p>
                </div>

              </div>


              {/* TITLE */}

              <div>
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  Title
                  <span className="ml-1 text-[color:var(--pink-deep)]">
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

              <div className="mt-5">
                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  Author / Creator
                </label>

                <input
                  value={form.author_name}
                  onChange={set("author_name")}
                  className={inputStyle}
                  placeholder="Username or creator name"
                />

                <p className="mt-2 text-[10px] text-[color:var(--ink-soft)]">
                  Leave blank if you would like it displayed
                  as Anonymous.
                </p>
              </div>


              {/* TYPE */}

              <div className="mt-6">

                <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  What kind of work is it?
                </label>

                <div className="grid grid-cols-2 gap-2">

                  {[
                    {
                      v: "story",
                      title: "AU Story",
                      description: "A written AU or storyline",
                    },
                    {
                      v: "headcanon",
                      title: "Headcanon",
                      description: "A concept or collection",
                    },
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
                      className={`rounded-2xl border p-4 text-left transition ${
                        form.au_type === item.v
                          ? selectedButton
                          : normalButton
                      }`}
                    >

                      <p className="text-xs font-bold">
                        {item.title}
                      </p>

                      <p
                        className={`mt-1 text-[10px] leading-4 ${
                          form.au_type === item.v
                            ? "text-white/70"
                            : "text-[color:var(--ink-soft)]"
                        }`}
                      >
                        {item.description}
                      </p>

                    </button>

                  ))}

                </div>
              </div>

            </div>


            {/* --------------------------------------------------
                SOURCE
            -------------------------------------------------- */}

            <div className="mt-5 rounded-[2rem] border border-[color:var(--line)] bg-white p-6 md:p-8">

              <div className="mb-6 flex items-start gap-4">

                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--pink-soft)] text-[color:var(--pink-deep)]">
                  <Link2 size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[color:var(--pink-deep)]">
                    Original source
                  </p>

                  <h2 className="mt-1 font-serif-display text-2xl">
                    Where can we find it?
                  </h2>
                </div>

              </div>


              {/* SOURCE PLATFORM */}

              <label className="mb-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                Platform
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
                    className={`rounded-full px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                      form.source === item.v
                        ? "bg-[color:var(--pink-deep)] text-white"
                        : "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                    }`}
                  >
                    {item.l}
                  </button>

                ))}

              </div>


              {/* LINK */}

              <div className="mt-6">

                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  Original Work Link
                  <span className="ml-1 text-[color:var(--pink-deep)]">
                    *
                  </span>
                </label>

                <input
                  required
                  type="url"
                  value={form.source_url}
                  onChange={set("source_url")}
                  className={inputStyle}
                  placeholder="Paste the original link here"
                />

                <p className="mt-2 text-[10px] leading-5 text-[color:var(--ink-soft)]">
                  The link will be attached to the AU so visitors
                  can find the original work.
                </p>

              </div>

            </div>


            {/* --------------------------------------------------
                CONTENT
            -------------------------------------------------- */}

            <div className="mt-5 rounded-[2rem] border border-[color:var(--line)] bg-white p-6 md:p-8">

              <div className="mb-7 flex items-start gap-4">

                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--pink-soft)] text-[color:var(--pink-deep)]">
                  <Heart size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[color:var(--pink-deep)]">
                    A little more
                  </p>

                  <h2 className="mt-1 font-serif-display text-2xl">
                    Help us introduce it
                  </h2>
                </div>

              </div>


              {/* DESCRIPTION */}

              <div>

                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  Short Description
                </label>

                <textarea
                  value={form.short_description}
                  onChange={set("short_description")}
                  rows={4}
                  className={inputStyle}
                  placeholder="Give us a little teaser..."
                />

              </div>


              {/* FULL STORY */}

              <div className="mt-5">

                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  Full Story
                  <span className="ml-2 font-normal normal-case tracking-normal text-[color:var(--ink-soft)]">
                    optional
                  </span>
                </label>

                <textarea
                  value={form.full_story}
                  onChange={set("full_story")}
                  rows={7}
                  className={inputStyle}
                  placeholder="Only add the story here if you want it displayed directly on HANEULZ Corner."
                />

              </div>


              {/* IMAGE */}

              <div className="mt-5">

                <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                  Cover Image
                  <span className="ml-2 font-normal normal-case tracking-normal text-[color:var(--ink-soft)]">
                    optional
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-dashed border-[color:var(--line)] bg-[color:var(--pink-soft)]/30 p-5 transition hover:bg-[color:var(--pink-soft)]">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[color:var(--pink-deep)]">
                    <ImagePlus size={18} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold">
                      {form.image
                        ? form.image.name
                        : "Choose a cover image"}
                    </p>

                    <p className="mt-1 text-[10px] text-[color:var(--ink-soft)]">
                      JPG, PNG, or other image files
                    </p>

                  </div>

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

            </div>


            {/* --------------------------------------------------
                WEBSITE NOTICE
            -------------------------------------------------- */}

            <div className="mt-5 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--pink-soft)]/40 p-6 md:p-7">

              <div className="flex gap-4">

                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[color:var(--pink-deep)]">
                  <Info size={17} />
                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--pink-deep)]">
                    Before you send it
                  </p>

                  <h3 className="mt-1 font-serif-display text-2xl">
                    A small community note
                  </h3>

                  <div className="mt-4 space-y-3 text-xs leading-6 text-[color:var(--ink-soft)]">

                    <p>
                      HANEULZ Corner is a space for fans to
                      discover and share AU-related works.
                    </p>

                    <p>
                      Please be mindful when submitting. Work
                      that goes against HANEULZ Corner’s rules
                      or creates an unsafe or inappropriate
                      environment may not be accepted.
                    </p>

                    <p>
                      Submitting a work does not guarantee that
                      it will be published. Every submission is
                      reviewed before appearing on the site.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* --------------------------------------------------
                SUBMIT
            -------------------------------------------------- */}

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--ink)] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={14} />

              {submitting
                ? "Sending for review..."
                : "Send to HANEULZ Corner"}

            </button>


            <p className="mt-4 text-center text-[9px] leading-5 text-[color:var(--ink-soft)]">
              Your submission will be reviewed before it
              appears on HANEULZ Corner.
            </p>

          </form>
        </Reveal>

      </section>

      <Footer />

    </div>
  );
}
