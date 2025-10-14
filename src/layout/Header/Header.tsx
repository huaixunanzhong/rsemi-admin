import { Layout } from 'antd'
import { useMemo, useState } from 'react'
import { useLayoutStore } from '@/stores'

export default function Header() {
  const layout = useLayoutStore((state) => state.layout)

  const [headerVisible] = useState(false)
  const showHeader = useMemo(() => {
    let visible = true
    if (layout.headerFix && layout.headerHide && !headerVisible) visible = false
    return visible
  }, [layout, headerVisible])
  return (
    <Layout.Header style={{ display: showHeader ? 'block' : 'none' }}>
      Header
    </Layout.Header>
  )
}
