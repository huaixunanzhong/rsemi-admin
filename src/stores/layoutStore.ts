import { create } from 'zustand'
import Settings from '@/config/settings.ts'
import { persist } from 'zustand/middleware'

type SettingsLayout = typeof Settings.layout
interface LayoutStore {
  layout: SettingsLayout & {
    isMobile: boolean // 是否为手机
    isTablet: boolean // 是否为平板
    isDesktop: boolean // 是否为桌面
    isFullscreen: boolean // 是否切换到了全屏
    bodyHeight: number
  }
}
export const useLayoutStore = create<LayoutStore>()(
  persist((set, _get) => ({
    layout: {
      ...Settings.layout,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isFullscreen: false,
      bodyHeight: 0,
    },
  })),
)
