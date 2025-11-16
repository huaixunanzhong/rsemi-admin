import { SemiRspackPlugin } from "@douyinfe/semi-rspack-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
import UnoCss from "@unocss/postcss";

export default defineConfig({
  tools: {
    rspack: {
      plugins: [
        new SemiRspackPlugin({
          theme: "@semi-bot/semi-theme-rsbuild",
          include: "~@semi-bot/semi-theme-rsbuild/scss/local.scss"
        })
      ]
    },
    postcss: {
      postcssOptions: {
        plugins: [UnoCss()]
      }
    }
  },
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginSvgr({
      svgrOptions: {
        exportType: "default", // ✅ 默认导出
        ref: true, // ✅ 支持 React.forwardRef
        jsxRuntime: "automatic",
        icon: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": "./src/"
    }
  }
});
