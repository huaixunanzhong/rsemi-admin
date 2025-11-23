import { Layout } from "@douyinfe/semi-ui-19";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function IContent() {
  return (
    <Content className="p-6 pt-16 bg-[rgba(var(--semi-grey-0),1)]">
      <Outlet />
    </Content>
  );
}
