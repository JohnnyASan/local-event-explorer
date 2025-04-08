import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        // details: resolve(__dirname, "src/event-details/index.html"),
        saved: resolve(__dirname, "src/saved-events/index.html"),
        error: resolve(__dirname, "src/error/index.html"),
      },
    },
  },
});
