import { Layout } from 'antd'
import { useMemo, useState } from 'react'
import Setting from '@/config/settings.ts'
import { useLayoutStore } from '@/stores'
import clsx from 'clsx'

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

  return (
    <Layout.Sider className={siderClasses} width={menuSideWidth}>
      <span className="px-2 items-center justify-between color-blue">
        Test Sider
      </span>
    </Layout.Sider>
  )
}
