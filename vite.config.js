import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
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

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path"; // 追加

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         // プロジェクトのルートからの絶対パスとして指定
//         additionalData: `@use "${path.resolve(__dirname, "src/assets/scss/_settings.scss").replace(/\\/g, "/")}" as *;\n`,
//       },
//     },
//   },
// });
