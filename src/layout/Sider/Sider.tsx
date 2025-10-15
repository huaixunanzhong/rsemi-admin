import { Layout, Typography } from 'antd'
import { useMemo, useState } from 'react'
import Setting from '@/config/settings.ts'
import { useLayoutStore } from '@/stores'
import clsx from 'clsx'
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-dark.png'
import logoSmall from '@/assets/images/logo-small.png'

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
      </div>
    </Layout.Sider>
  )
}
