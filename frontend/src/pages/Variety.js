import { useEffect, useState } from "react";
import { Play, ListVideo, X } from "lucide-react";

import { api, REAL } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const getYouTubeThumbnail = (url) => {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?]+)/
  );

  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
  }

  return null;
};

const DUETS = [
  {
    title: "'The Little Prince'",
    subtitle: "Universe League duet stage",
    videoId: "S5PG6lUSMHs",
  },
  {
    title: "'그대 작은 나의 세상이 되어'",
    subtitle: "Car, the garden cover · HAN & JL",
    videoId: "42uMYQV6YV0",
  },
];

const PLAYLISTS = [
  {
    name: "📸 HANEULZ ☁️",
    thumbnail: REAL.ahofGroup,
    description:
      "Yence posts, Han posts, HANEULZ DC updates and fan moments.",
    videos: [
      {
        category: "🦌 Yence Posts",
        posts: [
          {
            image: "/images/yence1.jpg",
            url: "https://x.com/",
          },
          {
            image: "/images/yence2.jpg",
            url: "https://instagram.com/",
          },
        ],
      },
      {
        category: "🐈‍⬛ Han Posts",
        posts: [
          {
            image: "/images/han1.jpg",
            url: "https://x.com/",
          },
          {
            image: "/images/han2.jpg",
            url: "https://instagram.com/",
          },
        ],
      },
      {
        category: "🎬 HANEULZ DC",
        posts: [
          {
            image: "/images/dc1.jpg",
            url: "https://x.com/",
          },
        ],
      },
    ],
  },
  {
    name: "AHOF's First Anniversary",
    url: "https://youtube.com/",
    thumbnail:
      "https://img.youtube.com/vi/roXu3mS4TOc/maxresdefault.jpg",
    description:
      "Celebrating AHOF's first anniversary with lives and memories.",
  },
  {
    name: "AHOF Music Videos",
    url: "https://youtube.com/",
    thumbnail:
      "https://img.youtube.com/vi/OhbMVYVNo40/maxresdefault.jpg",
    description:
      "Every AHOF music video in one place.",
  },
];

export default function Variety() {
  const [shows, setShows] = useState([]);
  const [playingDuet, setPlayingDuet] = useState(null);
  const [openPlaylist, setOpenPlaylist] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    async function loadVariety() {
      try {
        const res = await api.get("/variety");
        setShows(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to load variety shows:", err);
      }
    }

    loadVariety();
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenPlaylist(null);
        setActiveSection(null);
      }
    };

    if (openPlaylist) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [openPlaylist]);

  const handleCloseModal = () => {
    setOpenPlaylist(null);
    setActiveSection(null);
  };

  return (
    <div
      className="min-h-screen pt-32"
      style={{
        background:
          "linear-gradient(180deg, rgba(248,216,232,0.55) 0%, var(--bg) 32%, rgba(181,216,235,0.28) 100%)",
      }}
    >
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            On screen together
          </p>

          <h1 className="mt-4 font-serif-display text-6xl md:text-8xl">
            Variety Corner
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[color:var(--ink-soft)]">
            Grab a comfort snack and watch HANEULZ with AHOF —
            every show, game and memorable moment together.
          </p>
        </Reveal>

        {/* DUETS */}
        <div className="mt-20">
          <Reveal>
            <h2 className="mb-10 font-serif-display text-5xl">
              Their Duets
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {DUETS.map((d, i) => {
              if (playingDuet === i) {
                return (
                  <iframe
                    key={i}
                    className="aspect-video w-full rounded-[2rem]"
                    src={`https://www.youtube.com/embed/${d.videoId}?autoplay=1`}
                    allowFullScreen
                    title={d.title}
                  />
                );
              }

              return (
                <Reveal key={i}>
                  <button
                    onClick={() => setPlayingDuet(i)}
                    className="group relative w-full overflow-hidden rounded-[2rem] text-left"
                    aria-label={`Play ${d.title}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${d.videoId}/maxresdefault.jpg`}
                      alt={d.title}
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 grid place-items-center bg-black/25 transition duration-300 group-hover:bg-black/40">
                      <div className="rounded-full bg-white p-5 shadow-lg transition duration-300 group-hover:scale-110">
                        <Play fill="currentColor" className="translate-x-0.5" />
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

           {/* HANEULZ POSTS PLAYLIST */}
<Reveal>
  <div className="mt-24 flex flex-col gap-8 md:flex-row md:items-center">

    <button
      onClick={() => {
        setOpenPlaylist(PLAYLISTS[0]);
        setActiveSection(PLAYLISTS[0].videos[0]);
      }}
      className="group relative w-full overflow-hidden rounded-[2.5rem] md:w-1/2"
    >
      <img
        src={PLAYLISTS[0].thumbnail}
        alt="HANEULZ Posts"
        className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 grid place-items-center bg-black/20">
        <div className="rounded-full bg-white p-5 shadow-lg">
          <Play fill="currentColor" />
        </div>
      </div>

    </button>


    <div className="md:w-1/2">

      <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
        Playlist
      </span>

      <h2 className="mt-3 font-serif-display text-5xl">
        ☁️ HANEULZ POST 📸
      </h2>

      <p className="mt-5 text-[color:var(--ink-soft)]">
        Yence posts, Han posts, HANEULZ DC updates and fan moments.
      </p>

    </div>

  </div>
</Reveal> 

                <Reveal>
          <div className="mt-24 rounded-[2.75rem] border border-[color:var(--line)] bg-white/40 p-10 backdrop-blur-md">

            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--blue-deep)]">
              NOW, THE WHOLE GROUP
            </p>

            <h2 className="mt-4 font-serif-display text-5xl md:text-7xl">
              Beyond the duets — all of AHOF
            </h2>

            <p className="mt-6 max-w-4xl text-lg text-[color:var(--ink-soft)]">
              From here the spotlight widens to the whole group.

              These playlists celebrate AHOF as nine — anniversaries,

              music videos and everything the boys do together.
            </p>

          </div>
        </Reveal>
            
       {/* PLAYLISTS */}
<div className="mt-24 space-y-20">
  {shows
    .filter((show) => show.section === "whole-group")
    .map((playlist, i) => (
            <Reveal key={playlist.show_name}>
              <div
                className={`flex flex-col gap-8 md:items-center ${
                  i % 2 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {playlist.videos ? (
                  <button
                    onClick={() => {
                      setOpenPlaylist(playlist);
                      setActiveSection(playlist.videos[0] || null);
                    }}
                    className="group relative w-full overflow-hidden rounded-[2.5rem] md:w-1/2"
                  >
                    <img
                      src={playlist.thumbnail}
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                      alt={playlist.show_name}
                    />

                    <div className="absolute inset-0 grid place-items-center bg-black/20 transition duration-300 group-hover:bg-black/35">
                      <div className="rounded-full bg-white p-5 shadow-lg transition duration-300 group-hover:scale-110">
                        <Play fill="currentColor" className="translate-x-0.5" />
                      </div>
                    </div>
                  </button>
                ) : (
                  <a
                    href={playlist.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative w-full overflow-hidden rounded-[2.5rem] md:w-1/2"
                  >
                    <img
                      src={playlist.thumbnail || getYouTubeThumbnail(playlist.url)}
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                      alt={playlist.show_name}
                    />
                  </a>
                )}

                <div className="md:w-1/2">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                    <ListVideo size={15} />
                    Playlist
                  </span>

                  <h2 className="mt-3 font-serif-display text-5xl">
                    {playlist.show_name}
                  </h2>

                  <p className="mt-5 text-[color:var(--ink-soft)]">
                    {playlist.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* HANEULZ POSTS MODAL */}
        {openPlaylist && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleCloseModal}
            />

            <div className="relative z-10 max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--blue-deep)]">
                    HANEULZ POSTS
                  </p>

                  <h2 className="mt-2 font-serif-display text-4xl">
                    {openPlaylist.name}
                  </h2>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="rounded-full border p-2 transition hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {openPlaylist.videos && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {openPlaylist.videos.map((section) => (
                    <button
                      key={section.category}
                      onClick={() => setActiveSection(section)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        activeSection?.category === section.category
                          ? "border-pink-300 bg-pink-100 text-pink-900"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {section.category}
                    </button>
                  ))}
                </div>
              )}

              {activeSection && (
                <div className="mt-8">
                  <h3 className="mb-6 font-serif-display text-3xl">
                    {activeSection.category}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {activeSection.posts?.map((post, index) => (
                      <a
                        key={index}
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group overflow-hidden rounded-xl border bg-gray-50"
                      >
                        <img
                          src={post.image}
                          alt={`${activeSection.category} post ${index + 1}`}
                          className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
