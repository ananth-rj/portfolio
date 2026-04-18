/** Netlify / Vite: `VITE_API_URL` is inlined at build time — set it before `vite build` and redeploy. */
function normalizeApiBase(value) {
  if (value == null) return "";
  const s = String(value).trim();
  if (!s) return "";
  return s.replace(/\/+$/, "");
}

const raw = import.meta.env.VITE_API_URL;
export const API_URL = normalizeApiBase(raw);

export const MISSING_VITE_API_URL_MESSAGE =
  "VITE_API_URL was not set when this site was built. In Netlify: Site configuration → Environment variables → set VITE_API_URL (include Production), then Deploys → Trigger deploy → Clear cache and deploy site. For local dev, create `.env` with VITE_API_URL=… and restart Vite.";

/**
 * Absolute API path. Throws with a clear message if the base URL was missing at build time.
 * @param {string} path — e.g. "/api/products"
 */
export function apiUrl(path) {
  if (!API_URL) {
    throw new Error(MISSING_VITE_API_URL_MESSAGE);
  }
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${API_URL}${p}`;
}

if (import.meta.env.DEV) {
  console.log("API_URL:", API_URL || "(not set — add VITE_API_URL to .env)");
}
