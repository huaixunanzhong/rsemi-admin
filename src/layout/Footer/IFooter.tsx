import { IconBytedanceLogo } from '@douyinfe/semi-icons'
import { Layout } from '@douyinfe/semi-ui'

const { Footer } = Layout

export default function IFooter() {
  return (
    <Footer className="flex justify-between p-5 semi-color-text-2 bg-[rgba(var(--semi-grey-0),1)]">
      <span className="flex items-center">
        <IconBytedanceLogo size="large" className="mr-2" />
        <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
      </span>
      <span>
        <span className="mr-6">平台客服</span>
        <span>反馈建议</span>
      </span>
    </Footer>
  )
}
