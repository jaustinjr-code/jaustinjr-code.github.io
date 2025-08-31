import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@assets": path.resolve("./src/assets"),
      "@components": path.resolve("./src/components"),
      "@hooks": path.resolve("./src/hooks"),
      "@layouts": path.resolve("./src/layouts"),
      "@pages": path.resolve("./src/pages"),
      "@resources": path.resolve("./src/resources"),
      "@routes": path.resolve("./src/routes"),
    },
  },
});
