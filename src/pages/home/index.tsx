import {
  Row,
  Col,
  Card,
  Typography,
  Carousel,
  Space,
  Table
} from "@douyinfe/semi-ui-19";

import DataCard from "@/components/DataCard.tsx";
import { $t } from "@/lang/index.ts";
import {
  data1List,
  data2List,
  data,
  columns,
  imgList,
  textList
} from "@/mock/home";

const { Title, Paragraph } = Typography;

interface TableCardProps {
  className?: string;
}

function CarouselCard() {
  const titleStyle = {
    position: "absolute",
    top: "100px",
    left: "100px"
  };

  const colorStyle = {
    color: "#1C1F23"
  };

  const renderLogo = () => {
    return (
      <img
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg"
        alt="semi_logo"
        style={{ width: 87, height: 31 }}
      />
    );
  };

  return (
    <Card bodyStyle={{ padding: 0 }} className="rounded-2xl">
      <Carousel className="w-full h-100" theme="dark" autoPlay={false}>
        {imgList.map((src, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url('${src}')`
              }}
            >
              <Space vertical align="start" spacing="medium" style={titleStyle}>
                {renderLogo()}
                <Title heading={2} style={colorStyle}>
                  {textList[index][0]}
                </Title>
                <Space vertical align="start">
                  <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                  <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
                </Space>
              </Space>
            </div>
          );
        })}
      </Carousel>
    </Card>
  );
}

function TableCard({ className }: TableCardProps) {
  return (
    <>
      <Card className={className}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </>
  );
}

export default function Hom() {
  return (
    <>
      <Row className="mt-4 mb-4">
        <Col xs={12}>
          <Title heading={2}>{$t("dashboard")}</Title>
        </Col>
        <Col xs={12}></Col>
      </Row>
      <Row gutter={32} type="flex" justify="space-between">
        {data1List.map((data, idx) => (
          <Col key={idx} span={6}>
            <DataCard data={data} />
          </Col>
        ))}
      </Row>
      <Row gutter={32} className="mt-8">
        <Col span={16}>
          <CarouselCard />
          <TableCard className="mt-8 rounded-2xl" />
        </Col>
        <Col span={8}>
          <Space vertical align="start" spacing={32}>
            {data2List.map((data, idx) => (
              <Card
                key={idx}
                title={data.title}
                headerLine={false}
                headerExtraContent={data.icon}
                headerStyle={{ padding: "16px 24px" }}
                bodyStyle={{ padding: "12px 24px" }}
                className="rounded-2xl"
              >
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
            ))}
          </Space>
        </Col>
      </Row>
    </>
  );
}
