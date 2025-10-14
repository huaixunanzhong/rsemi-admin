import type { ReactNode } from 'react'
import { Layout } from 'antd'
import Sider from '@/layout/Sider/Sider.tsx'
import Header from '@/layout/Header/Header.tsx'
import { Content } from 'antd/es/layout/layout'
import { useMemo } from 'react'
import { useLayoutStore } from '@/stores'

interface BaseLayoutProps {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const layout = useLayoutStore((state) => state.layout)

  const showSider = useMemo(() => !layout.isMobile, [layout.isMobile])
  return (
    <Layout className="r-layout">
      {showSider && <Sider />}
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}
