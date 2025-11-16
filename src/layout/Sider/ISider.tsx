import { IconSemiLogo } from "@douyinfe/semi-icons";
import { Badge, Layout, Nav, Typography } from "@douyinfe/semi-ui";
import { useMemo } from "react";

import Settings from "@/config/settings.ts";
import { useMenuStore } from "@/stores";
import { filterMenu } from "@/utils/menu.ts";

interface NavHeaderProps {
  menuCollapse: boolean;
}
interface SubTitleProps {
  menu: MenuStore.MenuItem;
}

interface CollapsedNavProps {
  menuCollapse: boolean;
}

interface ISiderProps {
  menuCollapse: boolean;
}
const { Sider } = Layout;

function NavHeader({ menuCollapse }: NavHeaderProps) {
  const { Title } = Typography;

  return (
    <>
      <Nav.Header
        link="/"
        className="r-layout-menu-side-header justify-between"
      >
        <IconSemiLogo
          rotate={250}
          style={{ fontSize: 24, color: "var(--semi-color-primary)" }}
          color="var(--semi-color-primary)"
        />
        {!menuCollapse && (
          <Title ellipsis heading={4}>
            Shoppers
          </Title>
        )}
      </Nav.Header>
    </>
  );
}

function SubTitle({ menu }: SubTitleProps) {
  return (
    <>
      <Typography.Text>{menu.title}</Typography.Text>
      <Badge count="NEW" theme="light" />
    </>
  );
}

function NavMenu() {
  const sider = useMenuStore((state) => state.sider);

  const access = ["Supplier Principal"];
  const filterSider = filterMenu(sider, access, []);

  return (
    <>
      {filterSider.map((item) => {
        const children = item.children || [];
        return children.length ? (
          <Nav.Sub
            key={item.path}
            itemKey={item.path}
            icon={item.icon}
            text={<SubTitle menu={item} />}
          >
            {children.map((child) => (
              <Nav.Item
                key={child.path}
                itemKey={child.path}
                text={child.title}
              />
            ))}
          </Nav.Sub>
        ) : (
          <Nav.Item
            key={item.path}
            icon={item.icon}
            itemKey={item.path}
            text={item.title}
            link={item.path}
          />
        );
      })}
    </>
  );
}

function CollapsedNav({ menuCollapse }: CollapsedNavProps) {
  return (
    <>
      <Nav
        defaultIsCollapsed={false}
        isCollapsed={menuCollapse}
        defaultSelectedKeys={["Home"]}
        style={{ width: "100%", height: "100%" }}
      >
        <NavHeader menuCollapse={menuCollapse} />
        <NavMenu />
      </Nav>
    </>
  );
}

export default function ISider({ menuCollapse }: ISiderProps) {
  const menuSideWidth = useMemo(() => {
    return menuCollapse
      ? Settings.layout.menuSideCollapseWidth
      : Settings.layout.menuSideWidth;
  }, [menuCollapse]);

  const siderStyle = useMemo(
    () => ({
      backgroundColor: "var(--semi-color-bg-1)",
      width: `${menuSideWidth}px`,
      minWidth: `${menuSideWidth}px`,
      maxWidth: `${menuSideWidth}px`,
      flex: `0 0 ${menuSideWidth}px`
    }),
    [menuSideWidth]
  );

  return (
    <Sider style={siderStyle}>
      <CollapsedNav menuCollapse={menuCollapse} />
    </Sider>
  );
}
