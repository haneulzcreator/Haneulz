import { useEffect, useState } from "react";
import {
  Heart,
  ExternalLink,
  ImagePlus,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Instagram,
} from "lucide-react";
import { api } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const POSTS_PER_PAGE = 9;

export default function Gallery() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function loadPosts() {
    try {
      setLoading(true);

      const response = await api.get("/gallery");

      setPosts(response.data || []);
    } catch (error) {
      console.error("Failed to load gallery:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  const totalPages = Math.max(
    1,
    Math.ceil(posts.length / POSTS_PER_PAGE)
  );

  const startIndex = (page - 1) * POSTS_PER_PAGE;

  const visiblePosts = posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  function nextPage() {
    if (page < totalPages) {
      setPage((current) => current + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage((current) => current - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen pt-32">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6">

        <Reveal>

          <div className="relative overflow-hidden rounded-[3rem] border border-[color:var(--line)] bg-white/55 px-7 py-14 shadow-sm backdrop-blur md:px-14">

            {/* decorative clouds */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[color:var(--pink)] opacity-40 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[color:var(--blue)] opacity-30 blur-3xl" />

            <Sparkles
              className="absolute right-10 top-10 text-[color:var(--pink-deep)]"
              size={18}
            />

            <p className="relative text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
              05 · little visual archive
            </p>

            <div className="relative mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>

                <h1 className="font-serif-display text-6xl font-medium leading-none md:text-8xl">
                  HANEULZ
                  <br />
                  Gallery
                </h1>

                <p className="mt-7 max-w-xl text-base leading-7 text-[color:var(--ink-soft)]">
                  A little corner filled with fan moments, pretty
                  pictures, artworks, and everything our HANEULZ
                  hearts wanted to keep.
                </p>

              </div>

              <div className="flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                <Instagram size={15} />
                haneulz archive
              </div>

            </div>

          </div>

        </Reveal>

      </section>


      {/* =====================================================
          INSTAGRAM STYLE HEADER
      ===================================================== */}

      <section className="mx-auto mt-12 max-w-6xl px-6">

        <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-5">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              latest moments
            </p>

            <h2 className="mt-2 font-serif-display text-3xl">
              from the HANEULZ archive
            </h2>

          </div>

          <div className="hidden items-center gap-2 text-xs text-[color:var(--ink-soft)] sm:flex">
            <Heart size={14} />
            made with love
          </div>

        </div>

      </section>


      {/* =====================================================
          POSTS
      ===================================================== */}

      <section className="mx-auto mt-8 max-w-6xl px-6">

        {loading ? (

          <div className="py-24 text-center text-sm text-[color:var(--ink-soft)]">
            loading little moments...
          </div>

        ) : visiblePosts.length === 0 ? (

          <EmptyGallery />

        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {visiblePosts.map((post, index) => (

              <GalleryPost
                key={post.id}
                post={post}
                index={index}
              />

            ))}

          </div>

        )}

      </section>


      {/* =====================================================
          PAGINATION
      ===================================================== */}

      {!loading && posts.length > POSTS_PER_PAGE && (

        <section className="mx-auto mt-12 flex max-w-6xl items-center justify-center gap-5 px-6">

          <button
            type="button"
            onClick={previousPage}
            disabled={page === 1}
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={17} />
          </button>

          <div className="rounded-full border border-[color:var(--line)] bg-white/60 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            {page} / {totalPages}
          </div>

          <button
            type="button"
            onClick={nextPage}
            disabled={page === totalPages}
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={17} />
          </button>

        </section>

      )}


      {/* =====================================================
          FAN ART CTA
      ===================================================== */}

      <section className="mx-auto mt-20 max-w-6xl px-6 pb-20">

        <Reveal>

          <div className="relative overflow-hidden rounded-[3rem] bg-[color:var(--pink)] px-8 py-12 md:px-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/40 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[color:var(--blue)]/30 blur-3xl" />

            <ImagePlus
              className="relative mb-5 text-[color:var(--pink-deep)]"
              size={22}
            />

            <h2 className="relative font-serif-display text-4xl md:text-5xl">
              Made something for HANEULZ?
            </h2>

            <p className="relative mt-4 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
              Share your fan art, edits, drawings, graphics, or
              anything you created with love. Add a caption and,
              if you'd like, a link to your original post.
            </p>

            <a
              href="/gallery/submit"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[color:var(--pink-deep)]"
            >
              submit your work
              <ExternalLink size={13} />
            </a>

          </div>

        </Reveal>

      </section>

      <Footer />

    </div>
  );
}


/* =============================================================
   GALLERY POST
============================================================= */

function GalleryPost({ post, index }) {

  const rotations = [
    "rotate-[-0.7deg]",
    "rotate-[0.4deg]",
    "rotate-[-0.3deg]",
    "rotate-[0.5deg]",
    "rotate-[-0.5deg]",
    "rotate-[0.2deg]",
  ];

  return (

    <article
      className={`group overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/75 shadow-[0_8px_25px_rgba(70,50,60,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_18px_40px_rgba(70,50,60,0.12)] ${rotations[index % rotations.length]}`}
    >

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative aspect-square overflow-hidden bg-[color:var(--cream)]">

        <img
          src={post.image_url}
          alt={post.caption || "HANEULZ fan work"}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10 opacity-0 transition group-hover:opacity-100" />

        {post.is_admin && (

          <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)] backdrop-blur">
            HANEULZ archive
          </div>

        )}

      </div>


      {/* =====================================================
          POST INFO
      ===================================================== */}

      <div className="p-5">

        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-2">

            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)]">
              <Heart
                size={13}
                fill="white"
                className="text-white"
              />
            </div>

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                {post.author_name || "HANEULZ"}
              </p>

              <p className="text-[9px] text-[color:var(--ink-soft)]">
                {post.is_admin ? "official archive" : "fan work"}
              </p>

            </div>

          </div>

          {post.link_url && (

            <a
              href={post.link_url}
              target="_blank"
              rel="noreferrer"
              aria-label="Open original post"
              className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line)] bg-white/70 transition hover:bg-white"
            >
              <ExternalLink size={13} />
            </a>

          )}

        </div>


        {post.caption && (

          <p className="mt-4 text-sm leading-6 text-[color:var(--ink-soft)]">
            {post.caption}
          </p>

        )}

        <div className="mt-4 flex items-center gap-2 text-[color:var(--pink-deep)]">

          <Heart
            size={15}
            strokeWidth={1.5}
          />

          <span className="text-[9px] uppercase tracking-[0.2em]">
            kept with love
          </span>

        </div>

      </div>

    </article>

  );
}


/* =============================================================
   EMPTY STATE
============================================================= */

function EmptyGallery() {

  return (

    <div className="rounded-[3rem] border border-dashed border-[color:var(--line)] bg-white/50 px-8 py-24 text-center">

      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--pink)]">

        <ImagePlus
          size={23}
          className="text-[color:var(--pink-deep)]"
        />

      </div>

      <h2 className="mt-6 font-serif-display text-3xl">
        The gallery is still a little quiet.
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
        Be the first to leave something beautiful here.
      </p>

    </div>

  );

}
