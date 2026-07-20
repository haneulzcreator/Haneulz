import { useState } from "react";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { api, formatApiError } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const empty = {
  title: "",
  author_name: "Anonymous",
  short_description: "",
  full_story: "",
  source_url: "",
  tags: "",
  au_type: "story",
  source: "x",
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
      await api.post("/aus", {
        title: form.title,
        author_name: "Anonymous",

        short_description: form.short_description,

        full_story: form.full_story,

        source_url: form.source_url,

        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),

        au_type: form.au_type,

        source: form.source,
      });

      setForm(empty);

      toast.success(
        "Your AU is waiting for approval. 💗🌩️💙"
      );

    } catch (err) {
      toast.error(
        formatApiError(
          err.response?.data?.detail
        )
      );

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
            <Sparkles size={14}/>
            Contribute
          </p>

          <h1 className="mt-4 font-serif-display text-6xl font-medium">
            Submit an AU
          </h1>

          <p className="mt-6 text-lg text-[color:var(--ink-soft)]">
            Share an alternate universe or headcanon.
            Add the original link and our admin will review
            and add the correct author credit before publishing.
          </p>

        </Reveal>


        <Reveal delay={0.1}>

          <form
            onSubmit={submit}
            className="glass mt-10 space-y-5 rounded-[2.5rem] p-8"
          >

            <div>
              <label className="label">
                Title
              </label>

              <input
                required
                value={form.title}
                onChange={set("title")}
                className={input}
                placeholder="Coffee Shop AU"
              />
            </div>


            <div>
              <label className="label">
                Type
              </label>

              <div className="flex gap-3">

                {[
                  {
                    v:"story",
                    l:"AU Story"
                  },
                  {
                    v:"headcanon",
                    l:"Headcanon"
                  }

                ].map((item)=>(
                  <button
                    type="button"
                    key={item.v}
                    onClick={() =>
                      setForm({
                        ...form,
                        au_type:item.v
                      })
                    }

                    className={`pill-btn rounded-full px-5 py-2 text-xs uppercase ${
                      form.au_type === item.v
                      ? "bg-[color:var(--ink)] text-white"
                      : "border"
                    }`}
                  >
                    {item.l}
                  </button>
                ))}

              </div>
            </div>


            <div>
              <label className="label">
                Source
              </label>

              <div className="flex flex-wrap gap-3">

                {[
                  {
                    v:"x",
                    l:"X"
                  },
                  {
                    v:"tiktok",
                    l:"TikTok"
                  },
                  {
                    v:"ao3",
                    l:"AO3"
                  },
                  {
                    v:"other",
                    l:"Other"
                  }

                ].map((item)=>(
                  <button
                    type="button"
                    key={item.v}

                    onClick={() =>
                      setForm({
                        ...form,
                        source:item.v
                      })
                    }

                    className={`pill-btn rounded-full px-5 py-2 text-xs uppercase ${
                      form.source === item.v
                      ? "bg-[color:var(--blue-deep)] text-white"
                      : "border"
                    }`}
                  >
                    {item.l}
                  </button>
                ))}

              </div>
            </div>


            <div>
              <label className="label">
                Original Story / Post Link
              </label>

              <input
                required
                value={form.source_url}
                onChange={set("source_url")}
                className={input}
                placeholder="https://x.com/... or https://archiveofourown.org/..."
              />

              <p className="mt-2 text-xs text-gray-400">
                Admin will verify and add the original creator credit.
              </p>
            </div>


            <div>
              <label className="label">
                Short Description
              </label>

              <textarea
                value={form.short_description}
                onChange={set("short_description")}
                rows={3}
                className={input}
                placeholder="A short summary..."
              />
            </div>


            <div>
              <label className="label">
                Full Story (optional)
              </label>

              <textarea
                value={form.full_story}
                onChange={set("full_story")}
                rows={6}
                className={input}
                placeholder="Only add if you want it displayed inside HANEULZ"
              />
            </div>


            <div>
              <label className="label">
                Tags
              </label>

              <input
                value={form.tags}
                onChange={set("tags")}
                className={input}
                placeholder="fluff, angst, slow burn"
              />
            </div>


            <button
              type="submit"
              disabled={submitting}
              className="pill-btn w-full rounded-full bg-[color:var(--pink-deep)] py-4 text-sm uppercase tracking-widest text-white"
            >
              {submitting
                ? "Sending..."
                : "Submit for review"}
            </button>


          </form>

        </Reveal>

      </section>

      <Footer/>

    </div>
  );
}
