import { cloneDeep } from "lodash-es";

import Settings from "@/config/settings.ts";
import { hasPermission } from "@/utils/permission.ts";

/** 根据 menu 配置的权限，过滤菜单 */
function filterMenu(
  menus: MenuStore.MenuItem[],
  access: string[],
  lastList: MenuStore.MenuItem[]
) {
  menus.forEach((menu) => {
    const menuAccess = menu.auth;
    if (!menuAccess || hasPermission(access, menuAccess)) {
      let newMenu = {} as MenuStore.MenuItem;
      const { children: _children, ...rest } = menu;
      newMenu = cloneDeep(rest);

      if (_children && _children.length) {
        newMenu.children = [];
      }
      lastList.push(newMenu as MenuStore.MenuItem);
      if (_children) {
        filterMenu(_children, access, newMenu.children!);
      }
    }
  });
  return lastList;
}

function transferMenu(menu: MenuStore.MenuItem, headerName: string) {
  if (menu.children && menu.children.length) {
    return menu.children.reduce((all, item) => {
      all.push({
        path: item.path,
        header: headerName
      });
      const foundChildren = transferMenu(item, headerName);
      return all.concat(foundChildren);
    }, []);
  } else {
    return [menu];
  }
}

/**
 * @description 根据当前路由，找到顶部菜单名称
 * @param {string} currentPath 当前路径
 * @param {Array} menuList 所有路径
 */
function getHeaderName(currentPath: string, menuList: MenuStore.MenuItem[]) {
  const allMenus = [] as MenuStore.MenuItem[];
  menuList.forEach((menu) => {
    const headerName = menu.header || "";
    const menus = transferMenu(menu, headerName);
    allMenus.push({
      path: menu.path,
      header: headerName
    });
    menus.forEach((item) => allMenus.push(item));
  });
  const currentMenu = allMenus.find((item) => item.path === currentPath);
  return currentMenu ? currentMenu.header : null;
}

/** 读取本地的动态顶栏菜单 */
function getNativeMenuHeader() {
  return JSON.parse(
    localStorage.getItem(`admin-plus-${Settings.base.appID}-menu-header`) ||
      "[]"
  );
}

/** 根据当前顶栏菜单 name，找到对应的二级菜单 */
function getMenuSider(menuList: MenuStore.MenuItem[], headerName = "") {
  if (headerName) {
    return menuList.filter((item) => item.header === headerName);
  } else {
    return menuList;
  }
}

function transferSubMenu(menu: MenuStore.MenuItem, openNames: string[]) {
  if (menu.children && menu.children.length) {
    const itemOpenNames = openNames.concat([menu.path]);
    return menu.children.reduce((all, item) => {
      all.push({
        path: item.path,
        openNames: itemOpenNames
      });
      const foundChildren = transferSubMenu(item, itemOpenNames);
      return all.concat(foundChildren);
    }, []);
  } else {
    return [menu].map((item) => ({
      path: item.path,
      openNames
    }));
  }
}

/** 根据当前路由，找到其所有父菜单 path，作为展开侧边栏 open-names 依据 */
function getSiderSubmenu(currentPath: string, menuList: MenuStore.MenuItem[]) {
  const allMenus = [] as MenuStore.MenuItem[];
  menuList.forEach((menu) => {
    const menus = transferSubMenu(menu, []);
    allMenus.push({
      path: menu.path,
      openNames: []
    });
    menus.forEach((item) => allMenus.push(item));
  });

  const currentMenu = allMenus.find((item) => item.path === currentPath);
  return currentMenu ? currentMenu.openNames : [];
}

export {
  filterMenu,
  getNativeMenuHeader,
  getHeaderName,
  getMenuSider,
  getSiderSubmenu
};
