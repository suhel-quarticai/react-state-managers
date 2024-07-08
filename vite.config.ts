import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const getPath = (route: string) => path.resolve(__dirname, route);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/components": getPath("./src/common/components"),
      "@/hooks/*": getPath("./src/common/hooks"),
      "@/utils": getPath("./src/common/utils"),
      "@/styles/*": getPath("./src/common/styles"),
      "@/stores": getPath("./src/common/stores"),
      "@/": getPath("./src"),
    },
  },

  plugins: [react()],
});
