import {
  IconBell,
  IconHelpCircle,
  IconIndentLeft,
  IconIndentRight,
  IconLanguage,
  IconMoon,
  IconSun
} from "@douyinfe/semi-icons";
import { Button, Dropdown, Layout, Nav } from "@douyinfe/semi-ui";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import UserAvatar from "@/layout/Header/UserAvatar.tsx";
import { useI18nStore, useLayoutStore } from "@/stores";

interface IHeaderProps {
  headerFix: boolean;
  menuCollapse: boolean;
}

interface NavLeftProps {
  menuCollapse: boolean;
}

const { Header } = Layout;

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}
function IconButton({ icon, onClick }: IconButtonProps) {
  return <Button theme="borderless" icon={icon} className="semi-color-text-2 mr-3" onClick={onClick} />;
}

function NavLeft({ menuCollapse }: NavLeftProps) {
  const setMenuCollapse = useLayoutStore(state => state.setMenuCollapse);

  const handleToggleMenu = () => {
    setMenuCollapse(!menuCollapse);
  };
  return !menuCollapse ? (
    <Button type="tertiary" icon={<IconIndentLeft className="text-4 cursor-pointer" />} onClick={handleToggleMenu} />
  ) : (
    <Button type="tertiary" icon={<IconIndentRight className="text-4 cursor-pointer" />} onClick={handleToggleMenu} />
  );
}

function NavRight() {
  const { locale, setLocale } = useI18nStore(
    useShallow(state => ({
      locale: state.locale,
      setLocale: state.setLocale
    }))
  );

  const [mode, setMode] = useState(true);

  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
      setMode(false);
    } else {
      body.setAttribute("theme-mode", "dark");
      setMode(true);
    }
  };
  return (
    <>
      <IconButton icon={<IconBell size="large" />} />
      <IconButton icon={<IconHelpCircle size="large" />} />
      <IconButton icon={mode ? <IconMoon size="large" /> : <IconSun size="large" />} onClick={switchMode} />
      <Dropdown
        clickToHide
        render={
          <Dropdown.Menu>
            <Dropdown.Item style={{ borderRadius: "var(--semi-border-radius-medium)" }} onClick={() => setLocale("en")}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setLocale("zh")}>简体中文</Dropdown.Item>
          </Dropdown.Menu>
        }
      >
        <Button
          theme="borderless"
          icon={<IconLanguage size="large" />}
          onClick={() => setLocale(locale)}
          className="semi-color-text-2 mr-3"
        />
      </Dropdown>
      <UserAvatar />
    </>
  );
}

export default function IHeader({ headerFix, menuCollapse }: IHeaderProps) {
  const headerKLS = useMemo(
    () =>
      clsx({
        "semi-color-bg-1": true,
        "r-layout-header-fix": headerFix
      }),
    [headerFix]
  );
  return (
    <Header className={headerKLS}>
      <Nav className="p-4" mode="horizontal" footer={<NavRight />}>
        <NavLeft menuCollapse={menuCollapse} />
      </Nav>
    </Header>
  );
}
