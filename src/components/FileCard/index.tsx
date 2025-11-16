import "./index.scss";
import { Card, Icon, Progress, Space, Typography } from "@douyinfe/semi-ui";
import prettyBytes from "pretty-bytes";

import Delete from "@/assets/svg/delete.svg?react";
import Download from "@/assets/svg/download.svg?react";
import { PButton } from "@/components/semi-design-plus";
import { getFileIcon } from "@/utils/enums.ts";

const { Title } = Typography;

export default function FileCard() {
  console.log(import.meta.env.PUBLIC_REQUEST_TIMEOUT);

  return (
    <Card shadows="hover" className="file-card__container">
      <div className="file-card__icon">{getFileIcon("测试文件.pdf")}</div>
      <div className="file-card__content">
        <p className="file-card__title">
          <Title
            heading={5}
            ellipsis={{
              showTooltip: {
                opts: { content: "测试文件测试文件测试文件测试文件.pdf" }
              },
              suffix: ".pdf"
            }}
          >
            测试文件测试文件测试文件测试文件.pdf
          </Title>
        </p>
        <div className="file-card__meta">
          <div className="file-card__meta-left">
            <span className="file-card__size">
              {prettyBytes(1337, {
                space: false,
                locale: "zh"
              })}
            </span>
            <Progress percent={10} aria-label="disk usage" />
          </div>
          <div className="file-card__meta-right">
            <Space>
              <PButton theme="borderless" icon={<Icon svg={<Download />} />} />
              <PButton theme="borderless" icon={<Icon svg={<Delete />} />} />
            </Space>
          </div>
        </div>
      </div>
    </Card>
  );
}
