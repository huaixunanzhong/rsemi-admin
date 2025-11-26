import { Card } from "@douyinfe/semi-ui-19";

type Props = {
  children?: React.ReactNode;
};

export default function RList({ children }: Props) {
  return (
    <>
      <Card bodyStyle={{ padding: "0" }}>
        <ul>{children}</ul>
      </Card>
    </>
  );
}
