import { useEffect, useState } from "react";
import { Play, ListVideo, X } from "lucide-react";

import { api, REAL } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

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

        {/* DYNAMIC VARIETY POSTS / SHOWS FROM BACKEND */}
       {shows.filter((show) => show.section === "whole-group").length > 0 && (
          <div className="mt-20">
            <Reveal>
  <div className="mb-10">
    <h2 className="font-serif-display text-5xl">
      NOW, THE WHOLE GROUP
    </h2>

    <p className="mt-3 max-w-2xl text-[color:var(--ink-soft)]">
      Beyond the duets — all of AHOF. From here the spotlight widens to the whole group.
      These playlists celebrate AHOF as nine — anniversaries, music videos and everything the boys do together.
    </p>
  </div>
</Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shows
  .filter((show) => show.section === "whole-group")
  .map((show, idx) => {

    const imageUrl = show.photo_url;
    const title = show.show_name || "Untitled Episode";
    const description = show.description;
    const linkUrl = show.youtube_url;

    return (
                  <Reveal key={show.id || show._id || idx}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white/60 p-5 backdrop-blur-md transition duration-300 hover:shadow-xl">
                      {imageUrl && (
                        <div className="overflow-hidden rounded-xl">
                          <img
                            src={imageUrl}
                            alt={title}
                            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="mt-4 flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-serif-display text-2xl text-[color:var(--ink)]">
                            {title}
                          </h3>
                          {description && (
                            <p className="mt-2 text-sm text-[color:var(--ink-soft)] line-clamp-3">
                              {description}
                            </p>
                          )}
                        </div>

                        {linkUrl && (
                          <a
                            href={linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--blue-deep)] hover:underline"
                          >
                            Watch Now <Play size={12} fill="currentColor" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

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

        {/* PLAYLISTS */}
        <div className="mt-24 space-y-20">
          {PLAYLISTS.map((playlist, i) => (
            <Reveal key={playlist.name}>
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
                      alt={playlist.name}
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
                      src={playlist.thumbnail}
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                      alt={playlist.name}
                    />
                  </a>
                )}

                <div className="md:w-1/2">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                    <ListVideo size={15} />
                    Playlist
                  </span>

                  <h2 className="mt-3 font-serif-display text-5xl">
                    {playlist.name}
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
