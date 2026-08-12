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
  { key: "all", label: "All works" },
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
  { key: "all", label: "All types" },
  { key: "social media au", label: "Social media" },
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
    <div
      className="min-h-screen pt-24 md:pt-28"
      style={{
        background:
          "radial-gradient(circle at 8% 8%, rgba(216,190,177,.16), transparent 25%), radial-gradient(circle at 92% 18%, rgba(174,188,199,.14), transparent 23%), #F8F5F0",
      }}
    >
      <section className="mx-auto max-w-6xl px-5 md:px-8">

        {/* =====================================================
            HERO
        ===================================================== */}

        <Reveal>
          <div className="relative overflow-hidden border-y border-[#E5DED6] py-14 md:py-20">

            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-10 top-2 text-[12rem] font-serif-display leading-none text-[#EEE8E1] md:text-[16rem]">
              H
            </div>

            <div className="pointer-events-none absolute left-1/2 top-10 h-2 w-2 rounded-full bg-[#D6AEB8]" />

            <div className="relative">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C8B5A7]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#81766F]">
                  HANEULZ archive
                </p>

                <Sparkles
                  size={12}
                  strokeWidth={1.5}
                  className="text-[#C99DA9]"
                />
              </div>

              <h1 className="mt-7 max-w-4xl font-serif-display text-6xl font-medium leading-[0.88] tracking-[-0.035em] text-[#29272A] md:text-8xl">
                AU
                <span className="text-[#C89FAA]">.</span>{" "}
                Library
              </h1>

              <div className="mt-8 flex max-w-2xl flex-col gap-6 md:flex-row md:items-end md:justify-between">

                <p className="max-w-xl text-sm leading-7 text-[#716B69] md:text-base">
                  A little collection of alternate universes,
                  stories, and ideas written about HANEULZ —
                  gathered in one quiet corner of the internet.
                </p>

                <div className="flex shrink-0 items-center gap-5">

                  <div>
                    <p className="font-serif-display text-3xl text-[#29272A]">
                      {aus.length}
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#8A817B]">
                      works
                    </p>
                  </div>

                  <span className="h-9 w-px bg-[#DDD5CD]" />

                  <div>
                    <p className="font-serif-display text-3xl text-[#29272A]">
                      ✦
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#8A817B]">
                      archive
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </Reveal>


        {/* =====================================================
            SEARCH
        ===================================================== */}

        <div className="mt-9">

          <div className="group relative">

            <Search
              size={17}
              strokeWidth={1.5}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#8C837D] transition group-focus-within:text-[#B98592]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search stories, authors, tags..."
              className="w-full border-b border-[#DCD4CC] bg-transparent py-4 pl-12 pr-12 text-sm text-[#29272A] outline-none transition placeholder:text-[#9A928C] focus:border-[#B98592]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-[#8C837D] transition hover:bg-[#EEE7E1]"
              >
                <X size={14} />
              </button>
            )}

          </div>
        </div>


        {/* =====================================================
            SOURCE NAVIGATION
        ===================================================== */}

        <div className="mt-7 flex items-center justify-between gap-5 border-b border-[#E2DAD2]">

          <div className="flex min-w-0 gap-6 overflow-x-auto">

            {sourceFilters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setSource(filter.key)}
                className={`relative shrink-0 pb-3 text-[9px] font-bold uppercase tracking-[0.16em] transition ${
                  source === filter.key
                    ? "text-[#29272A]"
                    : "text-[#928983] hover:text-[#5E5855]"
                }`}
              >
                {filter.label}

                {source === filter.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#B98592]" />
                )}
              </button>
            ))}

          </div>

          <div className="hidden shrink-0 text-[8px] font-bold uppercase tracking-[0.18em] text-[#A09791] sm:block">
            {filteredAUs.length} results
          </div>

        </div>


        {/* =====================================================
            FILTER / SORT
        ===================================================== */}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">

          <button
            type="button"
            onClick={() =>
              setFiltersOpen((value) => !value)
            }
            className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] transition ${
              filtersOpen || hasActiveFilters
                ? "text-[#A86F7C]"
                : "text-[#817873] hover:text-[#29272A]"
            }`}
          >
            <Filter size={13} strokeWidth={1.5} />

            Filters

            <ChevronDown
              size={13}
              strokeWidth={1.5}
              className={`transition-transform ${
                filtersOpen ? "rotate-180" : ""
              }`}
            />

            {hasActiveFilters && (
              <span className="ml-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#D9B4BD] px-1 text-[7px] text-white">
                !
              </span>
            )}
          </button>

          <div className="flex items-center gap-3">

            <span className="hidden text-[8px] font-bold uppercase tracking-[0.18em] text-[#9A918B] sm:inline">
              Sort by
            </span>

            <select
              value={sort}
              onChange={(event) =>
                setSort(event.target.value)
              }
              className="border-none bg-transparent py-2 pl-1 pr-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#4D4846] outline-none"
            >
              <option value="newest">Newest</option>
              <option value="updated">Updated</option>
              <option value="liked">Most liked</option>
              <option value="bookmarked">Most saved</option>
              <option value="title">A–Z</option>
            </select>

          </div>

        </div>


        {/* =====================================================
            FILTER PANEL
        ===================================================== */}

        {filtersOpen && (
          <div className="mt-4 border-y border-[#E2DAD2] py-6">

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
              className="mt-7"
            />

            {allTags.length > 0 && (
              <div className="mt-7">

                <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.22em] text-[#918780]">
                  Tags
                </p>

                <div className="flex max-h-32 flex-wrap gap-2 overflow-y-auto">

                  <FilterButton
                    active={tag === "all"}
                    onClick={() => setTag("all")}
                  >
                    All
                  </FilterButton>

                  {allTags.map((item) => (
                    <FilterButton
                      key={item}
                      active={
                        normalize(tag) === normalize(item)
                      }
                      onClick={() => setTag(item)}
                    >
                      {item}
                    </FilterButton>
                  ))}

                </div>

              </div>
            )}

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5DED6] pt-5">

              <button
                type="button"
                onClick={() =>
                  setSavedOnly((value) => !value)
                }
                className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                  savedOnly
                    ? "text-[#A86F7C]"
                    : "text-[#817873] hover:text-[#29272A]"
                }`}
              >
                <Bookmark
                  size={13}
                  strokeWidth={1.5}
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
                  className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#A86F7C] transition hover:text-[#29272A]"
                >
                  Clear all
                </button>
              )}

            </div>

          </div>
        )}


        {/* =====================================================
            COLLECTION HEADER
        ===================================================== */}

        <div className="mt-12 flex items-end justify-between gap-5">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-5 bg-[#C9A9AF]" />

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#9A817F]">
                The collection
              </p>

            </div>

            <p className="mt-2 text-xs text-[#817A76]">
              {loading
                ? "Looking through the archive..."
                : filteredAUs.length === 0
                ? "Nothing found"
                : `Showing ${firstShown}–${lastShown} of ${filteredAUs.length}`}
            </p>

          </div>

          <Link
            to="/submit"
            className="group flex items-center gap-2 border-b border-[#C9A2AC] pb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#9C6876] transition hover:border-[#29272A] hover:text-[#29272A]"
          >
            Submit yours

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>


        {/* =====================================================
            AU LIST
        ===================================================== */}

        <div className="mt-6 space-y-4 pb-12">

          {loading &&
            [1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-40 animate-pulse border border-[#E4DDD5] bg-[#FCFAF7]"
              />
            ))}


          {!loading &&
            filteredAUs.length === 0 && (
              <div className="border-y border-dashed border-[#DCD4CC] px-6 py-24 text-center">

                <div className="mx-auto flex items-center justify-center gap-2 text-[#B98C98]">
                  <span className="h-px w-8 bg-[#D8C1C5]" />
                  <Sparkles size={16} strokeWidth={1.3} />
                  <span className="h-px w-8 bg-[#D8C1C5]" />
                </div>

                <h2 className="mt-6 font-serif-display text-4xl text-[#29272A]">
                  Nothing here yet
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#817A76]">
                  Try changing your search or removing some
                  filters to find another story.
                </p>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-7 border-b border-[#B98592] pb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A06F7B]"
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


        {/* =====================================================
            PAGINATION
        ===================================================== */}

        {!loading && totalPages > 1 && (
          <div className="mb-20 flex flex-col items-center gap-4">

            <div className="flex items-center gap-1">

              <button
                type="button"
                disabled={page === 1}
                onClick={() => goToPage(page - 1)}
                className="grid h-9 w-9 place-items-center text-[#817873] transition hover:text-[#29272A] disabled:opacity-25"
                aria-label="Previous page"
              >
                <ChevronLeft size={15} strokeWidth={1.5} />
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
                      className="flex items-center"
                    >

                      {previous &&
                        number - previous > 1 && (
                          <span className="px-2 text-xs text-[#AAA19A]">
                            ···
                          </span>
                        )}

                      <button
                        type="button"
                        onClick={() => goToPage(number)}
                        className={`grid h-9 min-w-9 place-items-center text-[10px] transition ${
                          page === number
                            ? "font-bold text-[#A06F7B] underline decoration-[#D4AAB3] underline-offset-4"
                            : "text-[#918983] hover:text-[#29272A]"
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
                className="grid h-9 w-9 place-items-center text-[#817873] transition hover:text-[#29272A] disabled:opacity-25"
                aria-label="Next page"
              >
                <ChevronRight size={15} strokeWidth={1.5} />
              </button>

            </div>

            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#A09892]">
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
   FILTER COMPONENTS
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

      <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.22em] text-[#918780]">
        {title}
      </p>

      <div className="flex flex-wrap gap-x-5 gap-y-2">

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
      className={`border-b pb-1 text-[9px] font-semibold uppercase tracking-[0.12em] transition ${
        active
          ? "border-[#C99FAA] text-[#9D6875]"
          : "border-transparent text-[#817873] hover:border-[#D8C5C7] hover:text-[#29272A]"
      }`}
    >
      {children}
    </button>
  );
}
