import { create } from "zustand";
import Settings from "@/config/settings.ts";

type LayoutStore = LayoutStore.SettingsLayout & {
  isMobile: boolean; // 是否为手机
  isTablet: boolean; // 是否为平板
  isDesktop: boolean; // 是否为桌面
  isFullscreen: boolean; // 是否切换到了全屏
  bodyHeight: number;
  setMenuCollapse: (menuCollapse: boolean) => void;
};
export const useLayoutStore = create<LayoutStore>()(set => ({
  ...Settings.layout,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isFullscreen: false,
  bodyHeight: 0,
  setMenuCollapse: menuCollapse => set({ menuCollapse })
}));
