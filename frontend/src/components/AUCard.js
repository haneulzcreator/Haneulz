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
  Sparkles,
} from "lucide-react";

import { api } from "../lib/api";
import { useBookmarks } from "../lib/bookmarks";
import { Reveal } from "../components/Reveal";
import AUCard from "../components/AUCard";
import Footer from "../components/Footer";

const AUS_PER_PAGE = 12;

const sourceFilters = [
  { key: "all", label: "All" },
  { key: "x", label: "X" },
  { key: "tiktok", label: "TikTok" },
  { key: "ao3", label: "AO3" },
];

const statusFilters = [
  { key: "all", label: "All" },
  { key: "ongoing", label: "Ongoing" },
  { key: "completed", label: "Completed" },
];

const typeFilters = [
  { key: "all", label: "All" },
  { key: "social media au", label: "Social Media" },
  { key: "written au", label: "Written" },
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
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.aus || [];

        setAus(data);
      })
      .catch((error) => {
        console.error("AU loading error:", error);
        setAus([]);
      })
      .finally(() => setLoading(false));
  }, []);

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

  const filteredAUs = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = [...aus];

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

    if (source !== "all") {
      result = result.filter(
        (au) => normalize(au.source || "other") === source
      );
    }

    if (status !== "all") {
      result = result.filter((au) => {
        const value = getStatus(au);

        if (status === "completed") {
          return ["completed", "complete", "finished"].includes(value);
        }

        if (status === "ongoing") {
          return ["ongoing", "in progress", "active"].includes(value);
        }

        return true;
      });
    }

    if (type !== "all") {
      result = result.filter((au) => {
        const value = getType(au);

        if (type === "social media au") {
          return ["social media au", "social media"].includes(value);
        }

        if (type === "written au") {
          return ["written au", "written"].includes(value);
        }

        if (type === "one-shot") {
          return ["one-shot", "oneshot", "one shot"].includes(value);
        }

        return value === type;
      });
    }

    if (tag !== "all") {
      result = result.filter((au) =>
        (au.tags || []).some(
          (item) => normalize(item) === normalize(tag)
        )
      );
    }

    if (savedOnly) {
      result = result.filter((au) => isSaved(au.id));
    }

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

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

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
    <div className="pt-28 md:pt-32">

      <section className="mx-auto max-w-5xl px-5 md:px-6">

        {/* HERO */}

        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white px-6 py-12 md:px-10 md:py-16">

            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[color:var(--pink-soft)] opacity-70 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-2 text-[color:var(--pink-deep)]">
                <Sparkles size={14} />

                <p className="text-[9px] font-bold uppercase tracking-[0.28em]">
                  HANEULZ archive
                </p>
              </div>

              <h1 className="mt-5 max-w-3xl font-serif-display text-5xl font-medium leading-[0.95] md:text-7xl">
                Little worlds
                <br />
                written about them.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
                A growing collection of HANEULZ alternate
                universes, stories, and little ideas shared
                by fans.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <div className="rounded-full bg-[color:var(--pink-soft)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em]">
                  {aus.length} works
                </div>

                <div className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">
                  HANEULZ only
                </div>

              </div>

            </div>
          </div>
        </Reveal>


        {/* SEARCH */}

        <div className="mt-7">

          <div className="relative">

            <Search
              size={17}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[color:var(--ink-soft)]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search the archive..."
              className="w-full rounded-2xl border border-[color:var(--line)] bg-white py-4 pl-12 pr-12 text-sm outline-none transition focus:border-[color:var(--pink-deep)] focus:ring-4 focus:ring-[color:var(--pink-soft)]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full hover:bg-[color:var(--pink-soft)]"
              >
                <X size={14} />
              </button>
            )}

          </div>
        </div>


        {/* SOURCE TABS */}

        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1">

          {sourceFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setSource(filter.key)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.16em] transition ${
                source === filter.key
                  ? "bg-[color:var(--ink)] text-white"
                  : "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
              }`}
            >
              {filter.label}
            </button>
          ))}

        </div>


        {/* FILTER TOOLBAR */}

        <div className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white">

          <div className="flex items-center justify-between gap-3 p-3">

            <button
              type="button"
              onClick={() =>
                setFiltersOpen((value) => !value)
              }
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.15em] ${
                filtersOpen || hasActiveFilters
                  ? "bg-[color:var(--pink-soft)] text-[color:var(--ink)]"
                  : "text-[color:var(--ink-soft)]"
              }`}
            >
              <Filter size={13} />

              Filters

              <ChevronDown
                size={13}
                className={`transition ${
                  filtersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <select
              value={sort}
              onChange={(event) =>
                setSort(event.target.value)
              }
              className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.1em] outline-none"
            >
              <option value="newest">Newest</option>
              <option value="updated">Updated</option>
              <option value="liked">Most liked</option>
              <option value="bookmarked">Most saved</option>
              <option value="title">A–Z</option>
            </select>

          </div>


          {filtersOpen && (
            <div className="border-t border-[color:var(--line)] px-4 pb-5 pt-5">

              <FilterGroup
                title="Status"
                options={statusFilters}
                value={status}
                onChange={setStatus}
              />

              <FilterGroup
                title="Type"
                options={typeFilters}
                value={type}
                onChange={setType}
                className="mt-6"
              />

              {allTags.length > 0 && (
                <div className="mt-6">

                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                    Tags
                  </p>

                  <div className="flex max-h-36 flex-wrap gap-2 overflow-y-auto">

                    <FilterButton
                      active={tag === "all"}
                      onClick={() => setTag("all")}
                    >
                      All
                    </FilterButton>

                    {allTags.map((item) => (
                      <FilterButton
                        key={item}
                        active={normalize(tag) === normalize(item)}
                        onClick={() => setTag(item)}
                      >
                        {item}
                      </FilterButton>
                    ))}

                  </div>

                </div>
              )}


              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line)] pt-5">

                <button
                  type="button"
                  onClick={() =>
                    setSavedOnly((value) => !value)
                  }
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] ${
                    savedOnly
                      ? "bg-[color:var(--ink)] text-white"
                      : "border border-[color:var(--line)] text-[color:var(--ink-soft)]"
                  }`}
                >
                  <Bookmark
                    size={12}
                    fill={savedOnly ? "currentColor" : "none"}
                  />

                  Saved

                  {savedCount > 0 &&
                    ` (${savedCount})`}
                </button>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[9px] font-bold uppercase tracking-[0.15em] text-[color:var(--pink-deep)]"
                  >
                    Clear filters
                  </button>
                )}

              </div>

            </div>
          )}

        </div>


        {/* RESULTS */}

        <div className="mt-8 flex items-end justify-between gap-4">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--pink-deep)]">
              The collection
            </p>

            <p className="mt-1 text-xs text-[color:var(--ink-soft)]">
              {loading
                ? "Looking through the archive..."
                : filteredAUs.length === 0
                ? "Nothing found"
                : `${firstShown}–${lastShown} of ${filteredAUs.length} works`}
            </p>
          </div>

          <Link
            to="/submit"
            className="shrink-0 rounded-full bg-[color:var(--pink-deep)] px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition hover:-translate-y-0.5"
          >
            + Submit
          </Link>

        </div>


        {/* AU ENTRIES */}

        <div className="mt-5 space-y-3 pb-10">

          {loading &&
            [1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-40 animate-pulse rounded-2xl border border-[color:var(--line)] bg-white"
              />
            ))}


          {!loading &&
            filteredAUs.length === 0 && (
              <div className="rounded-3xl border border-dashed border-[color:var(--line)] bg-white px-6 py-20 text-center">

                <Search
                  size={22}
                  className="mx-auto text-[color:var(--pink-deep)]"
                />

                <h2 className="mt-5 font-serif-display text-3xl">
                  Nothing here yet
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[color:var(--ink-soft)]">
                  Try changing your search or filters.
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
                <AUCard
                  au={au}
                  index={index}
                />
              </Reveal>
            ))}

        </div>


        {/* PAGINATION */}

        {!loading && totalPages > 1 && (
          <div className="mb-16 flex flex-col items-center gap-4">

            <div className="flex items-center gap-2">

              <button
                type="button"
                disabled={page === 1}
                onClick={() => goToPage(page - 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white disabled:opacity-30"
              >
                <ChevronLeft size={15} />
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              )
                .filter((number) => {
                  if (totalPages <= 7) return true;

                  return (
                    number === 1 ||
                    number === totalPages ||
                    Math.abs(number - page) <= 1
                  );
                })
                .map((number, index, array) => {
                  const previous = array[index - 1];

                  return (
                    <div
                      key={number}
                      className="flex items-center gap-2"
                    >

                      {previous &&
                        number - previous > 1 && (
                          <span className="text-xs text-[color:var(--ink-soft)]">
                            …
                          </span>
                        )}

                      <button
                        type="button"
                        onClick={() => goToPage(number)}
                        className={`grid h-10 min-w-10 place-items-center rounded-full px-3 text-xs font-semibold ${
                          page === number
                            ? "bg-[color:var(--ink)] text-white"
                            : "border border-[color:var(--line)] bg-white text-[color:var(--ink-soft)]"
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
                onClick={() => goToPage(page + 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white disabled:opacity-30"
              >
                <ChevronRight size={15} />
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


/* ============================================================
   SMALL COMPONENTS
============================================================ */

function FilterGroup({
  title,
  options,
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={className}>

      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
        {title}
      </p>

      <div className="flex flex-wrap gap-2">

        {options.map((option) => (
          <FilterButton
            key={option.key}
            active={value === option.key}
            onClick={() => onChange(option.key)}
          >
            {option.label}
          </FilterButton>
        ))}

      </div>

    </div>
  );
}


function FilterButton({
  active,
  onClick,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] transition ${
        active
          ? "bg-[color:var(--pink-deep)] text-white"
          : "border border-[color:var(--line)] text-[color:var(--ink-soft)] hover:bg-[color:var(--pink-soft)]"
      }`}
    >
      {children}
    </button>
  );
}
