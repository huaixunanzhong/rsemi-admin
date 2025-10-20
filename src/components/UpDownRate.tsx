import {
  IconSmallTriangleDown,
  IconSmallTriangleTop,
} from '@douyinfe/semi-icons'
import { Tag } from '@douyinfe/semi-ui'
import { useMemo } from 'react'

interface Props {
  value: string
  bgColor?: boolean
  status?: 'up' | 'down'
}
export default function UpDownRate({ value, bgColor, status }: Props) {
  const isUp = useMemo(() => status === 'up', [status])
  return (
    <Tag
      prefixIcon={isUp ? <IconSmallTriangleTop /> : <IconSmallTriangleDown />}
      className="p-x-0.5"
      color={bgColor && isUp ? 'green' : 'red'}
    >
      {value}
    </Tag>
  )
}
