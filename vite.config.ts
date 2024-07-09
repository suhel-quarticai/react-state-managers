import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const getAlias = (find: string, replace: string) => ({
  find,
  replacement: resolve(__dirname, replace),
});

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || "",
  resolve: {
    alias: [
      getAlias("@/components", "./src/common/components"),
      getAlias("@/hooks", "./src/common/hooks"),
      getAlias("@/utils", "./src/common/utils"),
      getAlias("@/styles", "./src/common/styles"),
      getAlias("@/stores", "./src/common/stores"),
      getAlias("@/", "./src"),
    ],
  },

  plugins: [react()],
});
