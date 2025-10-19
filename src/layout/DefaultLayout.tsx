import { type ReactNode, useMemo } from 'react'
import {
  Layout,
  Nav,
  Button,
  Breadcrumb,
  Skeleton,
  Avatar,
} from '@douyinfe/semi-ui'
import {
  IconBell,
  IconHelpCircle,
  IconBytedanceLogo,
  IconSidebar,
  IconIndentLeft,
  IconIndentRight,
} from '@douyinfe/semi-icons'
import { useInitApp } from '@/hooks'
import ISider from '@/layout/Sider/ISider.tsx'
import { useLayoutStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'

export default function BaseLayout() {
  useInitApp()
  const { menuCollapse, headerFix, setMenuCollapse } = useLayoutStore(
    useShallow((state) => ({
      headerFix: state.headerFix,
      menuCollapse: state.menuCollapse,
      setMenuCollapse: state.setMenuCollapse,
    })),
  )
  const { Header, Footer, Content } = Layout

  const headerKLS = useMemo(
    () =>
      clsx({
        'r-layout-header-fix': headerFix,
      }),
    [headerFix],
  )
  return (
    <Layout>
      <ISider />
      <Layout>
        <Header
          style={{ backgroundColor: 'var(--semi-color-bg-1)' }}
          className={headerKLS}
        >
          <Nav
            className="p-4"
            mode="horizontal"
            footer={
              <>
                <Button
                  theme="borderless"
                  icon={<IconBell size="large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Button
                  theme="borderless"
                  icon={<IconHelpCircle size="large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Avatar color="orange" size="small">
                  YJ
                </Avatar>
              </>
            }
          >
            {!menuCollapse ? (
              <Button
                type="tertiary"
                icon={
                  <IconIndentLeft style={{ fontSize: 16, cursor: 'pointer' }} />
                }
                onClick={() => setMenuCollapse(true)}
              ></Button>
            ) : (
              <Button
                type="tertiary"
                icon={
                  <IconIndentRight
                    style={{ fontSize: 16, cursor: 'pointer' }}
                  />
                }
                onClick={() => setMenuCollapse(false)}
              ></Button>
            )}
          </Nav>
        </Header>
        <Content
          style={{
            padding: '24px',
            paddingTop: '64px',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: '24px' }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  )
}
