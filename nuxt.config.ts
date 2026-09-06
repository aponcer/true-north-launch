import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-08-27",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  /*nitro: {
    preset: "static",
  },*/
  runtimeConfig: {
    jsonbinBinId: process.env.JSONBIN_BIN_ID || '',
    jsonbinAccessKey: process.env.JSONBIN_ACCESS_KEY || '',
  },
});
