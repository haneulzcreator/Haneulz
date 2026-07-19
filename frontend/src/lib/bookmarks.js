import { useSyncExternalStore } from "react";

const KEY = "haneulz_bookmarks";
const listeners = new Set();

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

let cache = read();

function emit() {
  cache = read();
  listeners.forEach((l) => l());
}

function subscribe(cb) {
  listeners.add(cb);
  const onStorage = (e) => {
    if (e.key === KEY) emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function toggleBookmark(id) {
  const current = read();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  localStorage.setItem(KEY, JSON.stringify(next));
  emit();
  return next.includes(id);
}

export function useBookmarks() {
  const ids = useSyncExternalStore(subscribe, () => cache, () => cache);
  return {
    ids,
    isSaved: (id) => ids.includes(id),
    toggle: toggleBookmark,
    count: ids.length,
  };
}
