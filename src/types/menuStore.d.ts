declare namespace MenuStore {
  // 侧边栏单项菜单
  interface MenuItem {
    // 路由路径
    path: string;
    // 打开的子菜单
    openNames?: string[];
    // 网页标题
    title?: string;
    // 顶部菜单名称 标识所属的顶部菜单
    header: string;
    // 菜单栏的icon
    icon?: string;
    // 自定义图标
    custom?: React.ReactNode;
    // svg 图标
    svg?: string;
    // 图片图标
    img?: string;
    // 菜单副标题
    subtitle: string;
    // 菜单权限 hidden 是该菜单直接就不展示在菜单栏和角色无关
    auth?: string[];
    // 子菜单
    children?: MenuItem[];
  }
}
