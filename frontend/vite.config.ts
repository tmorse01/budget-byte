import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import griffel from "@griffel/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), command === "build" && griffel()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
}));
