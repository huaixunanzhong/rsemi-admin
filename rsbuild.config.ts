import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import UnoCss from '@unocss/postcss'
import { pluginSass } from '@rsbuild/plugin-sass'

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [UnoCss()],
      },
    },
  },
})
