import { Outlet } from 'react-router-dom'
import { Layout } from '@douyinfe/semi-ui'

const { Content } = Layout

export default function IContent() {
  return (
    <Content className="p-24 pt-64 bg-[rgba(var(--semi-grey-0),1)]">
      <Outlet />
    </Content>
  )
}
