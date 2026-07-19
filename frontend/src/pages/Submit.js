import { useState } from "react";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { api, formatApiError } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const empty = {
  title: "",
  author_name: "",
  short_description: "",
  full_story: "",
  cover_image_url: "",
  tags: "",
  au_type: "story",
  source: "x",
};

export default function Submit() {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/aus", {
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      });
      setForm(empty);
      toast.success("Your AU is on its way! It'll appear after a quick review. 🌸");
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail));
    } finally {
      setSubmitting(false);
    }
  };

  const input =
    "w-full rounded-[1.25rem] border border-[color:var(--line)] bg-white/70 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--pink-deep)]";

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            <Sparkles size={14} /> Contribute
          </p>
          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-7xl">
            Submit an AU
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Share your alternate universe or headcanon for JL & Han. Every submission is reviewed
            with love before it goes live.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass mt-10 space-y-5 rounded-[2.5rem] p-8" data-testid="submit-au-form">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Title</label>
              <input required value={form.title} onChange={set("title")} className={input} data-testid="au-title-input" placeholder="Coffee Shop AU" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Your name / handle</label>
              <input required value={form.author_name} onChange={set("author_name")} className={input} data-testid="au-author-input" placeholder="@yourhandle" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Type</label>
              <div className="flex gap-3">
                {[
                  { v: "story", l: "AU Story" },
                  { v: "headcanon", l: "Headcanon" },
                ].map((o) => (
                  <button
                    type="button"
                    key={o.v}
                    onClick={() => setForm({ ...form, au_type: o.v })}
                    data-testid={`type-${o.v}`}
                    className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
                      form.au_type === o.v ? "bg-[color:var(--ink)] text-white" : "border border-[color:var(--line)]"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Where is this AU from?</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { v: "x", l: "X" },
                  { v: "tiktok", l: "TikTok" },
                  { v: "ao3", l: "AO3" },
                  { v: "other", l: "Other" },
                ].map((o) => (
                  <button
                    type="button"
                    key={o.v}
                    onClick={() => setForm({ ...form, source: o.v })}
                    data-testid={`source-${o.v}`}
                    className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
                      form.source === o.v ? "bg-[color:var(--blue-deep)] text-white" : "border border-[color:var(--line)]"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Short description</label>
              <textarea required value={form.short_description} onChange={set("short_description")} rows={2} className={input} data-testid="au-short-input" placeholder="A one-liner to hook readers…" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Full story</label>
              <textarea required value={form.full_story} onChange={set("full_story")} rows={8} className={input} data-testid="au-full-input" placeholder="Write your AU here…" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Cover image URL (optional)</label>
              <input value={form.cover_image_url} onChange={set("cover_image_url")} className={input} data-testid="au-cover-input" placeholder="https://…" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">Tags (comma separated)</label>
              <input value={form.tags} onChange={set("tags")} className={input} data-testid="au-tags-input" placeholder="fluff, slow burn" />
            </div>
            <button
              type="submit"
              disabled={submitting}
              data-testid="submit-au-btn"
              className="pill-btn w-full rounded-full bg-[color:var(--pink-deep)] py-4 text-sm uppercase tracking-widest text-white disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Submit for review"}
            </button>
          </form>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
