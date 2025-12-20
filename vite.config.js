import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [react()],
  resolve: {
    alias: {
      // This sets up the same baseUrl as in your jsconfig.json
      src: path.resolve("./src"),
      components: path.resolve("./src/components"),
      pages: path.resolve("./src/pages"),
      store: path.resolve("./src/store"),
      hooks: path.resolve("./src/hooks"),
      utils: path.resolve("./src/utils"),
      api: path.resolve("./src/api"),
      contexts: path.resolve("./src/contexts"),
      sections: path.resolve("./src/sections"),
      assets: path.resolve("./src/assets"),
      theme: path.resolve("./src/theme"),
      layout: path.resolve("./src/layout"),
      routes: path.resolve("./src/routes"),
      config: path.resolve("./src/config"),
    },
  },
});
