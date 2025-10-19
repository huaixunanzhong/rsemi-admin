import { Nav } from '@douyinfe/semi-ui'
import MenuTitle from './MenuTitle.tsx'
import { memo } from 'react'

const { Sub } = Nav

function SubMenuTitle({ menu }) {
  return <span>menu.title</span>
}

const ISubMenu = memo(({ menu, index }: any) => {
  const uuid = crypto.randomUUID()
  return (
    <Sub title={<MenuTitle menu={menu} />}>
      <MenuTitle menu={menu} />
      {/*<Menu.SubMenu label="hhhh" key={menu.path + index}>*/}
      {/*  <span>{'hhh'}</span>*/}
      {/*</Menu.SubMenu>*/}
    </Sub>
  )
})

ISubMenu.displayName = 'ISubMenu'

export default ISubMenu
