import { IconSmallTriangleDown, IconSmallTriangleTop } from "@douyinfe/semi-icons";
import { Tag } from "@douyinfe/semi-ui";
import { useMemo } from "react";
import CountUp from "@/components/CountUp.tsx";

interface Props {
  value: number;
  bgColor?: boolean;
  status?: "up" | "down";
}
export default function UpDownRate({ value, bgColor, status }: Props) {
  const isUp = useMemo(() => status === "up", [status]);
  return (
    <>
      <Tag
        prefixIcon={isUp ? <IconSmallTriangleTop /> : <IconSmallTriangleDown />}
        className="p-x-0.5"
        color={bgColor && isUp ? "green" : "red"}
      >
        <CountUp
          from={0}
          to={value}
          separator=","
          direction="up"
          duration={0.2}
          options={{
            style: "percent",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }}
        />
      </Tag>
    </>
  );
}
