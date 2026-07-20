import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, ExternalLink } from "lucide-react";
import { api, formatApiError } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const empty = {
  title: "",
  author_name: "",
  short_description: "",
  full_story: "",
  cover_image_url: "",
  source_url: "",
  tags: "",
  au_type: "story",
  source: "x",
};

export default function Submit() {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState(false);

  const set = (k) => (e) =>
    setForm({ ...form, [k]: e.target.value });


  const submit = async (e) => {
    e.preventDefault();

    if (!form.source_url) {
      toast.error("Please add the story link.");
      return;
    }

    setSubmitting(true);

    try {
      await api.post("/aus", {
        ...form,
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      });

      setForm(empty);
      setPreview(false);

      toast.success(
        "Your AU is waiting for approval. 🌸"
      );

    } catch (err) {
      toast.error(
        formatApiError(err.response?.data?.detail)
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
            Share your alternate universe or headcanon.
            Every submission will be reviewed before appearing
            in the library.
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
Your name / handle
</label>

<input
required
value={form.author_name}
onChange={set("author_name")}
className={input}
placeholder="@username"
/>
</div>




<div>
<label className="label">
Where is this AU from?
</label>

<div className="flex flex-wrap gap-3">

{[
{x:"x",l:"X"},
{v:"tiktok",l:"TikTok"},
{v:"ao3",l:"AO3"},
{v:"other",l:"Other"}

].map((o)=>(
<button
type="button"
key={o.v}
onClick={()=>setForm({...form,source:o.v})}

className={`pill-btn rounded-full px-5 py-2 text-xs uppercase ${
form.source===o.v
?"bg-[color:var(--blue-deep)] text-white"
:"border"
}`}
>

{o.l}

</button>
))}

</div>
</div>




<div>
<label className="label">
Story / Post Link
</label>

<input
required
value={form.source_url}
onChange={set("source_url")}
className={input}
placeholder="https://x.com/... or https://archiveofourown.org/..."
/>

<p className="mt-2 text-xs text-gray-400">
This link will become the Read button.
</p>

</div>




<div>
<label className="label">
Thumbnail Image URL
</label>

<input
required
value={form.cover_image_url}
onChange={set("cover_image_url")}
className={input}
placeholder="https://image-url.com"
/>

</div>




<div>
<label className="label">
Short description
</label>

<textarea
required
value={form.short_description}
onChange={set("short_description")}
rows={3}
className={input}
placeholder="A short summary..."
/>

</div>




<div>
<label className="label">
Full story (optional)
</label>

<textarea
value={form.full_story}
onChange={set("full_story")}
rows={6}
className={input}
placeholder="Only if you want the story displayed inside HANEULZ"
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
type="button"
onClick={()=>setPreview(true)}
className="pill-btn w-full rounded-full border py-4 text-sm uppercase tracking-widest"
>

Preview

</button>




<button
type="submit"
disabled={submitting}
className="pill-btn w-full rounded-full bg-[color:var(--pink-deep)] py-4 text-sm uppercase tracking-widest text-white"
>

{submitting
?"Sending..."
:"Submit for review"}

</button>



</form>

        </Reveal>



{preview && (

<div className="glass mt-8 rounded-[2rem] p-6">

<img
src={form.cover_image_url}
className="rounded-2xl"
/>


<h2 className="mt-4 font-serif-display text-3xl">
{form.title}
</h2>


<p className="mt-2">
{form.short_description}
</p>



<a
href={form.source_url}
target="_blank"
className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[color:var(--pink-deep)] py-3 text-white"
>

<ExternalLink size={14}/>
Read Preview

</a>

</div>

)}



      </section>


      <Footer/>

    </div>
  );
}
