import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, Send } from "lucide-react";
import { toast } from "sonner";
import { api, formatApiError, DEFAULT_COVERS } from "../lib/api";
import { Reveal } from "../components/Reveal";
import BookmarkButton from "../components/BookmarkButton";
import Footer from "../components/Footer";

export default function AUDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [au, setAu] = useState(null);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api.get(`/aus/${id}`).then((r) => setAu(r.data)).catch(() => navigate("/aus"));
    api.get(`/aus/${id}/comments`).then((r) => setComments(r.data)).catch(() => {});
  }, [id, navigate]);

  const like = async () => {
    if (liked) return;
    const { data } = await api.post(`/aus/${id}/like`);
    setAu((a) => ({ ...a, likes: data.likes }));
    setLiked(true);
  };

  const submitComment = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSubmitting(true);
    try {
      await api.post(`/aus/${id}/comments`, { author_name: name, text });
      setName("");
      setText("");
      toast.success("Comment sent! It'll appear once approved. 💌");
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail));
    } finally {
      setSubmitting(false);
    }
  };

  if (!au) return <div className="grid min-h-screen place-items-center text-[color:var(--ink-soft)]">Loading…</div>;
  const cover = au.cover_image_url || DEFAULT_COVERS[0];

  return (
    <div className="pt-28">
      <article className="mx-auto max-w-3xl px-6">
        <Link to="/aus" className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
          <ArrowLeft size={14} /> Back to library
        </Link>

        <Reveal className="mt-8">
          <span className="text-xs uppercase tracking-widest text-[color:var(--pink-deep)]">
            {au.au_type === "headcanon" ? "Headcanon" : "AU Story"} · by {au.author_name}
          </span>
          <h1 className="mt-3 font-serif-display text-5xl font-medium leading-tight md:text-7xl">
            {au.title}
          </h1>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 overflow-hidden rounded-[2.5rem]"
        >
          <img src={cover} alt={au.title} className="max-h-[460px] w-full object-cover" />
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {au.tags?.map((t) => (
            <span key={t} className="rounded-full bg-[color:var(--blue)] px-3 py-1 text-[0.65rem] uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-8 font-serif-display text-2xl italic leading-snug text-[color:var(--ink-soft)]">
          {au.short_description}
        </p>

        <div className="mt-8 space-y-5 text-lg leading-relaxed" data-testid="au-full-story">
          {au.full_story.split("\n").filter(Boolean).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={like}
            data-testid="au-like-btn"
            className="pill-btn flex items-center gap-2 rounded-full bg-[color:var(--pink)] px-6 py-3 text-sm uppercase tracking-widest"
          >
            <Heart size={16} fill={liked ? "var(--pink-deep)" : "none"} className="text-[color:var(--pink-deep)]" />
            {au.likes} loves
          </button>
          <BookmarkButton id={au.id} title={au.title} variant="pill" />
        </div>

        {/* Comments */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12" data-testid="comments-section">
          <h2 className="font-serif-display text-4xl font-medium">Fan notes</h2>

          <form onSubmit={submitComment} className="glass mt-6 rounded-[2rem] p-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name / @handle"
              data-testid="comment-name-input"
              className="w-full rounded-full border border-[color:var(--line)] bg-white/60 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--pink-deep)]"
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Leave a soft note…"
              rows={3}
              data-testid="comment-text-input"
              className="mt-3 w-full rounded-[1.5rem] border border-[color:var(--line)] bg-white/60 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--pink-deep)]"
            />
            <button
              type="submit"
              disabled={submitting}
              data-testid="comment-submit-btn"
              className="pill-btn mt-4 flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-xs uppercase tracking-widest text-white disabled:opacity-50"
            >
              <Send size={14} /> {submitting ? "Sending…" : "Post note"}
            </button>
          </form>

          <div className="mt-8 space-y-4">
            {comments.length === 0 && (
              <p className="text-sm text-[color:var(--ink-soft)]">No notes yet — leave the first one.</p>
            )}
            {comments.map((c) => (
              <div key={c.id} className="rounded-[1.5rem] border border-[color:var(--line)] bg-white/50 p-5" data-testid={`comment-${c.id}`}>
                <p className="text-sm font-medium">{c.author_name}</p>
                <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
