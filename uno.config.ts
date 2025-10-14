import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['./src/**/*.{html,ts,tsx}'],
  },
  presets: [presetWind3()],
})
