import { useState } from "react";
import {
  ExternalLink,
  Heart,
  ImagePlus,
  Instagram,
  Send,
  Sparkles,
  X,
} from "lucide-react";
const galleryPhotos = [
  // ADMIN GALLERY POSTS GO HERE
  // Example:
  // {
  //   id: 1,
  //   image: "/gallery/example.jpg",
  //   caption: "a little HANEULZ moment ♡",
  //   url: "https://x.com/...",
  // },
];
const archivePosts = [
  // APPROVED FAN ART WILL EVENTUALLY COME FROM THE BACKEND.
  //
  // Example:
  // {
  //   id: 1,
  //   username: "hansum",
  //   image: "/fanart/example.jpg",
  //   caption: "my little HANEULZ drawing ♡",
  //   url: "https://x.com/...",
  //   likes: 12,
  //   created_at: "2026-08-11",
  // },
];
const POSTS_PER_PAGE = 5;
export default function Gallery() {
  const [showSubmit, setShowSubmit] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(
    1,
    Math.ceil(archivePosts.length / POSTS_PER_PAGE)
  );
  const visiblePosts = archivePosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );
  return (
    <section className="relative overflow-hidden pb-20">
      {/* =====================================================
          BACKGROUND DECOR
      ===================================================== */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[color:var(--pink)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[45%] h-80 w-80 rounded-full bg-[color:var(--blue)] opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute left-[8%] top-[12%] rotate-[-12deg] text-2xl opacity-30">
        ✦
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[28%] rotate-[12deg] text-xl opacity-30">
        ♡
      </div>
      <div className="pointer-events-none absolute left-[5%] top-[60%] text-sm opacity-30">
        ୨୧
      </div>
      <div className="pointer-events-none absolute right-[6%] top-[75%] text-lg opacity-30">
        ☁
      </div>
      {/* =====================================================
          HANEULZ GALLERY
      ===================================================== */}
      <section className="relative">
        <div className="mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[color:var(--line)]" />
              <Sparkles
                size={15}
                strokeWidth={1.5}
                className="text-[color:var(--pink-deep)]"
              />
              <span className="h-px w-12 bg-[color:var(--line)]" />
            </div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
              little moments · carefully kept
            </p>
            <h2 className="mt-4 font-serif-display text-5xl font-medium tracking-tight md:text-7xl">
              HANEULZ
              <br />
              <span className="italic">Gallery</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
              A little collection of HANEULZ moments, photos, and memories
              gathered in one cozy corner. Click a photo to visit the original
              post ♡
            </p>
          </div>
          {/* GALLERY */}
          {galleryPhotos.length > 0 ? (
            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              {galleryPhotos.map((photo, index) => (
                <GalleryPhoto
                  key={photo.id}
                  photo={photo}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <GalleryEmpty />
          )}
          {/* SMALL NOTE */}
          <div className="mx-auto mt-10 max-w-md text-center">
            <p className="font-serif-display text-sm italic text-[color:var(--ink-soft)]">
              more little moments will find their way here soon ♡
            </p>
          </div>
        </div>
      </section>
      {/* =====================================================
          DIVIDER
      ===================================================== */}
      <div className="mx-auto my-24 flex max-w-3xl items-center gap-5 px-6">
        <span className="h-px flex-1 bg-[color:var(--line)]" />
        <span className="font-serif-display text-lg text-[color:var(--pink-deep)]">
          ☁︎
        </span>
        <span className="h-px flex-1 bg-[color:var(--line)]" />
      </div>
      {/* =====================================================
          HANEULZ ARCHIVE
      ===================================================== */}
      <section className="relative">
        <div className="mx-auto max-w-3xl">
          {/* ARCHIVE HEADER */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70 shadow-sm">
                <Instagram
                  size={20}
                  strokeWidth={1.5}
                  className="text-[color:var(--ink)]"
                />
              </div>
            </div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
              fan works · collected with love
            </p>
            <h2 className="mt-4 font-serif-display text-5xl font-medium md:text-6xl">
              HANEULZ
              <br />
              <span className="italic">Archive</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[color:var(--ink-soft)]">
              A little feed dedicated to the people who create, draw, edit,
              and make HANEULZ a little more special.
            </p>
          </div>
          {/* =================================================
              SUBMISSION CARD
          ================================================= */}
          <div className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/70 p-7 shadow-[0_15px_45px_rgba(70,50,60,0.08)] backdrop-blur-md md:p-9">
            <div className="pointer-events-none absolute -right-8 -top-8 text-7xl opacity-10">
              ♡
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pink-deep)]">
                  have something to share?
                </p>
                <h3 className="mt-2 font-serif-display text-3xl">
                  Share your work ♡
                </h3>
                <p className="mt-2 max-w-md text-xs leading-6 text-[color:var(--ink-soft)]">
                  Send us your HANEULZ fan art and it may become part of the
                  archive after review.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSubmit(true)}
                className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-[color:var(--pink-deep)]"
              >
                <ImagePlus size={15} />
                Submit your art
              </button>
            </div>
          </div>
          {/* =================================================
              ARCHIVE FEED
          ================================================= */}
          <div className="mt-12 space-y-8">
            {visiblePosts.length > 0 ? (
              visiblePosts.map((post) => (
                <ArchivePost
                  key={post.id}
                  post={post}
                />
              ))
            ) : (
              <ArchiveEmpty />
            )}
          </div>
          {/* =================================================
              PAGINATION
          ================================================= */}
          {archivePosts.length > POSTS_PER_PAGE && (
            <div className="mt-12 flex items-center justify-center gap-3">
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-full border border-[color:var(--line)] bg-white/60 px-5 py-2 text-xs disabled:opacity-30"
              >
                ←
              </button>
              <span className="px-3 font-serif-display text-sm">
                {page} / {totalPages}
              </span>
              <button
                type="button"
                disabled={page === totalPages}
                onClick={() =>
                  setPage((p) => Math.min(totalPages, p + 1))
                }
                className="rounded-full border border-[color:var(--line)] bg-white/60 px-5 py-2 text-xs disabled:opacity-30"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>
      {/* =====================================================
          SUBMISSION MODAL
      ===================================================== */}
      {showSubmit && (
        <SubmissionModal
          onClose={() => setShowSubmit(false)}
        />
      )}
    </section>
  );
}
/* =============================================================
   GALLERY PHOTO
============================================================= */
function GalleryPhoto({ photo, index }) {
  const rotations = [
    "rotate-[-1deg]",
    "rotate-[0.5deg]",
    "rotate-[-0.5deg]",
    "rotate-[1deg]",
    "rotate-[-0.8deg]",
    "rotate-[0.6deg]",
  ];
  return (
    <a
      href={photo.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative block overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-white p-2 shadow-[0_8px_25px_rgba(60,45,55,0.08)] transition duration-500 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_20px_45px_rgba(60,45,55,0.16)] ${rotations[index % rotations.length]}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-[1.1rem]">
        <img
          src={photo.image}
          alt={photo.caption || "HANEULZ Gallery"}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-between text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="max-w-[75%] truncate text-xs">
            {photo.caption || "original post"}
          </span>
          <ExternalLink size={14} />
        </div>
      </div>
    </a>
  );
}
/* =============================================================
   GALLERY EMPTY
============================================================= */
function GalleryEmpty() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-dashed border-[color:var(--line)] bg-white/40 px-8 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--pink)] text-2xl">
        ☁
      </div>
      <h3 className="mt-6 font-serif-display text-3xl">
        a blank little wall
      </h3>
      <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-[color:var(--ink-soft)]">
        HANEULZ moments will appear here once they are added from the admin
        corner.
      </p>
    </div>
  );
}
/* =============================================================
   ARCHIVE POST
============================================================= */
function ArchivePost({ post }) {
  return (
    <article className="overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/75 shadow-[0_12px_35px_rgba(60,45,55,0.07)] backdrop-blur-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--blue)] text-sm">
            ☁
          </div>
          <div>
            <p className="text-xs font-semibold">
              @{post.username}
            </p>
            <p className="text-[9px] uppercase tracking-widest text-[color:var(--ink-soft)]">
              HANEULZ Archive
            </p>
          </div>
        </div>
        <span className="text-lg text-[color:var(--ink-soft)]">
          ···
        </span>
      </div>
      {/* IMAGE */}
      <div className="relative bg-[color:var(--cream)]">
        <img
          src={post.image}
          alt={`Fan art by ${post.username}`}
          className="block max-h-[700px] w-full object-cover"
        />
      </div>
      {/* CONTENT */}
      <div className="px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Heart
              size={20}
              strokeWidth={1.5}
              className="text-[color:var(--pink-deep)]"
            />
            <span className="text-xs">
              {post.likes || 0} likes
            </span>
          </div>
          {post.url && (
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]"
            >
              Original post
              <ExternalLink size={12} />
            </a>
          )}
        </div>
        {post.caption && (
          <p className="mt-4 text-sm leading-7">
            <span className="font-semibold">
              @{post.username}
            </span>{" "}
            {post.caption}
          </p>
        )}
      </div>
    </article>
  );
}
/* =============================================================
   ARCHIVE EMPTY
============================================================= */
function ArchiveEmpty() {
  return (
    <div className="rounded-[2.5rem] border border-[color:var(--line)] bg-white/50 px-8 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--blue)] text-2xl">
        ♡
      </div>
      <h3 className="mt-6 font-serif-display text-3xl">
        nothing here yet
      </h3>
      <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-[color:var(--ink-soft)]">
        Be the first to share a HANEULZ fan art with the archive.
      </p>
    </div>
  );
}
/* =============================================================
   SUBMISSION MODAL
============================================================= */
function SubmissionModal({ onClose }) {
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    username: "",
    caption: "",
    url: "",
    image: null,
  });
  function handleImage(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setForm((current) => ({
      ...current,
      image: file,
    }));
    setPreview(URL.createObjectURL(file));
  }
  function handleSubmit(event) {
    event.preventDefault();
    /*
      BACKEND CONNECTION WILL BE ADDED NEXT.
      The data that will be submitted:
      username
      caption
      url
      image
      The submission should initially have:
      status = "pending"
    */
    alert(
      "Your artwork is ready to be submitted! We will connect this form to the HANEULZ Archive backend next. ☁️💗"
    );
  }
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/30 p-4 backdrop-blur-sm">
      <div className="relative my-8 w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/60 bg-[color:var(--cream)] shadow-[0_30px_80px_rgba(40,30,40,0.2)]">
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/70"
        >
          <X size={16} />
        </button>
        {/* HEADER */}
        <div className="bg-gradient-to-br from-[color:var(--pink)] via-white/60 to-[color:var(--blue)] px-7 pb-7 pt-9">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pink-deep)]">
            HANEULZ ARCHIVE
          </p>
          <h2 className="mt-2 font-serif-display text-4xl">
            Share your work ♡
          </h2>
          <p className="mt-3 max-w-sm text-xs leading-6 text-[color:var(--ink-soft)]">
            Your artwork will be reviewed before appearing in the archive.
          </p>
        </div>
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-7"
        >
          {/* USERNAME */}
          <div>
            <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              Your name / username
            </label>
            <input
              required
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
              placeholder="@hansum"
              className="mt-2 w-full rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
            />
          </div>
          {/* IMAGE */}
          <div>
            <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              Your artwork
            </label>
            <label className="mt-2 flex min-h-40 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[color:var(--line)] bg-white/50">
              {preview ? (
                <img
                  src={preview}
                  alt="Artwork preview"
                  className="max-h-72 w-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <ImagePlus
                    size={25}
                    className="mx-auto text-[color:var(--pink-deep)]"
                  />
                  <p className="mt-3 text-xs">
                    Upload your artwork
                  </p>
                  <p className="mt-1 text-[9px] text-[color:var(--ink-soft)]">
                    JPG, PNG, or WEBP
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                required
                onChange={handleImage}
                className="hidden"
              />
            </label>
          </div>
          {/* CAPTION */}
          <div>
            <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              Caption
            </label>
            <textarea
              value={form.caption}
              onChange={(e) =>
                setForm({
                  ...form,
                  caption: e.target.value,
                })
              }
              rows={4}
              placeholder="tell us about your artwork ♡"
              className="mt-2 w-full resize-none rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
            />
          </div>
          {/* ORIGINAL POST */}
          <div>
            <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              Original post link
              <span className="ml-2 font-normal normal-case tracking-normal">
                optional
              </span>
            </label>
            <input
              type="url"
              value={form.url}
              onChange={(e) =>
                setForm({
                  ...form,
                  url: e.target.value,
                })
              }
              placeholder="https://..."
              className="mt-2 w-full rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--pink-deep)]"
            />
          </div>
          {/* SUBMIT */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[color:var(--pink-deep)]"
          >
            <Send size={14} />
            Submit for review
          </button>
          <p className="text-center text-[9px] leading-5 text-[color:var(--ink-soft)]">
            Your artwork will only appear publicly after admin approval.
          </p>
        </form>
      </div>
    </div>
  );
}
