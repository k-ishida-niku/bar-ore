import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // ここに書いた内容は、すべてのSCSSファイルの先頭に自動で挿入されます
        additionalData: `
          @use "/src/assets/scss/settings" as *;
        `,
      },
    },
  },
});
