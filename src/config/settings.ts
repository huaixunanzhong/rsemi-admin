const settings: Config.Settings = {
  /** 基础配置 */
  base: {
    // 项目的 ID
    appID: "app",
    // 是否使用动态菜单
    dynamicMenu: false
  },
  /** 布局配置 */
  layout: {
    // 侧边栏风格，可选值为 dark 或 light
    siderTheme: "dark",
    // 侧边菜单宽度，单位 px，不可动态修改，需与 setting.less 的 @menuSideWidth 保持一致
    menuSideWidth: 256,
    // 侧边菜单折起时的宽度，单位 px，不可动态修改，需与 setting.less 的 @menuSideCollapseWidth 保持一致
    menuSideCollapseWidth: 80,
    // 侧边菜单栏是否默认折起
    menuCollapse: false,
    // 是否固定侧边栏
    siderFix: true,
    // 是否固定顶栏
    headerFix: true,
    // 是否在下滑时隐藏顶栏，需开启 headerFix，如果开启了 tabsFix，Tabs 也会被隐藏
    headerHide: false,
    // 侧边菜单栏是否开启手风琴模式
    menuAccordion: true
  }
};

export default settings;
