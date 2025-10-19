import { Card, Space, Tag, Typography } from '@douyinfe/semi-ui'
import { IconSmallTriangleTop } from '@douyinfe/semi-icons'

interface DataCardProps {
  data: {
    title: string
    icon: React.ReactNode
    value: string | number
    desc: string
  }
}
const { Title, Text } = Typography

export default function DataCard({ data }: DataCardProps) {
  return (
    <Card
      title={data.title}
      headerLine={false}
      headerExtraContent={data.icon}
      headerStyle={{ padding: '8px 12px' }}
      bodyStyle={{ padding: '12px' }}
    >
      <div>
        <Space>
          <Title heading={3}>{data.value}</Title>
          <Tag
            prefixIcon={<IconSmallTriangleTop />}
            className="p-x-0.5"
            color="red"
          >
            18.00%
          </Tag>
        </Space>
      </div>
      <Text>{data.desc}</Text>
    </Card>
  )
}
