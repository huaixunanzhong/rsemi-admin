import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['./src/**/*.{html,ts,tsx}'],
  },
  presets: [presetWind3()],
  theme: {
    colors: {
      'semi-color-text-2': 'var(--semi-color-text-2)',
      'semi-color-bg-1': 'var(--semi-color-bg-1)',
      'semi-grey-0': 'var(--semi-grey-0)',
    },
  },
})
