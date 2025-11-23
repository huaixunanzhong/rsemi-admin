import { Card, Space, Typography } from "@douyinfe/semi-ui-19";

import UpDownRate from "@/components/UpDownRate.tsx";
import { formatMoney } from "@/utils/number.ts";

export interface DataCardProps {
  data: {
    title: React.ReactNode;
    icon: React.ReactNode;
    value: number;
    upDownRate: {
      value: number;
      status: "up" | "down";
    };
    desc: string;
  };
}
const { Title, Text } = Typography;

export default function DataCard({ data }: DataCardProps) {
  return (
    <Card
      title={data.title}
      headerLine={false}
      headerExtraContent={data.icon}
      headerStyle={{ padding: "16px 24px" }}
      bodyStyle={{ padding: "12px 24px" }}
      className="rounded-2xl"
    >
      <div>
        <Space>
          <Title heading={3}>
            {formatMoney({ amount: data.value, useGrouping: true })}
          </Title>
          <UpDownRate
            value={data.upDownRate.value}
            status={data.upDownRate.status}
            bgColor
          />
        </Space>
      </div>
      <Text>{data.desc}</Text>
    </Card>
  );
}
