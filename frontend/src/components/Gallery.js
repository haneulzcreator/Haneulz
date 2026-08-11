import { useEffect, useMemo, useState } from "react";
import {
  ExternalLink,
  Heart,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Camera,
  Cloud,
} from "lucide-react";

import { api } from "../lib/api";
import { Reveal } from "./Reveal";

/* =========================================================
   SETTINGS
========================================================= */

const ARCHIVE_PER_PAGE = 5;
const GALLERY_PER_PAGE = 12;

/* =========================================================
   MAIN GALLERY
========================================================= */

export default function Gallery() {
  const [archivePosts, setArchivePosts] = useState([]);
  const [galleryPosts, setGalleryPosts] = useState([]);

  const [archivePage, setArchivePage] = useState(1);
  const [galleryPage, setGalleryPage] = useState(1);

  const [loadingArchive, setLoadingArchive] = useState(true);
  const [loadingGallery, setLoadingGallery] = useState(true);

  const [archiveError, setArchiveError] = useState("");
  const [galleryError, setGalleryError] = useState("");

  useEffect(() => {
    loadArchive();
    loadGallery();
  }, []);

  async function loadArchive() {
    try {
      setLoadingArchive(true);
      setArchiveError("");

      const response = await api.get("/gallery/archive");

      const posts = Array.isArray(response.data)
        ? response.data
        : [];

      setArchivePosts(posts);
    } catch (error) {
      console.error("Failed to load HANEULZ Archive:", error);
      setArchiveError(
        "The archive is taking a little nap. Please try again later."
      );
    } finally {
      setLoadingArchive(false);
    }
  }

  async function loadGallery() {
    try {
      setLoadingGallery(true);
      setGalleryError("");

      const response = await api.get("/gallery");

      const posts = Array.isArray(response.data)
        ? response.data
        : [];

      setGalleryPosts(posts);
    } catch (error) {
      console.error("Failed to load HANEULZ Gallery:", error);
      setGalleryError(
        "The gallery is taking a little nap. Please try again later."
      );
    } finally {
      setLoadingGallery(false);
    }
  }

  const sortedArchive = useMemo(() => {
    return [...archivePosts].sort((a, b) => {
      return (
        new Date(b.created_at || 0) -
        new Date(a.created_at || 0)
      );
    });
  }, [archivePosts]);

  const sortedGallery = useMemo(() => {
    return [...galleryPosts].sort((a, b) => {
      return (
        new Date(b.created_at || 0) -
        new Date(a.created_at || 0)
      );
    });
  }, [galleryPosts]);

  const archiveTotalPages = Math.max(
    1,
    Math.ceil(sortedArchive.length / ARCHIVE_PER_PAGE)
  );

  const galleryTotalPages = Math.max(
    1,
    Math.ceil(sortedGallery.length / GALLERY_PER_PAGE)
  );

  const visibleArchive = sortedArchive.slice(
    (archivePage - 1) * ARCHIVE_PER_PAGE,
    archivePage * ARCHIVE_PER_PAGE
  );

  const visibleGallery = sortedGallery.slice(
    (galleryPage - 1) * GALLERY_PER_PAGE,
    galleryPage * GALLERY_PER_PAGE
  );

  useEffect(() => {
    if (archivePage > archiveTotalPages) {
      setArchivePage(archiveTotalPages);
    }
  }, [archivePage, archiveTotalPages]);

  useEffect(() => {
    if (galleryPage > galleryTotalPages) {
      setGalleryPage(galleryTotalPages);
    }
  }, [galleryPage, galleryTotalPages]);

  return (
    <section className="relative overflow-hidden pb-24">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[color:var(--pink)] opacity-30 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 top-[35rem] h-72 w-72 rounded-full bg-[color:var(--blue)] opacity-30 blur-3xl" />

      <div className="pointer-events-none absolute left-[8%] top-32 rotate-[-12deg] text-2xl text-[color:var(--pink-deep)] opacity-50">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[10%] top-52 rotate-[12deg] text-xl text-[color:var(--blue-deep)] opacity-50">
        ♡
      </div>

      <div className="pointer-events-none absolute left-[5%] top-[48rem] text-3xl opacity-20">
        ☁
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[70rem] text-2xl opacity-20">
        ୨୧
      </div>


      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <Reveal>

        <header className="relative mx-auto max-w-4xl px-6 text-center">

          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[color:var(--line)]" />

            <Sparkles
              size={15}
              strokeWidth={1.4}
              className="text-[color:var(--pink-deep)]"
            />

            <span className="h-px w-12 bg-[color:var(--line)]" />

          </div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
            06 · little memories
          </p>

          <h2 className="mt-4 font-serif-display text-6xl font-medium tracking-tight md:text-8xl">
            HANEULZ
            <span className="block italic text-[color:var(--pink-deep)]">
              Gallery
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
            A tiny corner for the pictures, fan arts, and little
            moments that deserve to stay here a little longer.
          </p>

        </header>

      </Reveal>


      {/* =====================================================
          HANEULZ ARCHIVE
          INSTAGRAM STYLE
      ===================================================== */}

      <section className="relative mx-auto mt-20 max-w-4xl px-6">

        <Reveal>

          <ArchiveHeading />

        </Reveal>


        {loadingArchive ? (
          <ArchiveLoading />
        ) : archiveError ? (
          <EmptyState
            icon={Cloud}
            title="Archive unavailable"
            description={archiveError}
          />
        ) : visibleArchive.length === 0 ? (
          <EmptyState
            icon={Heart}
            title="The archive is still quiet"
            description="Fan arts approved by HANEULZ will appear here."
          />
        ) : (
          <div className="mt-10 space-y-10">

            {visibleArchive.map((post, index) => (
              <ArchivePost
                key={post.id || index}
                post={post}
                index={index}
                onLiked={(updatedPost) => {
                  setArchivePosts((current) =>
                    current.map((item) =>
                      item.id === updatedPost.id
                        ? updatedPost
                        : item
                    )
                  );
                }}
              />
            ))}

          </div>
        )}


        {!loadingArchive &&
          !archiveError &&
          sortedArchive.length > 0 && (
            <Pagination
              page={archivePage}
              totalPages={archiveTotalPages}
              onChange={setArchivePage}
            />
          )}

      </section>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="mx-auto my-24 flex max-w-5xl items-center gap-5 px-6">

        <span className="h-px flex-1 bg-[color:var(--line)]" />

        <span className="font-serif-display text-xl italic text-[color:var(--ink-soft)]">
          and then...
        </span>

        <span className="h-px flex-1 bg-[color:var(--line)]" />

      </div>


      {/* =====================================================
          HANEULZ GALLERY
          GRID STYLE
      ===================================================== */}

      <section className="relative mx-auto max-w-6xl px-6">

        <Reveal>

          <GalleryHeading />

        </Reveal>


        {loadingGallery ? (
          <GalleryLoading />
        ) : galleryError ? (
          <EmptyState
            icon={ImageIcon}
            title="Gallery unavailable"
            description={galleryError}
          />
        ) : visibleGallery.length === 0 ? (
          <EmptyState
            icon={Camera}
            title="A blank page for now"
            description="Pictures added by the HANEULZ admin will appear here."
          />
        ) : (
          <>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">

              {visibleGallery.map((post, index) => (
                <GalleryPhoto
                  key={post.id || index}
                  post={post}
                  index={index}
                />
              ))}

            </div>

            <Pagination
              page={galleryPage}
              totalPages={galleryTotalPages}
              onChange={setGalleryPage}
            />

          </>
        )}

      </section>

    </section>
  );
}


/* =========================================================
   ARCHIVE HEADING
========================================================= */

function ArchiveHeading() {
  return (
    <div className="relative">

      <div className="absolute -left-3 -top-4 rotate-[-8deg] text-xl text-[color:var(--pink-deep)]">
        ♡
      </div>

      <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
        HANEULZ · FAN ART ONLY
      </p>

      <div className="mt-3 flex items-end justify-between gap-5">

        <div>

          <h3 className="font-serif-display text-5xl font-medium tracking-tight md:text-6xl">
            HANEULZ
            <span className="italic text-[color:var(--pink-deep)]">
              {" "}
              Archive
            </span>
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-6 text-[color:var(--ink-soft)]">
            A little Instagram-like wall of fan art made by
            HANEULZ fans.
          </p>

        </div>

        <div className="hidden rotate-[3deg] rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-center shadow-sm md:block">

          <p className="text-[8px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            archive
          </p>

          <p className="font-serif-display text-xl">
            ♡
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   ARCHIVE POST
========================================================= */

function ArchivePost({ post, index, onLiked }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [liking, setLiking] = useState(false);

  const image =
    post.image ||
    post.image_url ||
    post.thumbnail ||
    post.cover_image_url;

  const caption = post.caption || "";

  const author =
    post.author_name ||
    post.username ||
    "HANEULZ fan";

  const date = formatDate(post.created_at);

  async function handleLike() {
    if (liked || liking || !post.id) {
      return;
    }

    setLiking(true);

    try {
      const response = await api.post(
        `/gallery/archive/${post.id}/like`
      );

      const newLikes =
        response.data?.likes ??
        response.data?.count ??
        likes + 1;

      setLikes(newLikes);
      setLiked(true);

      onLiked?.({
        ...post,
        likes: newLikes,
      });
    } catch (error) {
      console.error("Failed to like archive post:", error);
    } finally {
      setLiking(false);
    }
  }

  return (
    <article
      className={`relative mx-auto max-w-2xl ${
        index % 2 === 0
          ? "rotate-[-0.2deg]"
          : "rotate-[0.2deg]"
      }`}
    >

      {/* tiny archive label */}

      <div className="mb-3 flex items-center justify-between px-2">

        <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
          HZ · FAN ART
        </span>

        <span className="font-serif-display text-xs italic text-[color:var(--ink-soft)]">
          {date}
        </span>

      </div>


      {/* post card */}

      <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/80 shadow-[0_15px_45px_rgba(70,50,60,0.08)] backdrop-blur-sm">

        {/* header */}

        <div className="flex items-center justify-between px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)]">

              <Cloud
                size={16}
                className="text-[color:var(--ink)]"
              />

            </div>

            <div>

              <p className="text-xs font-semibold">
                {author}
              </p>

              <p className="text-[9px] uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
                HANEULZ Archive
              </p>

            </div>

          </div>

          <span className="text-lg text-[color:var(--ink-soft)]">
            ···
          </span>

        </div>


        {/* image */}

        {image ? (
          <div className="relative overflow-hidden bg-[color:var(--cream)]">

            <img
              src={image}
              alt={caption || "HANEULZ fan art"}
              className="block max-h-[720px] w-full object-cover"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />

          </div>
        ) : (
          <div className="flex aspect-square items-center justify-center bg-[color:var(--cream)]">
            <ImageIcon
              size={30}
              className="text-[color:var(--ink-soft)]"
            />
          </div>
        )}


        {/* actions */}

        <div className="px-5 pb-5 pt-4">

          <div className="flex items-center justify-between">

            <button
              type="button"
              onClick={handleLike}
              disabled={liking}
              aria-label="Like fan art"
              className="group flex items-center gap-2"
            >

              <Heart
                size={22}
                strokeWidth={1.5}
                fill={liked ? "currentColor" : "none"}
                className={`transition ${
                  liked
                    ? "scale-110 text-[color:var(--pink-deep)]"
                    : "text-[color:var(--ink)] group-hover:scale-110"
                }`}
              />

              <span className="text-xs font-semibold">
                {likes}
              </span>

            </button>


            {post.url && (
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[color:var(--ink-soft)] transition hover:bg-white"
              >
                Original post
                <ExternalLink size={11} />
              </a>
            )}

          </div>


          {caption && (
            <p className="mt-4 text-sm leading-7 text-[color:var(--ink)]">

              <span className="mr-2 font-semibold">
                {author}
              </span>

              {caption}

            </p>
          )}

          <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            {date}
          </p>

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   GALLERY HEADING
========================================================= */

function GalleryHeading() {
  return (
    <div className="relative">

      <div className="pointer-events-none absolute -right-2 -top-6 rotate-[8deg] text-2xl text-[color:var(--blue-deep)]">
        ✦
      </div>

      <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
        HANEULZ · PHOTO ARCHIVE
      </p>

      <div className="mt-3">

        <h3 className="font-serif-display text-5xl font-medium tracking-tight md:text-7xl">

          little

          <span className="ml-3 italic text-[color:var(--blue-deep)]">
            moments
          </span>

        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
          A curated collection of HANEULZ pictures.
          Tap a photo to visit where it originally came from.
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   GALLERY PHOTO
========================================================= */

function GalleryPhoto({ post, index }) {
  const image =
    post.image ||
    post.image_url ||
    post.thumbnail ||
    post.cover_image_url;

  const url =
    post.url ||
    post.original_url ||
    post.source_url ||
    "#";

  const aspectStyles = [
    "aspect-square",
    "aspect-[4/5]",
    "aspect-square",
    "aspect-[5/6]",
    "aspect-[4/5]",
    "aspect-square",
  ];

  const rotations = [
    "rotate-[-0.5deg]",
    "rotate-[0.6deg]",
    "rotate-[-0.3deg]",
    "rotate-[0.8deg]",
    "rotate-[-0.7deg]",
    "rotate-[0.3deg]",
  ];

  const tapeColors = [
    "bg-[#dceaf1]",
    "bg-[#f1d3df]",
    "bg-[#e7dfd3]",
    "bg-[#dfe8dc]",
  ];

  const aspect = aspectStyles[index % aspectStyles.length];
  const rotation = rotations[index % rotations.length];
  const tape = tapeColors[index % tapeColors.length];

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`group relative block ${rotation}`}
    >

      <article className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-white/70 p-2 shadow-[0_10px_30px_rgba(70,50,60,0.07)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(70,50,60,0.14)]">

        {/* tape */}

        <div
          className={`pointer-events-none absolute left-1/2 top-0 z-10 h-7 w-14 -translate-x-1/2 -translate-y-2 rotate-[-3deg] opacity-75 ${tape}`}
        />

        {/* photo */}

        <div
          className={`relative ${aspect} overflow-hidden rounded-[1.15rem] bg-[color:var(--cream)]`}
        >

          {image ? (
            <img
              src={image}
              alt={post.caption || "HANEULZ photo"}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <ImageIcon
                size={28}
                className="text-[color:var(--ink-soft)]"
              />
            </div>
          )}

          {/* hover overlay */}

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20">

            <div className="flex translate-y-3 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] opacity-0 shadow-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

              Visit original

              <ExternalLink size={11} />

            </div>

          </div>

        </div>


        {/* tiny caption */}

        {post.caption && (
          <div className="px-2 pb-2 pt-3">

            <p className="line-clamp-2 font-serif-display text-sm italic text-[color:var(--ink-soft)]">
              {post.caption}
            </p>

          </div>
        )}

      </article>

    </a>
  );
}


/* =========================================================
   PAGINATION
========================================================= */

function Pagination({
  page,
  totalPages,
  onChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-3">

      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>


      <div className="rounded-full border border-[color:var(--line)] bg-white/60 px-5 py-2 text-[9px] font-semibold uppercase tracking-[0.2em]">

        {String(page).padStart(2, "0")}

        <span className="mx-2 text-[color:var(--ink-soft)]">
          /
        </span>

        {String(totalPages).padStart(2, "0")}

      </div>


      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>

    </div>
  );
}


/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({
  icon: Icon,
  title,
  description,
}) {
  return (
    <Reveal>

      <div className="mt-10 rounded-[2rem] border border-dashed border-[color:var(--line)] bg-white/45 px-8 py-16 text-center">

        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--pink)]">

          <Icon
            size={22}
            strokeWidth={1.4}
            className="text-[color:var(--ink)]"
          />

        </div>

        <h4 className="mt-5 font-serif-display text-3xl">
          {title}
        </h4>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
          {description}
        </p>

      </div>

    </Reveal>
  );
}


/* =========================================================
   LOADING STATES
========================================================= */

function ArchiveLoading() {
  return (
    <div className="mx-auto mt-10 max-w-2xl animate-pulse">

      <div className="h-5 w-28 rounded-full bg-black/5" />

      <div className="mt-4 overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/60">

        <div className="h-[30rem] bg-black/5" />

        <div className="space-y-3 p-5">

          <div className="h-4 w-20 rounded-full bg-black/5" />

          <div className="h-3 w-3/4 rounded-full bg-black/5" />

        </div>

      </div>

    </div>
  );
}


function GalleryLoading() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">

      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="aspect-square animate-pulse rounded-[1.5rem] bg-black/5"
        />
      ))}

    </div>
  );
}


/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(value) {
  if (!value) {
    return "recently";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "recently";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
