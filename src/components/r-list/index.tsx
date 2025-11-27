import { Card } from "@douyinfe/semi-ui-19";

import "./index.scss";

type Props = {
  children?: React.ReactNode;
};

export default function RList({ children }: Props) {
  return (
    <>
      <Card bodyStyle={{ padding: "0" }}>
        <ul className="r-list">{children}</ul>
      </Card>
    </>
  );
}
