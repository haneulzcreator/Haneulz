import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  X,
} from "lucide-react";
import { api } from "../lib/api";
import { useBookmarks } from "../lib/bookmarks";
import { Reveal } from "../components/Reveal";
import AUCard from "../components/AUCard";
import Footer from "../components/Footer";

const AUS_PER_PAGE = 12;

const sourceFilters = [
  { key: "all", label: "All sources" },
  { key: "x", label: "X" },
  { key: "tiktok", label: "TikTok" },
  { key: "ao3", label: "AO3" },
];

const statusFilters = [
  { key: "all", label: "All statuses" },
  { key: "ongoing", label: "Ongoing" },
  { key: "completed", label: "Completed" },
];

const typeFilters = [
  { key: "all", label: "All types" },
  { key: "social media au", label: "Social Media AU" },
  { key: "written au", label: "Written AU" },
  { key: "one-shot", label: "One-shot" },
  { key: "series", label: "Series" },
];

const hiddenTags = new Set([
  "coffee shop",
  "fated",
  "headcanon",
  "music",
  "soft",
  "soulmate",
]);

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function getStatus(au) {
  return normalize(au.status || au.au_status || "");
}

function getType(au) {
  return normalize(au.au_type || au.type || "");
}

export default function AULibrary() {
  const [aus, setAus] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [source, setSource] = useState("all");
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");
  const [tag, setTag] = useState("all");

  const [savedOnly, setSavedOnly] = useState(false);

  const [sort, setSort] = useState("newest");

  const [filtersOpen, setFiltersOpen] = useState(false);

  const [page, setPage] = useState(1);

  const { isSaved, count: savedCount } = useBookmarks();

  useEffect(() => {
    api
      .get("/aus")
      .then((response) => {
        console.log("AU DATA:", response.data);

        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.aus || [];

        setAus(data);
      })
      .catch((error) => {
        console.error("AU loading error:", error);
        setAus([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /*
   * Build available tags from the actual AU data.
   * Hidden tags are excluded so the filter doesn't become enormous.
   */
  const allTags = useMemo(() => {
    const tags = aus.flatMap((au) => au.tags || []);

    return Array.from(
      new Set(
        tags
          .map((value) => String(value).trim())
          .filter(
            (value) =>
              value &&
              !hiddenTags.has(value.toLowerCase())
          )
      )
    ).sort((a, b) => a.localeCompare(b));
  }, [aus]);

  /*
   * Filter + search + sort.
   */
  const filteredAUs = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = [...aus];

    // Search
    if (query) {
      result = result.filter((au) => {
        const searchableText = [
          au.title,
          au.author_name,
          au.author,
          au.short_description,
          au.description,
          au.full_story,
          au.source,
          au.au_type,
          au.type,
          ...(au.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      });
    }

    // Source
    if (source !== "all") {
      result = result.filter(
        (au) => normalize(au.source || "other") === source
      );
    }

    // Status
    if (status !== "all") {
      result = result.filter((au) => {
        const auStatus = getStatus(au);

        if (status === "completed") {
          return (
            auStatus === "completed" ||
            auStatus === "complete" ||
            auStatus === "finished"
          );
        }

        if (status === "ongoing") {
          return (
            auStatus === "ongoing" ||
            auStatus === "in progress" ||
            auStatus === "active"
          );
        }

        return true;
      });
    }

    // AU Type
    if (type !== "all") {
      result = result.filter((au) => {
        const auType = getType(au);

        if (type === "social media au") {
          return (
            auType === "social media au" ||
            auType === "social media"
          );
        }

        if (type === "written au") {
          return (
            auType === "written au" ||
            auType === "written"
          );
        }

        if (type === "one-shot") {
          return (
            auType === "one-shot" ||
            auType === "oneshot" ||
            auType === "one shot"
          );
        }

        if (type === "series") {
          return auType === "series";
        }

        return true;
      });
    }

    // Tag
    if (tag !== "all") {
      result = result.filter((au) =>
        (au.tags || []).some(
          (item) => normalize(item) === normalize(tag)
        )
      );
    }

    // Saved
    if (savedOnly) {
      result = result.filter((au) => isSaved(au.id));
    }

    // Sorting
    result.sort((a, b) => {
      if (sort === "title") {
        return String(a.title || "").localeCompare(
          String(b.title || "")
        );
      }

      if (sort === "liked") {
        return (b.likes || 0) - (a.likes || 0);
      }

      if (sort === "bookmarked") {
        return (
          (b.bookmarks || b.saves || 0) -
          (a.bookmarks || a.saves || 0)
        );
      }

      if (sort === "updated") {
        return (
          new Date(b.updated_at || b.created_at || 0) -
          new Date(a.updated_at || a.created_at || 0)
        );
      }

      // newest
      return (
        new Date(b.created_at || 0) -
        new Date(a.created_at || 0)
      );
    });

    return result;
  }, [
    aus,
    search,
    source,
    status,
    type,
    tag,
    savedOnly,
    sort,
    isSaved,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAUs.length / AUS_PER_PAGE)
  );

  /*
   * Make sure the current page still exists after filtering.
   */
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  /*
   * Return to page 1 whenever the user changes a filter/search.
   */
  useEffect(() => {
    setPage(1);
  }, [
    search,
    source,
    status,
    type,
    tag,
    savedOnly,
    sort,
  ]);

  const startIndex = (page - 1) * AUS_PER_PAGE;

  const visibleAUs = filteredAUs.slice(
    startIndex,
    startIndex + AUS_PER_PAGE
  );

  const firstShown =
    filteredAUs.length === 0 ? 0 : startIndex + 1;

  const lastShown = Math.min(
    startIndex + AUS_PER_PAGE,
    filteredAUs.length
  );

  const hasActiveFilters =
    source !== "all" ||
    status !== "all" ||
    type !== "all" ||
    tag !== "all" ||
    savedOnly ||
    search.trim() !== "";

  function clearFilters() {
    setSearch("");
    setSource("all");
    setStatus("all");
    setType("all");
    setTag("all");
    setSavedOnly(false);
    setSort("newest");
    setPage(1);
  }

  function goToPage(nextPage) {
    const safePage = Math.max(
      1,
      Math.min(nextPage, totalPages)
    );

    setPage(safePage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-6xl px-5 md:px-6">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            The archive
          </p>

          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            AU Library
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)] md:text-lg">
            A little archive of alternate universes written
            and shared by HANEULZ fans. Find a story, save
            one for later, or discover something new.
          </p>
        </Reveal>


        {/* ====================================================
            SEARCH
        ==================================================== */}

        <div className="mt-10">
          <div className="relative">

            <Search
              size={18}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[color:var(--ink-soft)]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search works, authors, tags..."
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white py-4 pl-12 pr-12 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--ink-soft)] focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-[color:var(--ink-soft)] transition hover:bg-[color:var(--pink-soft)]"
              >
                <X size={15} />
              </button>
            )}

          </div>
        </div>


        {/* ====================================================
            FILTER BAR
        ==================================================== */}

        <div className="mt-5 rounded-2xl border border-[color:var(--line)] bg-white">

          <div className="flex flex-wrap items-center justify-between gap-3 p-3">

            <button
              type="button"
              onClick={() =>
                setFiltersOpen((value) => !value)
              }
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                filtersOpen || hasActiveFilters
                  ? "bg-[color:var(--ink)] text-white"
                  : "text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
              }`}
            >
              <Filter size={14} />

              Filters & Tags

              <ChevronDown
                size={14}
                className={`transition-transform ${
                  filtersOpen ? "rotate-180" : ""
                }`}
              />

              {hasActiveFilters && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-[9px] text-[color:var(--ink)]">
                  !
                </span>
              )}
            </button>


            <div className="flex items-center gap-2">

              <span className="hidden text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)] sm:inline">
                Sort
              </span>

              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value)
                }
                className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2.5 text-xs text-[color:var(--ink)] outline-none"
              >
                <option value="newest">
                  Recently added
                </option>

                <option value="updated">
                  Recently updated
                </option>

                <option value="liked">
                  Most liked
                </option>

                <option value="bookmarked">
                  Most bookmarked
                </option>

                <option value="title">
                  A–Z
                </option>
              </select>

            </div>

          </div>


          {/* ==================================================
              COLLAPSIBLE FILTERS
          ================================================== */}

          {filtersOpen && (
            <div className="border-t border-[color:var(--line)] px-4 pb-5 pt-5">

              {/* SOURCE */}

              <div>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                  Source
                </p>

                <div className="flex flex-wrap gap-2">

                  {sourceFilters.map((filter) => (
                    <button
                      key={filter.key}
                      type="button"
                      onClick={() =>
                        setSource(filter.key)
                      }
                      className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                        source === filter.key
                          ? "bg-[color:var(--blue-deep)] text-white"
                          : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}

                </div>
              </div>


              {/* STATUS */}

              <div className="mt-6">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                  Status
                </p>

                <div className="flex flex-wrap gap-2">

                  {statusFilters.map((filter) => (
                    <button
                      key={filter.key}
                      type="button"
                      onClick={() =>
                        setStatus(filter.key)
                      }
                      className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                        status === filter.key
                          ? "bg-[color:var(--ink)] text-white"
                          : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}

                </div>
              </div>


              {/* AU TYPE */}

              <div className="mt-6">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                  AU Type
                </p>

                <div className="flex flex-wrap gap-2">

                  {typeFilters.map((filter) => (
                    <button
                      key={filter.key}
                      type="button"
                      onClick={() =>
                        setType(filter.key)
                      }
                      className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                        type === filter.key
                          ? "bg-[color:var(--ink)] text-white"
                          : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}

                </div>
              </div>


              {/* TAGS */}

              {allTags.length > 0 && (
                <div className="mt-6">

                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                    Tags
                  </p>

                  <div className="flex max-h-44 flex-wrap gap-2 overflow-y-auto pr-1">

                    <button
                      type="button"
                      onClick={() => setTag("all")}
                      className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                        tag === "all"
                          ? "bg-[color:var(--pink-deep)] text-white"
                          : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                      }`}
                    >
                      All tags
                    </button>

                    {allTags.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTag(item)}
                        className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                          normalize(tag) ===
                          normalize(item)
                            ? "bg-[color:var(--pink-deep)] text-white"
                            : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}

                  </div>
                </div>
              )}


              {/* SAVED */}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line)] pt-5">

                <button
                  type="button"
                  onClick={() =>
                    setSavedOnly((value) => !value)
                  }
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                    savedOnly
                      ? "bg-[color:var(--ink)] text-white"
                      : "border border-[color:var(--line)] text-[color:var(--ink-soft)]"
                  }`}
                >
                  <Bookmark
                    size={13}
                    fill={
                      savedOnly
                        ? "currentColor"
                        : "none"
                    }
                  />

                  Saved
                  {savedCount > 0
                    ? ` (${savedCount})`
                    : ""}
                </button>


                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--pink-deep)]"
                  >
                    Clear all filters
                  </button>
                )}

              </div>

            </div>
          )}

        </div>


        {/* ====================================================
            RESULTS HEADER
        ==================================================== */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">

          <p className="text-xs text-[color:var(--ink-soft)]">
            {loading
              ? "Finding stories..."
              : filteredAUs.length === 0
              ? "No works found"
              : `Showing ${firstShown}–${lastShown} of ${filteredAUs.length} works`}
          </p>

          <Link
            to="/submit"
            data-testid="library-submit-btn"
            className="rounded-full bg-[color:var(--pink-deep)] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
          >
            + Submit yours
          </Link>

        </div>


        {/* ====================================================
            AU LIST
        ==================================================== */}

        <div
          className="mt-5 space-y-4 pb-10"
          data-testid="au-grid"
        >

          {loading && (
            <>
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-44 animate-pulse rounded-2xl border border-[color:var(--line)] bg-white"
                />
              ))}
            </>
          )}


          {!loading &&
            filteredAUs.length === 0 && (
              <div
                className="rounded-3xl border border-dashed border-[color:var(--line)] bg-white px-6 py-20 text-center"
                data-testid="au-empty"
              >

                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--pink-soft)]">
                  <Search
                    size={21}
                    className="text-[color:var(--pink-deep)]"
                  />
                </div>

                <h2 className="mt-5 font-serif-display text-3xl">
                  No stories found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
                  Try a different search or remove some
                  filters to find more HANEULZ AUs.
                </p>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 rounded-full bg-[color:var(--ink)] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white"
                  >
                    Clear filters
                  </button>
                )}

              </div>
            )}


          {!loading &&
            visibleAUs.map((au, index) => (
              <Reveal
                key={au.id}
                delay={(index % 4) * 0.04}
              >
                <div className="rounded-2xl">
                  <AUCard
                    au={au}
                    index={index}
                  />
                </div>
              </Reveal>
            ))}

        </div>


        {/* ====================================================
            PAGINATION
        ==================================================== */}

        {!loading && totalPages > 1 && (
          <div className="mb-16 flex flex-col items-center gap-4">

            <div className="flex items-center gap-2">

              <button
                type="button"
                disabled={page === 1}
                onClick={() =>
                  goToPage(page - 1)
                }
                aria-label="Previous page"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] transition hover:bg-[color:var(--pink-soft)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>


              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              )
                .filter((number) => {
                  if (totalPages <= 7) {
                    return true;
                  }

                  return (
                    number === 1 ||
                    number === totalPages ||
                    Math.abs(number - page) <= 1
                  );
                })
                .map((number, index, array) => {
                  const previous =
                    array[index - 1];

                  const needsEllipsis =
                    previous &&
                    number - previous > 1;

                  return (
                    <div
                      key={number}
                      className="flex items-center gap-2"
                    >

                      {needsEllipsis && (
                        <span className="px-1 text-xs text-[color:var(--ink-soft)]">
                          …
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          goToPage(number)
                        }
                        className={`grid h-10 min-w-10 place-items-center rounded-full px-3 text-xs font-semibold transition ${
                          page === number
                            ? "bg-[color:var(--ink)] text-white"
                            : "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
                        }`}
                      >
                        {number}
                      </button>

                    </div>
                  );
                })}


              <button
                type="button"
                disabled={page === totalPages}
                onClick={() =>
                  goToPage(page + 1)
                }
                aria-label="Next page"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] transition hover:bg-[color:var(--pink-soft)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>

            </div>


            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
              Page {page} of {totalPages}
            </p>

          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}
