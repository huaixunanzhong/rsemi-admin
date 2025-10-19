import { Menu, Badge } from 'antd'

const { Item } = Menu
export default function MenuItem({ menu, key }) {
  return (
    <div>
      <Item key={key}>
        nihapo
        <Badge count={11} showZero color="#faad14" />
      </Item>
    </div>
  )
}
