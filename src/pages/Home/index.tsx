import {
  IconClear,
  IconComment,
  IconExpand,
  IconEyeOpened,
  IconGridView,
  IconList,
  IconMore,
  IconSend,
  IconTickCircle
} from "@douyinfe/semi-icons";
import { Row, Col, Card, Typography, Carousel, Space, Table, Avatar, Tag } from "@douyinfe/semi-ui";
import { useIntl } from "react-intl";

import DataCard, { type DataCardProps } from "@/components/DataCard.tsx";

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

  const imgList = [
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png"
  ];

  const textList = [
    ["Semi 设计管理系统", "从 Semi Design，到 Any Design", "快速定制你的设计系统，并应用在设计稿和代码中"],
    ["Semi 物料市场", "面向业务场景的定制化组件，支持线上预览和调试", "内容由 Semi Design 用户共建"],
    ["Semi 设计/代码模板", "高效的 Design2Code 设计稿转代码", "海量 Figma 设计模板一键转为真实前端代码"]
  ];

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
  const columns = [
    {
      title: "标题",
      dataIndex: "name",
      render: (text, record) => {
        return (
          <div>
            <Avatar size="small" shape="square" src={record.nameIconSrc} style={{ marginRight: 12 }}></Avatar>
            {text}
          </div>
        );
      }
    },
    {
      title: "大小",
      dataIndex: "size"
    },
    {
      title: "交付状态",
      dataIndex: "status",
      render: text => {
        const tagConfig = {
          success: {
            color: "green",
            prefixIcon: <IconTickCircle />,
            text: "已交付"
          },
          pending: { color: "pink", prefixIcon: <IconClear />, text: "已延期" },
          wait: { color: "cyan", prefixIcon: <IconComment />, text: "待评审" }
        };
        const tagProps = tagConfig[text];
        return (
          <Tag shape="circle" {...tagProps} style={{ userSelect: "text" }}>
            {tagProps.text}
          </Tag>
        );
      }
    },
    {
      title: "所有者",
      dataIndex: "owner",
      render: (text, record) => {
        return (
          <div>
            <Avatar size="small" color={record.avatarBg} style={{ marginRight: 4 }}>
              {typeof text === "string" && text.slice(0, 1)}
            </Avatar>
            {text}
          </div>
        );
      }
    },
    {
      title: "更新日期",
      dataIndex: "updateTime"
    },
    {
      title: "",
      dataIndex: "operate",
      render: () => {
        return <IconMore />;
      }
    }
  ];
  const data = [
    {
      key: "1",
      name: "Semi Design 设计稿.fig",
      nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
      size: "2M",
      owner: "姜鹏志",
      status: "success",
      updateTime: "2020-02-02 05:13",
      avatarBg: "grey"
    },
    {
      key: "2",
      name: "Semi Design 分享演示文稿",
      nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "2M",
      owner: "郝宣",
      status: "pending",
      updateTime: "2020-01-17 05:31",
      avatarBg: "red"
    },
    {
      key: "3",
      name: "设计文档",
      nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "34KB",
      status: "wait",
      owner: "Zoey Edwards",
      updateTime: "2020-01-26 11:01",
      avatarBg: "light-blue"
    },
    {
      key: "4",
      name: "Semi Design 设计稿.fig",
      nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
      size: "2M",
      owner: "姜鹏志",
      status: "success",
      updateTime: "2020-02-02 05:13",
      avatarBg: "grey"
    },
    {
      key: "5",
      name: "Semi Design 分享演示文稿",
      nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "2M",
      owner: "郝宣",
      status: "pending",
      updateTime: "2020-01-17 05:31",
      avatarBg: "red"
    },
    {
      key: "6",
      name: "设计文档",
      nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "34KB",
      status: "wait",
      owner: "Zoey Edwards",
      updateTime: "2020-01-26 11:01",
      avatarBg: "light-blue"
    }
  ];

  return (
    <>
      <Card className={className}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </>
  );
}

export default function Hom() {
  const { formatMessage: $t } = useIntl();

  const data1List: DataCardProps["data"][] = [
    {
      title: <Title heading={4}>Page Views</Title>,
      icon: <IconEyeOpened style={{ color: "var(--semi-color-primary)" }} />,
      value: 25000,
      upDownRate: {
        value: 0.18,
        status: "up"
      },
      desc: "Up 15% from last month"
    },
    {
      title: <Title heading={4}>Visitors</Title>,
      icon: <IconGridView style={{ color: "var(--semi-color-primary)" }} />,
      value: 25000,
      upDownRate: {
        value: 0.18,
        status: "down"
      },
      desc: "Up 15% from last month"
    },
    {
      title: <Title heading={4}>Click</Title>,
      icon: <IconSend rotate={270} style={{ color: "var(--semi-color-primary)" }} />,
      value: 25000,
      upDownRate: {
        value: 0.18,
        status: "up"
      },
      desc: "Up 15% from last month"
    },
    {
      title: <Title heading={4}>Orders</Title>,
      icon: <IconList style={{ color: "var(--semi-color-primary)" }} />,
      value: 25000,
      upDownRate: {
        value: 0.18,
        status: "down"
      },
      desc: "Up 15% from last month"
    }
  ];

  const data2List = [
    {
      title: <Title heading={4}>Page Views</Title>,
      icon: <IconMore />,
      value: 25000,
      desc: " Semi Design 是由抖音前端团队与 UED团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的Web 应用。"
    },
    {
      title: <Title heading={4}>Visitors</Title>,
      icon: <IconMore />,
      value: 25000,
      desc: " Semi Design 是由抖音前端团队与 UED团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的Web 应用。"
    },
    {
      title: <Title heading={4}>Click</Title>,
      icon: <IconMore />,
      value: 25000,
      desc: " Semi Design 是由抖音前端团队与 UED团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的Web 应用。"
    },
    {
      title: <Title heading={4}>Orders</Title>,
      icon: <IconExpand />,
      value: 25000,
      desc: " Semi Design 是由抖音前端团队与 UED团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的Web 应用。"
    }
  ];
  return (
    <>
      <Row className="mt-4 mb-4">
        <Col xs={12}>
          <Title heading={2}>{$t({ id: "dashboard" })}</Title>
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
