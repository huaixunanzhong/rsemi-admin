import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

import UnoCss from "@unocss/postcss";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginSvgr({
      svgrOptions: {
        exportType: "default",  // ✅ 默认导出
        ref: true,              // ✅ 支持 React.forwardRef
        jsxRuntime: "automatic",
        icon: true,
      }
    })
  ],
  resolve: {
    alias: {
      "@": "./src/"
    }
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [UnoCss()]
      }
    }
  }
});
