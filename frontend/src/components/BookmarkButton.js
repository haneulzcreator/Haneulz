import { Bookmark } from "lucide-react";
import { toast } from "sonner";
import { useBookmarks } from "../lib/bookmarks";

export default function BookmarkButton({ id, title, variant = "overlay" }) {
  const { isSaved, toggle } = useBookmarks();
  const saved = isSaved(id);

  const handle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nowSaved = toggle(id);
    toast[nowSaved ? "success" : "message"](
      nowSaved ? `Saved${title ? ` “${title}”` : ""} to your bookmarks 🔖` : "Removed from bookmarks"
    );
  };

  if (variant === "pill") {
    return (
      <button
        onClick={handle}
        data-testid={`bookmark-btn-${id}`}
        aria-pressed={saved}
        className={`pill-btn flex items-center gap-2 rounded-full px-6 py-3 text-sm uppercase tracking-widest ${
          saved ? "bg-[color:var(--blue-deep)] text-white" : "border border-[color:var(--ink)]"
        }`}
      >
        <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
        {saved ? "Saved" : "Bookmark"}
      </button>
    );
  }

  return (
    <button
      onClick={handle}
      data-testid={`bookmark-btn-${id}`}
      aria-label={saved ? "Remove bookmark" : "Add bookmark"}
      aria-pressed={saved}
      className="pill-btn grid h-9 w-9 place-items-center rounded-full bg-white/85 backdrop-blur transition-colors hover:bg-white"
    >
      <Bookmark
        size={16}
        className={saved ? "text-[color:var(--blue-deep)]" : "text-[color:var(--ink-soft)]"}
        fill={saved ? "currentColor" : "none"}
      />
    </button>
  );
}
