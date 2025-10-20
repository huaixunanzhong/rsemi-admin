import { Card, Space, Tag, Typography } from '@douyinfe/semi-ui'
import UpDownRate from '@/components/UpDownRate.tsx'

interface DataCardProps {
  data: {
    title: string
    icon: React.ReactNode
    value: string | number
    upDownRate: {
      value: string
      status: 'up' | 'down'
    }
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
      headerStyle={{ padding: '16px 24px' }}
      bodyStyle={{ padding: '12px 24px' }}
      className="rounded-2xl"
    >
      <div>
        <Space>
          <Title heading={3}>{data.value}</Title>
          <UpDownRate
            value={data.upDownRate.value}
            status={data.upDownRate.status}
            bgColor={true}
          />
        </Space>
      </div>
      <Text>{data.desc}</Text>
    </Card>
  )
}
