import { type ReactNode, useMemo } from 'react'
import clsx from 'clsx'

interface MenuTitleProps {
  menu: MenuStore.MenuItem
  hideTitle?: boolean
  selected?: boolean
  collapse?: boolean
}

interface MenuTitleState {
  menu: MenuStore.MenuItem
  withIcon?: boolean
  hideTitle?: boolean
}

interface TitleProps {
  menu: MenuStore.MenuItem
  withIcon?: boolean
  selected?: boolean
}

function TitleIcon({
  menu,
  withIcon = false,
  hideTitle = false,
}: MenuTitleState) {
  const titleIconElement = (): ReactNode => {
    if (menu.icon) {
      return menu.icon
    } else if (menu.custom) {
      return menu.custom
    } else if (menu.img) {
      return <img src={menu.img} alt="menu-img" />
    }
  }

  return <>{withIcon && <span>{titleIconElement()}</span>}</>
}

function Title({ menu, withIcon = false, selected = false }: TitleProps) {
  return (
    <span>
      {menu.title}
      {menu.subtitle && <em>{menu.subtitle}</em>}
    </span>
  )
}
export default function MenuTitle({
  menu,
  hideTitle = false,
  selected = false,
  collapse = false,
}: MenuTitleProps) {
  const withIcon = useMemo(() => {
    return !!(menu.icon || menu.custom || menu.svg || menu.img)
  }, [menu])

  return (
    <span>
      {<TitleIcon menu={menu} withIcon={withIcon} hideTitle={hideTitle} />}
      {!hideTitle && (
        <Title menu={menu} withIcon={withIcon} selected={selected} />
      )}
    </span>
  )
}
