import { create } from 'zustand'
import Settings from '@/config/settings.ts'
import {
  getHeaderName,
  getMenuSider,
  getNativeMenuHeader,
  getSiderSubmenu,
} from '@/utils/menu.ts'
import menuSliders from '@/menu/sider'

interface MenuState {
  menus: MenuStore.MenuItem[]
  menuSider: MenuStore.MenuItem[]
  header: MenuStore.MenuItem[]
  headerName: string
  sider: MenuStore.MenuItem[]
  activePath: string
  openNames: string[]
  setMenus: (menus: MenuStore.MenuItem[]) => void
  setMenuSider: (menuSider: MenuStore.MenuItem[]) => void
  setHeader: (menus: MenuStore.MenuItem[]) => void
  setHeaderName: (name: string) => void
  setSider: (sider: MenuStore.MenuItem[]) => void
  setActivePath: (activePath: string) => void
  setOpenNames: (openNames: string[]) => void
  setMenuList: (to: Location) => void
}

export const useMenuStore = create<MenuState>()((set, get) => ({
  menus: [],
  menuSider: [],
  header: [],
  headerName: '',
  sider: [],
  activePath: '',
  openNames: [],
  setMenus: (menus) => set({ menus }),
  setMenuSider: (menuSider) => set({ menuSider }),
  setHeader: (menus) => ({ header: menus }),
  setHeaderName: (name) => set({ headerName: name }),
  setSider: (sider) => set({ sider }),
  setActivePath: (activePath) => set({ activePath }),
  setOpenNames: (openNames) => set({ openNames }),
  setMenuList: (to) => {
    // 只动态菜单设置顶栏菜单
    if (Settings.base.dynamicMenu) {
      const menuHeaderList = getNativeMenuHeader()
      get().setHeader(menuHeaderList)
    }
    // 设置侧边栏菜单
    const menuSiderList = Settings.base.dynamicMenu
      ? getNativeMenuHeader()
      : [...menuSliders]
    // let path = to.matched[to.matched.length - 1].path
    let path = to.pathname
    let headerName = getHeaderName(path, menuSiderList)

    if (headerName === null) {
      path = to.pathname
      headerName = getHeaderName(path, menuSiderList)
    }

    if (headerName !== null) {
      get().setHeaderName(headerName)
      get().setMenuSider(menuSiderList)

      const filterMenuSider = getMenuSider(menuSiderList, headerName)
      get().setSider(filterMenuSider)
      get().setActivePath(to.pathname)

      const openNames = getSiderSubmenu(path, menuSiderList)
      get().setOpenNames(openNames)
    }
  },
}))
