import { Layout } from '@douyinfe/semi-ui'
import { useMemo, useState } from 'react'
import { useLayoutStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'

export default function Header() {
  const { headerFix, headerHide } = useLayoutStore(
    useShallow((state) => ({
      headerFix: state.headerFix,
      headerHide: state.headerHide,
    })),
  )

  const [headerVisible] = useState(false)
  const showHeader = useMemo(() => {
    let visible = true
    if (headerFix && headerHide && !headerVisible) visible = false
    return visible
  }, [headerFix, headerHide, headerVisible])
  return (
    <Layout.Header style={{ display: showHeader ? 'block' : 'none' }}>
      Header
    </Layout.Header>
  )
}
