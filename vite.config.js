import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 追加

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // プロジェクトのルートからの絶対パスとして指定
        additionalData: `@use "${path.resolve(__dirname, "src/assets/scss/_settings.scss").replace(/\\/g, "/")}" as *;\n`,
      },
    },
  },
});
