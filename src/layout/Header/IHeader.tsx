import { Avatar, Button, Layout, Nav } from '@douyinfe/semi-ui'
import {
  IconBell,
  IconHelpCircle,
  IconIndentLeft,
  IconIndentRight,
} from '@douyinfe/semi-icons'
import { useMemo } from 'react'
import clsx from 'clsx'
import { useLayoutStore } from '@/stores'

interface IHeaderProps {
  headerFix: boolean
  menuCollapse: boolean
}

interface NavLeftProps {
  menuCollapse: boolean
}

const { Header } = Layout

function NavLeft({ menuCollapse }: NavLeftProps) {
  const setMenuCollapse = useLayoutStore((state) => state.setMenuCollapse)

  const handleToggleMenu = () => {
    setMenuCollapse(!menuCollapse)
  }
  return !menuCollapse ? (
    <Button
      type="tertiary"
      icon={<IconIndentLeft className="text-4 cursor-pointer" />}
      onClick={handleToggleMenu}
    />
  ) : (
    <Button
      type="tertiary"
      icon={<IconIndentRight className="text-4 cursor-pointer" />}
      onClick={handleToggleMenu}
    />
  )
}

function NavRight() {
  return (
    <>
      <Button
        theme="borderless"
        icon={<IconBell size="large" />}
        className="semi-color-text-2 mr-3"
      />
      <Button
        theme="borderless"
        icon={<IconHelpCircle size="large" />}
        className="semi-color-text-2 mr-3"
      />
      <Avatar color="orange" size="small">
        YJ
      </Avatar>
    </>
  )
}

export default function IHeader({ headerFix, menuCollapse }: IHeaderProps) {
  const headerKLS = useMemo(
    () =>
      clsx({
        'semi-color-bg-1': true,
        'r-layout-header-fix': headerFix,
      }),
    [headerFix],
  )
  return (
    <Header className={headerKLS}>
      <Nav className="p-4" mode="horizontal" footer={<NavRight />}>
        <NavLeft menuCollapse={menuCollapse} />
      </Nav>
    </Header>
  )
}
