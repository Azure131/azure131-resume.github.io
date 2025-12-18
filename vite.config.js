import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { codeInspectorPlugin } from "code-inspector-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: "/azure131-resume.github.io/",
  plugins: [
    vue(),
    codeInspectorPlugin({
      bundler: "vite",
      showSwitch: true,
      hideConsole: true,
      editor: "code",
    }),
  ],
});
