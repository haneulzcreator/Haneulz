import { useEffect, useState } from "react";
import { Play, ListVideo, X, AlertCircle } from "lucide-react";

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
    name: "📸 HANEULZ 🌩️",
    thumbnail: REAL.ahofGroup,
    description: "Yence posts, Han posts, HANEULZ DC updates and fan moments.",
    videos: [
      {
        category: "🦌 Yence Posts",
        posts: [
          { image: "/images/yence1.jpg", url: "https://x.com/" },
          { image: "/images/yence2.jpg", url: "https://instagram.com/" },
        ],
      },
      {
        category: "🐈‍⬛ Han Posts",
        posts: [
          { image: "/images/han1.jpg", url: "https://x.com/" },
          { image: "/images/han2.jpg", url: "https://instagram.com/" },
        ],
      },
      {
        category: "🎬 HANEULZ DC",
        posts: [{ image: "/images/dc1.jpg", url: "https://x.com/" }],
      },
    ],
  },
  {
    name: "AHOF's First Anniversary",
    url: "https://youtube.com/",
    thumbnail: "https://img.youtube.com/vi/roXu3mS4TOc/maxresdefault.jpg",
    description: "Celebrating AHOF's first anniversary with lives and memories.",
  },
  {
    name: "AHOF Music Videos",
    url: "https://youtube.com/",
    thumbnail: "https://img.youtube.com/vi/OhbMVYVNo40/maxresdefault.jpg",
    description: "Every AHOF music video in one place.",
  },
];

// Helper to extract YouTube Video ID from standard URLs
function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default function Variety() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [playingDuet, setPlayingDuet] = useState(null);
  const [playingShowId, setPlayingShowId] = useState(null);
  const [openPlaylist, setOpenPlaylist] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    async function loadVariety() {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get("/variety");
        setShows(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to load variety shows:", err);
        setError("Unable to load latest episodes. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadVariety();
  }, []);

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
            Grab a comfort snack and watch HANEULZ with AHOF — every show, game,
            and memorable moment together.
          </p>
        </Reveal>

        {/* DYNAMIC VARIETY POSTS / SHOWS FROM BACKEND */}
        <div className="mt-20">
          <Reveal>
            <h2 className="mb-10 font-serif-display text-5xl">
              Featured Episodes
            </h2>
          </Reveal>

          {loading && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="animate-pulse rounded-[2rem] bg-white/40 p-5"
                >
                  <div className="aspect-video rounded-xl bg-gray-200/60" />
                  <div className="mt-4 h-6 w-3/4 rounded bg-gray-200/60" />
                  <div className="mt-2 h-4 w-full rounded bg-gray-200/60" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="flex items-center gap-3 rounded-2xl bg-red-50/80 p-4 text-red-700 backdrop-blur-md">
              <AlertCircle size={20} />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {!loading && !error && shows.length === 0 && (
            <div className="rounded-[2rem] bg-white/40 p-8 text-center backdrop-blur-md">
              <p className="text-[color:var(--ink-soft)]">
                No featured episodes posted yet. Check back soon!
              </p>
            </div>
          )}

          {!loading && !error && shows.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {shows.map((show, idx) => {
                const imageUrl = show.image_url || show.imageUrl || show.image;
                const title = show.title || "Untitled Episode";
                const description = show.description || show.content;
                const linkUrl = show.url || show.link;
                const youtubeId = extractYouTubeId(linkUrl);
                const showId = show.id || show._id || idx;

                return (
                  <Reveal key={showId}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white/60 p-5 backdrop-blur-md transition duration-300 hover:shadow-xl">
                      {playingShowId === showId && youtubeId ? (
                        <iframe
                          className="aspect-video w-full rounded-xl"
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                          allowFullScreen
                          title={title}
                        />
                      ) : (
                        imageUrl && (
                          <div className="relative overflow-hidden rounded-xl">
                            <img
                              src={imageUrl}
                              alt={title}
                              className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                            {youtubeId && (
                              <button
                                onClick={() => setPlayingShowId(showId)}
                                className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30"
                              >
                                <div className="rounded-full bg-white p-3 shadow-lg">
                                  <Play fill="currentColor" size={20} />
                                </div>
                              </button>
                            )}
                          </div>
                        )
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
                          <div className="mt-6">
                            {youtubeId ? (
                              <button
                                onClick={() => setPlayingShowId(showId)}
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--blue-deep)] hover:underline"
                              >
                                Watch Inline <Play size={12} fill="currentColor" />
                              </button>
                            ) : (
                              <a
                                href={linkUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--blue-deep)] hover:underline"
                              >
                                Watch External <Play size={12} fill="currentColor" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>

        {/* DUETS */}
        <div className="mt-20">
          <Reveal>
            <h2 className="mb-10 font-serif-display text-5xl">Their Duets</h2>
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
                    className="group relative w-full overflow-hidden rounded-[2rem]"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${d.videoId}/maxresdefault.jpg`}
                      alt={d.title}
                      className="aspect-video w-full object-cover"
                    />

                    <div className="absolute inset-0 grid place-items-center bg-black/25">
                      <div className="rounded-full bg-white p-5">
                        <Play fill="currentColor" />
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
                      setActiveSection(playlist.videos[0]);
                    }}
                    className="group relative w-full overflow-hidden rounded-[2.5rem] md:w-1/2"
                  >
                    <img
                      src={playlist.thumbnail}
                      className="aspect-video w-full object-cover"
                      alt={playlist.name}
                    />

                    <div className="absolute inset-0 grid place-items-center bg-black/20">
                      <div className="rounded-full bg-white p-5">
                        <Play fill="currentColor" />
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
                      className="aspect-video w-full object-cover"
                      alt={playlist.name}
                    />
                  </a>
                )}

                <div className="md:w-1/2">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
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
          <PlaylistModal
            playlist={openPlaylist}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onClose={() => {
              setOpenPlaylist(null);
              setActiveSection(null);
            }}
          />
        )}
      </section>

      <Footer />
    </div>
  );
}

function PlaylistModal({ playlist, activeSection, setActiveSection, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--blue-deep)]">
              HANEULZ POSTS
            </p>

            <h2 className="mt-2 font-serif-display text-4xl">
              {playlist.name}
            </h2>
          </div>

          <button onClick={onClose} className="rounded-full border p-2">
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {playlist.videos.map((section) => (
            <button
              key={section.category}
              onClick={() => setActiveSection(section)}
              className={`rounded-full border px-4 py-2 ${
                activeSection?.category === section.category
                  ? "bg-pink-100"
                  : ""
              }`}
            >
              {section.category}
            </button>
          ))}
        </div>

        {activeSection && (
          <div className="mt-8">
            <h3 className="mb-6 font-serif-display text-3xl">
              {activeSection.category}
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {activeSection.posts.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-xl"
                >
                  <img
                    src={post.image}
                    alt=""
                    className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
