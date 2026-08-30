import React, { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Heart,
  Plus,
} from "lucide-react";
export default function JLStory() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [photoCount, setPhotoCount] = useState(9);
  /*
    ============================================================
    JL PROFILE & STORY COVER PHOTOS
    ============================================================
    JL Story Cover:
    The wide cover image displayed inside the JL Profile section.
    JL Profile Photo:
    JL's profile/portrait image displayed underneath the cover.
    Replace the placeholder URLs with your actual image URLs
    when the images are available.
  */
  const jlStoryCover = "YOUR_JL_STORY_COVER_IMAGE_URL";
  const jlProfilePhoto = "YOUR_JL_PROFILE_IMAGE_URL";
  /*
    ============================================================
    JL PROFILE INFORMATION
    ============================================================
  */
  const profile = {
    fullName: "Jay Lawrence Gaspar",
    knownAs: "JL",
    nicknames: "Yence · Jaeyel",
    birthday: "Add later",
    nationality: "Add later",
    hobbies: "Add later",
    interests: "Add later",
    favorites: "Add later",
    personality: "Add later",
  };
  /*
    ============================================================
    JL FACTS
    ============================================================
  */
  const facts = [
    "Add a JL fact here.",
    "Add another little detail here.",
    "Add another fact whenever you discover something new.",
    "This section can keep growing.",
  ];
  /*
    ============================================================
    PHOTO DIARY
    ============================================================
    Each photo only needs:
    image = the picture visitors will see
    link  = where visitors go when they tap the picture
    NO caption.
    NO date.
    Example:
    {
      id: 1,
      image: "https://example.com/photo.jpg",
      link: "https://x.com/example/status/123456789"
    }
  */
  const photos = [
    {
      id: 1,
      image: "YOUR_PHOTO_1_IMAGE_URL",
      link: "YOUR_PHOTO_1_ORIGINAL_POST_URL",
    },
    {
      id: 2,
      image: "YOUR_PHOTO_2_IMAGE_URL",
      link: "YOUR_PHOTO_2_ORIGINAL_POST_URL",
    },
    {
      id: 3,
      image: "YOUR_PHOTO_3_IMAGE_URL",
      link: "YOUR_PHOTO_3_ORIGINAL_POST_URL",
    },
    {
      id: 4,
      image: "YOUR_PHOTO_4_IMAGE_URL",
      link: "YOUR_PHOTO_4_ORIGINAL_POST_URL",
    },
    {
      id: 5,
      image: "YOUR_PHOTO_5_IMAGE_URL",
      link: "YOUR_PHOTO_5_ORIGINAL_POST_URL",
    },
    {
      id: 6,
      image: "YOUR_PHOTO_6_IMAGE_URL",
      link: "YOUR_PHOTO_6_ORIGINAL_POST_URL",
    },
    {
      id: 7,
      image: "YOUR_PHOTO_7_IMAGE_URL",
      link: "YOUR_PHOTO_7_ORIGINAL_POST_URL",
    },
    {
      id: 8,
      image: "YOUR_PHOTO_8_IMAGE_URL",
      link: "YOUR_PHOTO_8_ORIGINAL_POST_URL",
    },
    {
      id: 9,
      image: "YOUR_PHOTO_9_IMAGE_URL",
      link: "YOUR_PHOTO_9_ORIGINAL_POST_URL",
    },
    {
      id: 10,
      image: "YOUR_PHOTO_10_IMAGE_URL",
      link: "YOUR_PHOTO_10_ORIGINAL_POST_URL",
    },
    {
      id: 11,
      image: "YOUR_PHOTO_11_IMAGE_URL",
      link: "YOUR_PHOTO_11_ORIGINAL_POST_URL",
    },
    {
      id: 12,
      image: "YOUR_PHOTO_12_IMAGE_URL",
      link: "YOUR_PHOTO_12_ORIGINAL_POST_URL",
    },
  ];
  const displayedPhotos = photos.slice(
    0,
    showAllPhotos ? photoCount : 9
  );
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#11142f] text-white shadow-[0_30px_100px_rgba(16,15,55,0.35)]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[25%] -top-[8%] h-[550px] w-[550px] rounded-full bg-[#4659d9]/30 blur-[120px]" />
        <div className="absolute -right-[20%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#a447b9]/25 blur-[130px]" />
        <div className="absolute -left-[20%] top-[55%] h-[600px] w-[600px] rounded-full bg-[#e05d91]/20 blur-[150px]" />
        <div className="absolute -right-[25%] top-[78%] h-[650px] w-[650px] rounded-full bg-[#4b9fc7]/20 blur-[150px]" />
        <div className="absolute left-[35%] top-[35%] h-[350px] w-[350px] rounded-full bg-[#7064d7]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 0%, white 50%, transparent 100%)",
          }}
        />
      </div>
      {/* =====================================================
          TOP
      ===================================================== */}
      <section className="relative min-h-[700px] px-6 pb-20 pt-14 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e89ab8]" />
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/55">
              Our Little Corner
            </span>
          </div>
          <span className="text-[8px] uppercase tracking-[0.45em] text-white/40">
            JL / 01
          </span>
        </div>
        <div className="relative mt-20">
          <div
            className="pointer-events-none absolute -left-5 -top-16 select-none text-[10rem] font-black leading-none tracking-[-0.12em] text-white/[0.035] sm:text-[15rem] md:text-[20rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            JL
          </div>
          <p className="relative text-[9px] uppercase tracking-[0.65em] text-[#e89ab8]">
            getting to know
          </p>
          <h1
            className="relative mt-5 max-w-5xl text-[4.5rem] leading-[0.82] tracking-[0.025em] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem]"
            style={{
              fontFamily:
                "'Bodoni 72', 'Didot', 'Times New Roman', serif",
            }}
          >
            JL
          </h1>
          <div className="relative mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-lg tracking-[0.12em] text-white/85 sm:text-2xl">
              Jay Lawrence Gaspar
            </span>
            <span className="text-[#e89ab8]">
              ·
            </span>
            <span className="text-[9px] uppercase tracking-[0.45em] text-white/45">
              Yence · Jaeyel
            </span>
          </div>
          <p
            className="relative mt-9 max-w-xl text-lg leading-8 tracking-[0.05em] text-white/60 sm:text-xl"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            A little space dedicated to the person behind the name JL —
            his interests, little details, memories, and everything worth
            keeping.
          </p>
          <div className="relative mt-10 flex flex-wrap gap-2">
            <Tag>JL</Tag>
            <Tag>Yence</Tag>
            <Tag>Jaeyel</Tag>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[7px] uppercase tracking-[0.55em] text-white/35">
            scroll to explore
          </span>
          <ArrowDown
            size={13}
            strokeWidth={1}
            className="animate-bounce text-[#e89ab8]/70"
          />
        </div>
      </section>
      {/* =====================================================
          PROFILE
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24">
        <SectionHeading
          number="01"
          eyebrow="the basics"
          title="Profile"
        />
        {/* =================================================
            JL STORY COVER
        ================================================= */}
        <div className="mt-10">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-[#765bd6]/10 blur-3xl" />
            <div className="relative aspect-[16/7] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
              {jlStoryCover &&
              jlStoryCover !== "YOUR_JL_STORY_COVER_IMAGE_URL" ? (
                <img
                  src={jlStoryCover}
                  alt="JL Story Cover"
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImagePlaceholder
                  label="JL STORY COVER"
                  large
                />
              )}
            </div>
          </div>
        </div>
        {/* =================================================
            PROFILE PHOTO + INFORMATION
        ================================================= */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          {/* PROFILE PHOTO */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-[#e89ab8]/10 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
              {jlProfilePhoto &&
              jlProfilePhoto !== "YOUR_JL_PROFILE_IMAGE_URL" ? (
                <img
                  src={jlProfilePhoto}
                  alt="JL"
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImagePlaceholder
                  label="JL PROFILE PHOTO"
                />
              )}
            </div>
          </div>
          {/* PROFILE INFORMATION */}
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            <ProfileItem
              label="Full Name"
              value={profile.fullName}
            />
            <ProfileItem
              label="Known As"
              value={profile.knownAs}
            />
            <ProfileItem
              label="Nicknames"
              value={profile.nicknames}
            />
            <ProfileItem
              label="Birthday"
              value={profile.birthday}
            />
            <ProfileItem
              label="Nationality"
              value={profile.nationality}
            />
            <ProfileItem
              label="Hobbies"
              value={profile.hobbies}
            />
          </div>
        </div>
      </section>
      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section className="relative px-6 py-20 sm:px-10 md:px-16 lg:px-24">
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#c5579a]/10 blur-[120px]" />
        <SectionHeading
          number="02"
          eyebrow="a little introduction"
          title="About JL"
        />
        <div className="relative mt-10 max-w-4xl">
          <p
            className="text-2xl leading-[1.65] tracking-[0.035em] text-white/80 sm:text-3xl"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Jay Lawrence Gaspar, known as JL, is someone whose story is made
            up of more than just a name or a profile.
          </p>
          <p
            className="mt-7 text-lg leading-8 tracking-[0.045em] text-white/50"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            This space can hold your own writing about him — the things that
            first stood out, the personality you see, the details you want
            people to know, and the little moments that make this archive
            personal.
          </p>
          <p
            className="mt-5 text-lg leading-8 tracking-[0.045em] text-white/50"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            The paragraphs can be changed later through the admin side, so
            this page can grow alongside the archive.
          </p>
        </div>
      </section>
      {/* =====================================================
          JL FILES
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24">
        <SectionHeading
          number="03"
          eyebrow="the little details"
          title="The JL Files"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            label="HOBBIES"
            value={profile.hobbies}
            accent="pink"
          />
          <InfoCard
            label="INTERESTS"
            value={profile.interests}
            accent="blue"
          />
          <InfoCard
            label="FAVORITES"
            value={profile.favorites}
            accent="purple"
          />
          <InfoCard
            label="PERSONALITY"
            value={profile.personality}
            accent="rose"
          />
          <InfoCard
            label="LIKES"
            value="Add later"
            accent="cyan"
          />
          <InfoCard
            label="OTHER"
            value="Add later"
            accent="lavender"
          />
        </div>
      </section>
      {/* =====================================================
          FACTS
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24">
        <SectionHeading
          number="04"
          eyebrow="things worth knowing"
          title="JL Facts"
        />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex gap-5 border-b border-white/[0.08] px-6 py-6 last:border-b-0 sm:px-8"
            >
              <span className="shrink-0 text-[8px] tracking-[0.25em] text-[#e89ab8]/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p
                className="text-lg leading-7 tracking-[0.045em] text-white/65"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                {fact}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* =====================================================
          LITTLE THINGS
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24">
        <SectionHeading
          number="05"
          eyebrow="saved moments"
          title="The Little Things"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <ImagePlaceholder
            label="A LITTLE JL MOMENT"
          />
          <div>
            <p
              className="text-2xl leading-[1.6] tracking-[0.04em] text-white/75"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              The small things can be the ones that stay.
            </p>
            <p
              className="mt-6 text-lg leading-8 tracking-[0.045em] text-white/45"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Use this section for little stories, habits, funny moments,
              observations, or anything that feels too special to leave
              somewhere else.
            </p>
          </div>
        </div>
      </section>
      {/* =====================================================
          PHOTO DIARY
      ===================================================== */}
      <section className="px-5 py-20 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            number="06"
            eyebrow="saved here"
            title="Photo Diary"
          />
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
            <Camera
              size={12}
              strokeWidth={1}
              className="text-[#e89ab8]"
            />
            <span className="text-[7px] uppercase tracking-[0.4em] text-white/40">
              {photos.length} photos
            </span>
          </div>
        </div>
        <p
          className="mt-6 max-w-xl text-lg leading-8 tracking-[0.045em] text-white/45"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          A growing collection of JL moments.
        </p>
        <div className="mt-9 grid grid-cols-3 gap-1.5 overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 p-1.5 sm:gap-2 sm:rounded-[2rem] sm:p-2">
          {displayedPhotos.map((photo) => (
            <PhotoDiaryItem
              key={photo.id}
              photo={photo}
            />
          ))}
        </div>
        {!showAllPhotos ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllPhotos(true)}
              className="group flex items-center gap-3 rounded-full border border-[#e89ab8]/40 bg-[#e89ab8]/10 px-6 py-3 text-[8px] uppercase tracking-[0.4em] text-[#f2c2d2] transition hover:border-[#e89ab8]/70 hover:bg-[#e89ab8]/20"
            >
              View More
              <ArrowRight
                size={12}
                strokeWidth={1}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center gap-4">
            {photoCount < photos.length && (
              <button
                type="button"
                onClick={() =>
                  setPhotoCount((current) =>
                    Math.min(current + 9, photos.length)
                  )
                }
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 text-[8px] uppercase tracking-[0.4em] text-white/65 transition hover:bg-white/[0.1]"
              >
                Load More
              </button>
            )}
            {photoCount >= photos.length && (
              <p className="text-[7px] uppercase tracking-[0.45em] text-white/30">
                end of the archive
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                setShowAllPhotos(false);
                setPhotoCount(9);
              }}
              className="text-[7px] uppercase tracking-[0.35em] text-white/30 underline underline-offset-4"
            >
              Show Less
            </button>
          </div>
        )}
      </section>
      {/* =====================================================
          FOOTER
      ===================================================== */}
      <section className="px-6 pb-20 pt-10 text-center sm:px-10">
        <div className="mx-auto flex max-w-md items-center gap-4">
          <span className="h-px flex-1 bg-white/10" />
          <Heart
            size={14}
            strokeWidth={1}
            className="text-[#e89ab8]/70"
          />
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h3
          className="mt-8 text-4xl tracking-[0.08em] text-white/80 sm:text-5xl"
          style={{
            fontFamily:
              "'Bodoni 72', 'Didot', 'Times New Roman', serif",
          }}
        >
          JL
        </h3>
        <p className="mt-4 text-[7px] uppercase tracking-[0.55em] text-white/25">
          yence · jaeyel
        </p>
      </section>
    </div>
  );
}
/* =============================================================
   SECTION HEADING
============================================================= */
function SectionHeading({
  number,
  eyebrow,
  title,
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-[7px] tracking-[0.5em] text-[#e89ab8]/75">
          {number}
        </span>
        <span className="h-px w-8 bg-[#e89ab8]/50" />
        <span className="text-[7px] uppercase tracking-[0.55em] text-white/30">
          {eyebrow}
        </span>
      </div>
      <h2
        className="mt-4 text-4xl tracking-[0.06em] text-white/90 sm:text-5xl md:text-6xl"
        style={{
          fontFamily:
            "'Bodoni 72', 'Didot', 'Times New Roman', serif",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
/* =============================================================
   PROFILE ITEM
============================================================= */
function ProfileItem({
  label,
  value,
}) {
  return (
    <div className="bg-[#181b39]/80 p-6 sm:p-7">
      <p className="text-[7px] uppercase tracking-[0.5em] text-white/30">
        {label}
      </p>
      <p
        className="mt-4 text-xl tracking-[0.05em] text-white/75 sm:text-2xl"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>
    </div>
  );
}
/* =============================================================
   INFO CARD
============================================================= */
function InfoCard({
  label,
  value,
  accent,
}) {
  const accentStyles = {
    pink:
      "border-[#e89ab8]/30 bg-[#e89ab8]/[0.07]",
    blue:
      "border-[#73b8d6]/30 bg-[#73b8d6]/[0.07]",
    purple:
      "border-[#9d8ce0]/30 bg-[#9d8ce0]/[0.07]",
    rose:
      "border-[#d976a2]/30 bg-[#d976a2]/[0.07]",
    cyan:
      "border-[#73d0ce]/30 bg-[#73d0ce]/[0.07]",
    lavender:
      "border-[#b9a5dc]/30 bg-[#b9a5dc]/[0.07]",
  };
  return (
    <div
      className={`min-h-[170px] rounded-[1.8rem] border p-6 sm:p-7 ${accentStyles[accent]}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[7px] uppercase tracking-[0.5em] text-white/35">
          {label}
        </p>
        <Plus
          size={13}
          strokeWidth={1}
          className="text-white/20"
        />
      </div>
      <p
        className="mt-8 text-xl leading-7 tracking-[0.05em] text-white/70"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>
    </div>
  );
}
/* =============================================================
   TAG
============================================================= */
function Tag({
  children,
}) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[7px] uppercase tracking-[0.35em] text-white/45">
      {children}
    </span>
  );
}
/* =============================================================
   IMAGE PLACEHOLDER
============================================================= */
function ImagePlaceholder({
  label,
  large = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] ${
        large
          ? "aspect-[16/9]"
          : "aspect-[4/3]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3848a1]/50 via-[#714a9b]/40 to-[#c95788]/40" />
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#6179ec]/20 blur-[80px]" />
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#e279a8]/20 blur-[90px]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.08]">
            <Camera
              size={21}
              strokeWidth={1}
              className="text-white/65"
            />
          </div>
          <p className="mt-5 text-[8px] uppercase tracking-[0.55em] text-white/60">
            {label}
          </p>
          <p className="mt-2 text-[7px] uppercase tracking-[0.3em] text-white/25">
            admin image placeholder
          </p>
        </div>
      </div>
    </div>
  );
}
/* =============================================================
   PHOTO DIARY ITEM
============================================================= */
function PhotoDiaryItem({
  photo,
}) {
  const hasImage =
    photo.image &&
    !photo.image.startsWith("YOUR_");
  const hasLink =
    photo.link &&
    !photo.link.startsWith("YOUR_");
  /*
    If the image and link are both provided,
    the entire photo becomes clickable.
    If no image has been added yet,
    the placeholder remains visible.
  */
  const content = (
    <div className="group relative aspect-square overflow-hidden bg-[#22254b]">
      {hasImage ? (
        <img
          src={photo.image}
          alt="JL"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#3548a0] via-[#704c9b] to-[#b95783] opacity-80" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "14px 14px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera
              size={17}
              strokeWidth={1}
              className="text-white/50"
            />
          </div>
        </>
      )}
    </div>
  );
  if (hasImage && hasLink) {
    return (
      <a
        href={photo.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open original post"
        className="block"
      >
        {content}
      </a>
    );
  }
  return content;
}
