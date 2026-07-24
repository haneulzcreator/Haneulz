import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, ShieldAlert } from "lucide-react";
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

  const set = (key) => (e) =>
    setForm({
      ...form,
      [key]: e.target.value,
    });

const submit = async (e) => {
  e.preventDefault();

  if (!form.source_url) {
    toast.error("Please add the story link.");
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

    await api.post("/aus", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setForm(empty);

    toast.success("Your AU is waiting for approval. 💗🌩️💙");
  } catch (err) {
    toast.error(formatApiError(err.response?.data?.detail));
  } finally {
    setSubmitting(false);
  }
};

  const inputStyle =
    "w-full rounded-[1.25rem] border border-[color:var(--line)] bg-white/70 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--pink-deep)]";

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            <Sparkles size={14} />
            Contribute
          </p>

          <h1 className="mt-4 font-serif-display text-6xl font-medium">
            Submit an AU
          </h1>

          <p className="mt-6 text-lg text-[color:var(--ink-soft)]">
            Share an alternate universe or headcanon. Add the original link and our admin team will review, tag, and set up the cover before publishing.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="glass mt-10 space-y-5 rounded-[2.5rem] p-8"
          >
            <div>
              <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                required
                value={form.title}
                onChange={set("title")}
                className={inputStyle}
                placeholder="e.g. Coffee Shop AU"
              />
            </div>

            <div>
              <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Author / Creator Name
              </label>
              <input
                value={form.author_name}
                onChange={set("author_name")}
                className={inputStyle}
                placeholder="Leave blank for Anonymous"
              />
            </div>

            <div>
              <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Type
              </label>
              <div className="flex gap-3">
                {[
                  { v: "story", l: "AU Story" },
                  { v: "headcanon", l: "Headcanon" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.v}
                    onClick={() => setForm({ ...form, au_type: item.v })}
                    className={`pill-btn rounded-full px-5 py-2 text-xs uppercase transition-colors ${
                      form.au_type === item.v
                        ? "bg-[color:var(--ink)] text-white"
                        : "border border-[color:var(--line)] bg-white/50 text-[color:var(--ink)] hover:bg-white"
                    }`}
                  >
                    {item.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Source Platform
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { v: "x", l: "X (Twitter)" },
                  { v: "tiktok", l: "TikTok" },
                  { v: "ao3", l: "AO3" },
                  { v: "other", l: "Other" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.v}
                    onClick={() => setForm({ ...form, source: item.v })}
                    className={`pill-btn rounded-full px-5 py-2 text-xs uppercase transition-colors ${
                      form.source === item.v
                        ? "bg-[color:var(--pink-deep)] text-white"
                        : "border border-[color:var(--line)] bg-white/50 text-[color:var(--ink)] hover:bg-white"
                    }`}
                  >
                    {item.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Original Story / Post Link <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="url"
                value={form.source_url}
                onChange={set("source_url")}
                className={inputStyle}
                placeholder="https://x.com/... or https://archiveofourown.org/..."
              />
            </div>

<div>
  <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
    Cover Image (JPG/PNG)
  </label>

  <input
    type="file"
    accept="image/png,image/jpeg,image/jpg"
    className={inputStyle}
    onChange={(e) =>
      setForm({
        ...form,
        image: e.target.files[0],
      })
    }
  />
</div>                              
            <div>
              <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Short Description
              </label>
              <textarea
                value={form.short_description}
                onChange={set("short_description")}
                rows={3}
                className={inputStyle}
                placeholder="A short summary or teaser..."
              />
            </div>

            <div>
              <label className="label block mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Full Story (Optional)
              </label>
              <textarea
                value={form.full_story}
                onChange={set("full_story")}
                rows={6}
                className={inputStyle}
                placeholder="Only add if you want the text displayed inside HANEULZ directly"
              />
            </div>

            {/* Disclaimer Box */}
            <div className="space-y-2 rounded-2xl border border-[color:var(--line)] bg-white/40 p-5 text-xs text-[color:var(--ink-soft)]">
              <p className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[color:var(--ink)]">
                <ShieldAlert size={14} /> Disclaimer & Community Notice
              </p>
              <p>
                Sky Archive serves solely as a directory for community-recommended works. All original credit belongs entirely to respective authors and creators; we claim no ownership.
              </p>
              <p>
                All content is strictly fictional and does not reflect real-life events, real individuals, or actual personalities.
              </p>
              <p>
                <strong>Creators & Copyright:</strong> If you are a creator and wish to have your entry updated or removed, please leave a message and we will fulfill your request promptly. Broken links will also be removed upon review. ☁️
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="pill-btn mt-4 w-full rounded-full bg-[color:var(--pink-deep)] py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? "Sending to Admin..." : "Submit for Review"}
            </button>
          </form>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
