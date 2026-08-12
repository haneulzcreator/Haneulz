import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  ShieldAlert,
  Heart,
  Link as LinkIcon,
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

    if (!form.source_url.trim()) {
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

      toast.success(
        "Submitted! Your work is now waiting for review. 💗"
      );
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
    "w-full rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--ink-soft)]/60 focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]";

  const labelStyle =
    "mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink-soft)]";

  return (
    <div className="pt-28 md:pt-32">

      {/* =========================================================
          HEADER
      ========================================================== */}

      <section className="mx-auto max-w-4xl px-5 md:px-6">

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white px-7 py-10 md:px-12 md:py-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--pink-soft)] opacity-70 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
                <Sparkles size={15} />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  HANEULZ Corner
                </span>
              </div>

              <h1 className="mt-5 max-w-2xl font-serif-display text-5xl font-medium leading-[0.95] md:text-7xl">
                Share something
                <br />
                worth finding.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
                Found a work you think belongs in the Corner?
                Send it our way and help other HANEULZ fans
                discover something new.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full bg-[color:var(--pink-soft)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em]">
                  Community submissions
                </span>

                <span className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
                  Reviewed before posting
                </span>

              </div>

            </div>
          </div>
        </Reveal>


        {/* =======================================================
            FORM
        ======================================================== */}

        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            className="mt-7 overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white"
          >

            {/* FORM HEADER */}

            <div className="border-b border-[color:var(--line)] px-7 py-7 md:px-10">

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[color:var(--pink-deep)]">
                Submission form
              </p>

              <h2 className="mt-2 font-serif-display text-3xl">
                Tell us about the work
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-[color:var(--ink-soft)]">
                Fill in the details below and include the
                original link so readers can find the work.
              </p>

            </div>


            <div className="space-y-7 px-7 py-8 md:px-10 md:py-10">

              {/* TITLE */}

              <div>
                <label className={labelStyle}>
                  Title <span className="text-red-500">*</span>
                </label>

                <input
                  required
                  value={form.title}
                  onChange={set("title")}
                  className={inputStyle}
                  placeholder="Give the work its title"
                />
              </div>


              {/* AUTHOR */}

              <div>
                <label className={labelStyle}>
                  Author / Creator
                </label>

                <input
                  value={form.author_name}
                  onChange={set("author_name")}
                  className={inputStyle}
                  placeholder="Leave blank if unknown"
                />
              </div>


              {/* TYPE */}

              <div>
                <label className={labelStyle}>
                  Content type
                </label>

                <div className="flex flex-wrap gap-2">

                  {[
                    { v: "story", l: "Story" },
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
                      className={`rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
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
                <label className={labelStyle}>
                  Source platform
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
                      className={`rounded-full px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
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


              {/* ORIGINAL LINK */}

              <div>

                <label className={labelStyle}>
                  Original work link{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <LinkIcon
                    size={16}
                    className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[color:var(--ink-soft)]"
                  />

                  <input
                    required
                    type="url"
                    value={form.source_url}
                    onChange={set("source_url")}
                    className={`${inputStyle} pl-12`}
                    placeholder="https://..."
                  />

                </div>

              </div>


              {/* COVER IMAGE */}

              <div>

                <label className={labelStyle}>
                  Cover image
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[color:var(--line)] bg-[color:var(--pink-soft)]/30 px-6 py-8 text-center transition hover:bg-[color:var(--pink-soft)]">

                  <Sparkles
                    size={18}
                    className="text-[color:var(--pink-deep)]"
                  />

                  <span className="mt-3 text-xs font-semibold">
                    {form.image
                      ? form.image.name
                      : "Choose an image"}
                  </span>

                  <span className="mt-1 text-[10px] text-[color:var(--ink-soft)]">
                    Optional
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

              <div>

                <label className={labelStyle}>
                  Short description
                </label>

                <textarea
                  value={form.short_description}
                  onChange={set("short_description")}
                  rows={4}
                  className={inputStyle}
                  placeholder="Give readers a little idea of what the work is about..."
                />

              </div>


              {/* FULL STORY */}

              <div>

                <label className={labelStyle}>
                  Full story
                </label>

                <textarea
                  value={form.full_story}
                  onChange={set("full_story")}
                  rows={7}
                  className={inputStyle}
                  placeholder="Optional — only use this if you want the text displayed directly on HANEULZ Corner."
                />

              </div>


              {/* =================================================
                  SUBMISSION NOTICE
              ================================================== */}

              <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--pink-soft)]/40 p-6 md:p-7">

                <div className="flex items-start gap-3">

                  <div className="mt-0.5 shrink-0 rounded-full bg-white p-2.5 text-[color:var(--pink-deep)]">
                    <ShieldAlert size={16} />
                  </div>

                  <div className="min-w-0">

                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)]">
                      Submission Notice
                    </h3>

                    <div className="mt-4 space-y-4 text-xs leading-6 text-[color:var(--ink-soft)]">

                      <p>
                        Please be mindful when submitting work to
                        <strong className="font-semibold text-[color:var(--ink)]">
                          {" "}HANEULZ Corner.
                        </strong>{" "}
                        HANEULZ Corner is a fan-made community
                        archive and is not affiliated with or
                        officially connected to the artists,
                        creators, platforms, or individuals
                        mentioned in submitted works.
                      </p>

                      <p>
                        The original work remains the property of
                        its respective creator. HANEULZ Corner does
                        not claim ownership of submitted works, and
                        the original source link is provided so
                        readers can visit the creator's work.
                      </p>

                      <div>

                        <p className="mb-2 font-semibold text-[color:var(--ink)]">
                          When submitting, please keep the following
                          in mind:
                        </p>

                        <ul className="space-y-2">

                          <NoticeItem>
                            Keep submissions relevant to the
                            HANEULZ Corner community.
                          </NoticeItem>

                          <NoticeItem>
                            Do not submit content intended to
                            harass, attack, threaten, or target
                            others.
                          </NoticeItem>

                          <NoticeItem>
                            Do not use submissions to start
                            fanwars, spread unnecessary drama,
                            or deliberately provoke other fans.
                          </NoticeItem>

                          <NoticeItem>
                            Do not submit abusive, hateful,
                            deliberately misleading, or harmful
                            content.
                          </NoticeItem>

                          <NoticeItem>
                            Do not intentionally misrepresent
                            another person's work or information.
                          </NoticeItem>

                          <NoticeItem>
                            Please use the correct source platform
                            and original work link.
                          </NoticeItem>

                          <NoticeItem>
                            Respect the creators and communities
                            where the work was originally shared.
                          </NoticeItem>

                        </ul>

                      </div>

                      <p>
                        All submissions are subject to review, and
                        submission does not guarantee publication.
                        HANEULZ Corner may decline or make reasonable
                        presentation changes to submissions that do
                        not follow the website's community
                        guidelines.
                      </p>

                      <div className="border-t border-[color:var(--line)] pt-4">

                        <div className="flex items-start gap-2">

                          <Heart
                            size={14}
                            className="mt-1 shrink-0 text-[color:var(--pink-deep)]"
                          />

                          <p className="font-medium text-[color:var(--ink)]">
                            By submitting, you agree to follow these
                            guidelines and understand that your
                            submission will be reviewed before
                            appearing on HANEULZ Corner.
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[color:var(--pink-deep)] py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting
                  ? "Sending for review..."
                  : "Submit to HANEULZ Corner"}
              </button>

            </div>
          </form>
        </Reveal>

      </section>

      <Footer />
    </div>
  );
}


/* ================================================================
   NOTICE ITEM
================================================================ */

function NoticeItem({ children }) {
  return (
    <li className="flex gap-3">

      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--pink-deep)]" />

      <span>{children}</span>

    </li>
  );
}
