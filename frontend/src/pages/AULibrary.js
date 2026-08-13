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
  ArrowDownRight,
} from "lucide-react";

import { api } from "../lib/api";
import { useBookmarks } from "../lib/bookmarks";
import { Reveal } from "../components/Reveal";
import AUCard from "../components/AUCard";
import Footer from "../components/Footer";

// ============================================================
// PAGINATION
// ============================================================

const AUS_PER_PAGE = 20;

// ============================================================
// FILTER OPTIONS
// ============================================================

const sourceFilters = [
  { key: "all", label: "All stories" },
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

// Tags that should not appear in the filter section
const hiddenTags = new Set([
  "coffee shop",
  "fated",
  "headcanon",
  "music",
  "soft",
  "soulmate",
]);

// ============================================================
// HELPERS
// ============================================================

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function getStatus(au) {
  return normalize(au.status || au.au_status || "");
}

function getType(au) {
  return normalize(au.au_type || au.type || "");
}

// ============================================================
// AU LIBRARY
// ============================================================

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

  // ==========================================================
  // LOAD AUs
  // ==========================================================

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
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ==========================================================
  // GET ALL AVAILABLE TAGS
  // ==========================================================

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

  // ==========================================================
  // FILTER + SEARCH + SORT
  // ==========================================================

  const filteredAUs = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = [...aus];

    // SEARCH
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

    // SOURCE
    if (source !== "all") {
      result = result.filter(
        (au) =>
          normalize(au.source || "other") === source
      );
    }

    // STATUS
    if (status !== "all") {
      result = result.filter((au) => {
        const value = getStatus(au);

        if (status === "completed") {
          return [
            "completed",
            "complete",
            "finished",
          ].includes(value);
        }

        if (status === "ongoing") {
          return [
            "ongoing",
            "in progress",
            "active",
          ].includes(value);
        }

        return true;
      });
    }

    // TYPE
    if (type !== "all") {
      result = result.filter((au) => {
        const value = getType(au);

        if (type === "social media au") {
          return [
            "social media au",
            "social media",
          ].includes(value);
        }

        if (type === "written au") {
          return [
            "written au",
            "written",
          ].includes(value);
        }

        if (type === "one-shot") {
          return [
            "one-shot",
            "oneshot",
            "one shot",
          ].includes(value);
        }

        return value === type;
      });
    }

    // TAG
    if (tag !== "all") {
      result = result.filter((au) =>
        (au.tags || []).some(
          (item) =>
            normalize(item) === normalize(tag)
        )
      );
    }

    // SAVED ONLY
    if (savedOnly) {
      result = result.filter((au) =>
        isSaved(au.id)
      );
    }

    // SORT
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
          new Date(
            b.updated_at ||
              b.created_at ||
              0
          ) -
          new Date(
            a.updated_at ||
              a.created_at ||
              0
          )
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

  // ==========================================================
  // PAGINATION
  // ==========================================================

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredAUs.length / AUS_PER_PAGE
    )
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

  const startIndex =
    (page - 1) * AUS_PER_PAGE;

  const visibleAUs = filteredAUs.slice(
    startIndex,
    startIndex + AUS_PER_PAGE
  );

  const firstShown =
    filteredAUs.length === 0
      ? 0
      : startIndex + 1;

  const lastShown = Math.min(
    startIndex + AUS_PER_PAGE,
    filteredAUs.length
  );

  // ==========================================================
  // ACTIVE FILTER CHECK
  // ==========================================================

  const hasActiveFilters =
    source !== "all" ||
    status !== "all" ||
    type !== "all" ||
    tag !== "all" ||
    savedOnly ||
    search.trim() !== "";

  // ==========================================================
  // CLEAR FILTERS
  // ==========================================================

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

  // ==========================================================
  // PAGE NAVIGATION
  // ==========================================================

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

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f5ef] text-[#292725]">

      {/* BACKGROUND DECOR */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#f5dfe4] opacity-40 blur-3xl" />

        <div className="absolute -right-32 top-[38rem] h-96 w-96 rounded-full bg-[#dce9ee] opacity-45 blur-3xl" />

        <div className="absolute left-[8%] top-[45%] font-serif-display text-[8rem] text-[#292725]/[0.025]">
          ✦
        </div>

        <div className="absolute right-[8%] top-[15%] rotate-12 font-serif-display text-[6rem] text-[#d88f9b]/[0.07]">
          ♡
        </div>

        <div className="absolute bottom-[10%] left-[5%] h-24 w-24 rounded-full border border-[#292725]/[0.04]" />

      </div>

      <main className="relative pt-28 md:pt-36">

        <section className="mx-auto max-w-6xl px-5 md:px-8">

          {/* EDITORIAL HERO */}

          <Reveal>

            <div className="relative min-h-[430px] overflow-hidden border-y border-[#292725]/10">

              <div className="absolute right-5 top-5 hidden h-24 w-24 border-r border-t border-[#292725]/10 md:block" />

              <div className="absolute bottom-5 left-5 hidden h-24 w-24 border-b border-l border-[#292725]/10 md:block" />

              <div className="relative grid min-h-[430px] items-center py-16 md:grid-cols-[1fr_280px] md:gap-12 md:py-20">

                <div>

                  <div className="flex items-center gap-3">

                    <span className="h-px w-8 bg-[#d78f9b]" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#8f6f75]">
                      HANEULZ / ARCHIVE 01
                    </p>

                  </div>

                  <h1 className="mt-7 max-w-4xl font-serif-display text-6xl font-medium leading-[0.88] tracking-[-0.04em] md:text-8xl">

                    Little worlds

                    <span className="block pl-8 text-[#b86f7d] md:pl-20">
                      written about them.
                    </span>

                  </h1>

                  <p className="mt-8 max-w-xl text-sm leading-7 text-[#716c67] md:text-base">
                    A growing collection of alternate universes,
                    stories, and little ideas created and shared
                    by HANEULZ fans.
                  </p>

                  <div className="mt-9 flex items-center gap-4">

                    <Link
                      to="/submit"
                      className="group inline-flex items-center gap-3 bg-[#292725] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b86f7d]"
                    >
                      Submit a story

                      <ArrowDownRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                      />
                    </Link>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#918b84]">
                      {aus.length} collected
                    </span>

                  </div>

                </div>

                {/* HERO SIDE NOTE */}

                <div className="relative mt-12 hidden md:block">

                  <div className="rotate-[-3deg] border border-[#292725]/10 bg-[#fffdf8] p-6 shadow-[8px_12px_0_rgba(41,39,37,0.035)]">

                    <div className="flex justify-between">

                      <Sparkles
                        size={15}
                        className="text-[#d78f9b]"
                      />

                      <span className="font-serif-display text-lg">
                        01
                      </span>

                    </div>

                    <p className="mt-10 font-serif-display text-2xl leading-tight">
                      stories can make
                      <br />
                      a whole little
                      <br />
                      universe.
                    </p>

                    <div className="mt-8 h-px bg-[#292725]/10" />

                    <p className="mt-4 text-[8px] uppercase tracking-[0.22em] text-[#918b84]">
                      curated for HANEULZ
                    </p>

                  </div>

                </div>

              </div>

              <div className="absolute bottom-8 right-8 text-lg text-[#d78f9b]">
                ✦
              </div>

              <div className="absolute left-[46%] top-10 text-xs text-[#9eb9c2]">
                +
              </div>

            </div>

          </Reveal>

          {/* SEARCH */}

          <div className="mt-10">

            <div className="group relative">

              <Search
                size={17}
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#8f8982] transition group-focus-within:text-[#b86f7d]"
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search the archive..."
                className="w-full border-b border-[#292725]/15 bg-transparent py-4 pl-8 pr-10 text-sm outline-none transition placeholder:text-[#aaa49d] focus:border-[#b86f7d]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-0 top-1/2 grid h-8 w-8 -translate-y-1/2 rounded-full text-[#8f8982] hover:bg-[#f1dfe3]"
                >
                  <X size={14} />
                </button>
              )}

            </div>

          </div>

          {/* SOURCE NAV */}

          <div className="mt-6 flex items-center justify-between gap-5">

            <div className="flex min-w-0 items-center gap-1 overflow-x-auto pb-2">

              {sourceFilters.map((filter) => (

                <button
                  key={filter.key}
                  type="button"
                  onClick={() =>
                    setSource(filter.key)
                  }
                  className={`shrink-0 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] transition ${
                    source === filter.key
                      ? "bg-[#292725] text-white"
                      : "text-[#827c75] hover:text-[#b86f7d]"
                  }`}
                >
                  {filter.label}
                </button>

              ))}

            </div>

            <div className="hidden items-center gap-2 text-[#9a948c] sm:flex">

              <span className="h-px w-8 bg-[#292725]/10" />

              <span className="text-[8px] uppercase tracking-[0.2em]">
                browse
              </span>

            </div>

          </div>

          {/* FILTER BAR */}

          <div className="mt-3 border-y border-[#292725]/10">

            <div className="flex items-center justify-between gap-4 py-3">

              <button
                type="button"
                onClick={() =>
                  setFiltersOpen((value) => !value)
                }
                className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.17em] transition ${
                  filtersOpen || hasActiveFilters
                    ? "text-[#b86f7d]"
                    : "text-[#827c75] hover:text-[#292725]"
                }`}
              >

                <Filter size={13} />

                Filters

                {hasActiveFilters && (
                  <span className="grid h-4 min-w-4 place-items-center rounded-full bg-[#d78f9b] px-1 text-[8px] text-white">
                    !
                  </span>
                )}

                <ChevronDown
                  size={13}
                  className={`transition ${
                    filtersOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              <div className="flex items-center gap-3">

                <span className="hidden text-[8px] uppercase tracking-[0.2em] text-[#aaa39b] sm:inline">
                  Sort by
                </span>

                <select
                  value={sort}
                  onChange={(event) =>
                    setSort(event.target.value)
                  }
                  className="bg-transparent text-[9px] font-bold uppercase tracking-[0.12em] outline-none"
                >
                  <option value="newest">
                    Newest
                  </option>

                  <option value="updated">
                    Updated
                  </option>

                  <option value="liked">
                    Most liked
                  </option>

                  <option value="bookmarked">
                    Most saved
                  </option>

                  <option value="title">
                    A–Z
                  </option>
                </select>

              </div>

            </div>

            {filtersOpen && (

              <div className="border-t border-[#292725]/10 py-7">

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

                    <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.25em] text-[#9a948c]">
                      Tags
                    </p>

                    <div className="flex max-h-32 flex-wrap gap-2 overflow-y-auto">

                      <FilterButton
                        active={tag === "all"}
                        onClick={() =>
                          setTag("all")
                        }
                      >
                        All
                      </FilterButton>

                      {allTags.map((item) => (

                        <FilterButton
                          key={item}
                          active={
                            normalize(tag) ===
                            normalize(item)
                          }
                          onClick={() =>
                            setTag(item)
                          }
                        >
                          {item}
                        </FilterButton>

                      ))}

                    </div>

                  </div>

                )}

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#292725]/10 pt-5">

                  <button
                    type="button"
                    onClick={() =>
                      setSavedOnly(
                        (value) => !value
                      )
                    }
                    className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] ${
                      savedOnly
                        ? "text-[#b86f7d]"
                        : "text-[#827c75]"
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

                    {savedCount > 0 &&
                      ` (${savedCount})`}

                  </button>

                  {hasActiveFilters && (

                    <button
                      type="button"
                      onClick={clearFilters}
                      className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#b86f7d]"
                    >
                      Clear filters
                    </button>

                  )}

                </div>

              </div>

            )}

          </div>

          {/* COLLECTION HEADER */}

          <div className="mt-14 flex items-end justify-between border-b border-[#292725]/10 pb-4">

            <div>

              <div className="flex items-center gap-2">

                <Sparkles
                  size={12}
                  className="text-[#d78f9b]"
                />

                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#b86f7d]">
                  The collection
                </p>

              </div>

              <p className="mt-2 font-serif-display text-3xl md:text-4xl">
                HANEULZ AUs
              </p>

            </div>

            <p className="text-right text-[8px] uppercase tracking-[0.18em] text-[#9a948c]">
              {loading
                ? "Searching..."
                : filteredAUs.length === 0
                ? "Nothing found"
                : `${firstShown}–${lastShown} / ${filteredAUs.length}`}
            </p>

          </div>

          {/* AU LIST */}

          <div className="relative mt-6 pb-12">

            {/* Vertical editorial line */}

            <div className="pointer-events-none absolute bottom-0 left-2 top-0 hidden w-px bg-[#292725]/[0.07] md:block" />

            {/* Reduced spacing between AUs */}

            <div className="space-y-3 md:pl-8">

              {/* Loading placeholders */}

              {loading &&
                [1, 2, 3, 4].map(
                  (item) => (
                    <div
                      key={item}
                      className="h-40 animate-pulse border border-[#292725]/10 bg-[#fffdf8] !rounded-none"
                    />
                  )
                )}

              {/* Empty state */}

              {!loading &&
                filteredAUs.length === 0 && (

                  <div className="border border-dashed border-[#292725]/15 bg-[#fffdf8] px-6 py-24 text-center !rounded-none">

                    <div className="mx-auto text-3xl text-[#d78f9b]">
                      ✦
                    </div>

                    <h2 className="mt-5 font-serif-display text-4xl">
                      Nothing here yet.
                    </h2>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#827c75]">
                      Try changing your search or filters
                      and see what else is hiding in the archive.
                    </p>

                    {hasActiveFilters && (

                      <button
                        type="button"
                        onClick={clearFilters}
                        className="mt-7 bg-[#292725] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white !rounded-none"
                      >
                        Clear filters
                      </button>

                    )}

                  </div>

                )}

              {/* AU CARDS */}

              {!loading &&
                visibleAUs.map(
                  (au, index) => (

                    <Reveal
                      key={au.id}
                      delay={
                        (index % 4) * 0.04
                      }
                    >

                      {/* Force all nested AUCard elements to square corners */}

                      <div className="relative [&_*]:!rounded-none">

                        {/* Archive number */}

                        <div className="absolute -left-8 top-5 hidden -translate-x-full font-serif-display text-sm text-[#aaa39b]">
                          {String(
                            startIndex +
                              index +
                              1
                          ).padStart(2, "0")}
                        </div>

                        <AUCard
                          au={au}
                          index={index}
                        />

                      </div>

                    </Reveal>

                  )
                )}

            </div>

          </div>

          {/* PAGINATION */}

          {!loading &&
            totalPages > 1 && (

              <div className="mb-20 border-t border-[#292725]/10 pt-8">

                <div className="flex flex-col items-center gap-4">

                  <div className="flex items-center gap-2">

                    {/* PREVIOUS */}

                    <button
                      type="button"
                      disabled={page === 1}
                      onClick={() =>
                        goToPage(page - 1)
                      }
                      className="grid h-9 w-9 place-items-center border border-[#292725]/10 bg-[#fffdf8] text-[#827c75] transition hover:bg-[#f1dfe3] disabled:opacity-25 !rounded-none"
                    >
                      <ChevronLeft size={14} />
                    </button>

                    {/* PAGE NUMBERS */}

                    {Array.from(
                      {
                        length: totalPages,
                      },
                      (_, index) =>
                        index + 1
                    )
                      .filter(
                        (number) => {
                          if (
                            totalPages <= 7
                          ) {
                            return true;
                          }

                          return (
                            number === 1 ||
                            number ===
                              totalPages ||
                            Math.abs(
                              number -
                                page
                            ) <= 1
                          );
                        }
                      )
                      .map(
                        (
                          number,
                          index,
                          array
                        ) => {

                          const previous =
                            array[
                              index - 1
                            ];

                          return (
                            <div
                              key={number}
                              className="flex items-center gap-2"
                            >

                              {previous &&
                                number -
                                  previous >
                                  1 && (
                                  <span className="text-xs text-[#aaa39b]">
                                    …
                                  </span>
                                )}

                              <button
                                type="button"
                                onClick={() =>
                                  goToPage(
                                    number
                                  )
                                }
                                className={`grid h-9 min-w-9 place-items-center px-3 text-[10px] font-bold transition !rounded-none ${
                                  page === number
                                    ? "bg-[#292725] text-white"
                                    : "border border-[#292725]/10 bg-[#fffdf8] text-[#827c75] hover:bg-[#f1dfe3]"
                                }`}
                              >
                                {number}
                              </button>

                            </div>
                          );
                        }
                      )}

                    {/* NEXT */}

                    <button
                      type="button"
                      disabled={
                        page === totalPages
                      }
                      onClick={() =>
                        goToPage(page + 1)
                      }
                      className="grid h-9 w-9 place-items-center border border-[#292725]/10 bg-[#fffdf8] text-[#827c75] transition hover:bg-[#f1dfe3] disabled:opacity-25 !rounded-none"
                    >
                      <ChevronRight size={14} />
                    </button>

                  </div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#aaa39b]">
                    Page {page} of{" "}
                    {totalPages}
                  </p>

                </div>

              </div>

            )}

        </section>

      </main>

      <Footer />

    </div>
  );
}

// ============================================================
// FILTER COMPONENTS
// ============================================================

function FilterGroup({
  title,
  options,
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={className}>

      <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.25em] text-[#9a948c]">
        {title}
      </p>

      <div className="flex flex-wrap gap-2">

        {options.map((option) => (

          <FilterButton
            key={option.key}
            active={value === option.key}
            onClick={() =>
              onChange(option.key)
            }
          >
            {option.label}
          </FilterButton>

        ))}

      </div>

    </div>
  );
}

// ============================================================
// FILTER BUTTON
// ============================================================

function FilterButton({
  active,
  onClick,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] transition !rounded-none ${
        active
          ? "border-[#292725] bg-[#292725] text-white"
          : "border-[#292725]/10 bg-[#fffdf8] text-[#827c75] hover:border-[#d78f9b] hover:text-[#b86f7d]"
      }`}
    >
      {children}
    </button>
  );
}
