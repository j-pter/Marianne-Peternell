import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({}) => {
  const config = {
    plugins: [react(), tailwindcss()],
    base: "",
    build: {
      outDir: "docs",
    },
  };

  // if (command !== "serve") {
  //   config.base = "/Marianne-Peternell/";
  // }

  return config;
});
