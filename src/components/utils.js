export const API_URL = import.meta.env.VITE_API_URL || "https://shopbackend-ye8f.onrender.com";

// Debug: Log API URL in development
if (import.meta.env.DEV) {
  console.log("API_URL:", API_URL);
  console.log("VITE_API_URL from env:", import.meta.env.VITE_API_URL);
}

// export const API_URL = "http://localhost:5000";
