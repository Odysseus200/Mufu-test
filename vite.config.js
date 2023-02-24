import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons, presetWind } from "unocss";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetWind(), presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  optimizeDeps: {
    include: ["lodash-es"],
    exclude: ["lodash"],
  },
  splitChunks: {
    chunks: "all",
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: "~",
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
  minify: true,
  cache: true,
  lazy: true,
  treeShaking: true,
  scopeHoisting: true,
  compress: true,
  prefetch: true,
  lazyLoad: true,
  hotReload: true,
  splitCode: true,
  http2: {
    enable: true,
  },
});
