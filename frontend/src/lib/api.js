import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("haneulz_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function formatApiError(detail) {
  if (detail == null) return "Something went wrong. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail))
    return detail
      .map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e)))
      .filter(Boolean)
      .join(" ");
  if (detail && typeof detail.msg === "string") return detail.msg;
  return String(detail);
}

export const IMAGES = {
  heroDuo:
    "https://static.prod-images.emergentagent.com/jobs/e04ec301-0979-4ef5-8c49-2073bcde12f6/images/ab92e1a8e9c953d7750906de4c2de631d1ba2aee7e3a83b2a07a4eb88c7043db.png",
  portrait:
    "https://static.prod-images.emergentagent.com/jobs/e04ec301-0979-4ef5-8c49-2073bcde12f6/images/2d406a95e877c3f708b10b2bd51d78f972b82437abdac2f1f1edc7b7124a94a5.png",
  jlPortrait:
    "https://static.prod-images.emergentagent.com/jobs/e04ec301-0979-4ef5-8c49-2073bcde12f6/images/3ff56ce646a4c895a185495631fd76274661b8448209ccbd8d14a635d9c32748.png",
  hanPortrait:
    "https://static.prod-images.emergentagent.com/jobs/e04ec301-0979-4ef5-8c49-2073bcde12f6/images/d6ecced95446519da8d40e624d2a37f9d2d6fb4eceed3ee908a28848b3e04824.png",
  cloudsPink:
    "https://images.unsplash.com/photo-1619922800069-098b291b8f17?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  cloudsSoft:
    "https://images.unsplash.com/photo-1560803262-95a9de00a057?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  auCover1:
    "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=1000",
  auCover2:
    "https://images.pexels.com/photos/1509485/pexels-photo-1509485.jpeg?auto=compress&cs=tinysrgb&w=1000",
  manifesto1:
    "https://images.pexels.com/photos/2612738/pexels-photo-2612738.jpeg?auto=compress&cs=tinysrgb&w=1000",
};

export const DEFAULT_COVERS = [IMAGES.auCover1, IMAGES.auCover2, IMAGES.portrait, IMAGES.cloudsPink];

export const REAL = {
  jl: "https://customer-assets-m6fa6gv7.emergentagent.net/job_haneulz-corner/artifacts/ajv8uahi_IMG_9135.webp",
  han: "https://customer-assets-m6fa6gv7.emergentagent.net/job_haneulz-corner/artifacts/f87g19iu_IMG_9137.webp",
  ahofGroup: "https://customer-assets-m6fa6gv7.emergentagent.net/job_haneulz-corner/artifacts/g5npnzc2_IMG_9136.jpeg",
};

export const SOURCES = {
  x: { label: "X", full: "AUs from X" },
  tiktok: { label: "TikTok", full: "AUs from TikTok" },
  ao3: { label: "AO3", full: "AUs from AO3" },
  other: { label: "Other", full: "Other AUs" },
};
export const SOURCE_ORDER = ["x", "tiktok", "ao3", "other"];
