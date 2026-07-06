import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./", // githubpagesやレンタルサーバなどにデプロイする場合は必須
  plugins: [react()],
  resolve: {
    alias: {
      // src ディレクトリへのエイリアス（@）を設定
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // エイリアスを使ったシンプルな指定（末尾のセミコロンと改行を確実に含める）
        additionalData: `@use "@/assets/scss/_settings" as *;\n`,
      },
    },
  },
});
