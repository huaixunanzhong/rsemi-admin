import { Layout, Typography, Menu, Tooltip } from 'antd'
import { useMemo, useState } from 'react'
import Setting from '@/config/settings.ts'
import { useLayoutStore } from '@/stores'
import clsx from 'clsx'
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-dark.png'
import logoSmall from '@/assets/images/logo-small.png'
import MenuItem from './MenuItem.tsx'
import MenuCollapse from './MenuCollapse.tsx'

const { Link } = Typography

interface LogoProps {
  menuCollapse: boolean
  siderTheme: 'light' | 'dark'
}

function Logo({ menuCollapse, siderTheme }: LogoProps) {
  let logoUrl = ''

  if (menuCollapse) {
    logoUrl = logoSmall
  } else if (siderTheme === 'light') {
    logoUrl = logo
  } else {
    logoUrl = logoDark
  }
  return <img src={logoUrl} alt="logo" />
}

export default function Sider() {
  const layout = useLayoutStore((state) => state.layout)
  const [menuCollapse] = useState(false)
  const menuSideWidth = useMemo(
    () =>
      menuCollapse
        ? Setting.layout.menuSideCollapseWidth
        : Setting.layout.menuSideWidth,
    [menuCollapse],
  )

  const siderClasses = useMemo(
    () =>
      clsx({
        'r-layout-sider': true,
        'r-layout-sider-fix': layout.siderFix,
        'r-layout-sider-dark': layout.siderTheme === 'dark',
      }),
    [layout.siderTheme, layout.siderFix],
  )

  const siderLogoKLS = useMemo(
    () =>
      clsx({
        'r-layout-sider-logo': true,
        'r-layout-sider-logo-dark': layout.siderTheme === 'dark',
      }),
    [layout.siderTheme],
  )

  const menuKLS = useMemo(
    () =>
      clsx({
        'r-layout-menu-side': true,
        'r-scrollbar-hide': true,
        'i-layout-menu-side-collapse': layout.menuCollapse,
      }),
    [layout.menuCollapse],
  )

  const [filterSider] = useState([])

  const listItems = filterSider.map((item, index) => {
    const hasChildren = item.children && item.children.length > 0
    if (layout.menuCollapse) {
      return hasChildren ? (
        <MenuItem key={index} menu={item} />
      ) : (
        <MenuSubmenu menu={item} />
      )
    } else {
      return hasChildren ? (
        <Tooltip title={$Title(item.title)} placement="right">
          <MenuItem
            menu={item}
            className="r-layout-menu-side-collapse-top-item"
            hide-title
          />
        </Tooltip>
      ) : (
        <MenuCollapse menu={item} top-level />
      )
    }
  })

  return (
    <Layout.Sider className={siderClasses} width={menuSideWidth}>
      <div>
        <div className={siderLogoKLS}>
          <Link>
            <Logo
              menuCollapse={layout.menuCollapse}
              siderTheme={layout.siderTheme}
            />
          </Link>
        </div>
        <Menu
          multiple={layout.menuAccordion}
          defaultSelectedKeys={activePath}
          defaultOpenKeys={openNames}
          theme={layout.siderTheme}
          className={menuKLS}
        >
          {listItems}
        </Menu>
      </div>
    </Layout.Sider>
  )
}
