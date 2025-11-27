import { IconSetting } from "@douyinfe/semi-icons";
import { Radio, RadioGroup, SideSheet, Typography } from "@douyinfe/semi-ui-19";
import { useMemo, useState } from "react";

import darkMode from "@/assets/images/settings/appearance/dark.png";
import lightMode from "@/assets/images/settings/appearance/light.png";
import systemMode from "@/assets/images/settings/appearance/system.png";
import IconButton from "@/components/IconButton";
import RList from "@/components/r-list";
import RListItem from "@/components/r-list-item";


const { Text } = Typography;

const COMPONENT_MAP = {
  1: <Appearance />,
  2: <div>布局设置</div>,
  3: <div>快捷键设置</div>,
  4: <div>通用设置</div>
} as const;

type StyleModeProps = {
  item: {
    src: string;
    alt: string;
    desc: string;
    active?: boolean;
  };
  onClick: (item: any) => void;
};
function StyleMode({ item, onClick }: StyleModeProps) {
  const activeStyle = useMemo(() => {
    console.log(item.active);
    return {
      width: "60px",
      height: "45px",
      border: item.active ? "4px solid var(--semi-color-primary)" : "",
      borderRadius: "8px",
      cursor: "pointer"
    };
  }, [item]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div style={activeStyle} onClick={() => onClick(item)}>
        <img
          className="w-full h-full rounded-[4px]"
          src={item.src}
          alt={item.alt}
        />
      </div>
      <p className="mt-1">
        <Text>{item.desc}</Text>
      </p>
    </div>
  );
}

function ColorCircle({
  color,
  desc
}: {
  color: string;
  desc: string;
  key?: string;
}) {
  const circleStyle = {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: color,
    cursor: "pointer"
  };
  return (
    <div>
      <div style={circleStyle}></div>
      <p className="mt-1">
        <Text size="small">{desc}</Text>
      </p>
    </div>
  );
}
function Appearance() {
  const [data, setData] = useState([
    {
      id: 1,
      src: lightMode,
      alt: "light mode",
      desc: "浅色",
      active: false
    },
    {
      id: 2,
      src: darkMode,
      alt: "dark mode",
      desc: "深色",
      active: false
    },
    {
      id: 3,
      src: systemMode,
      alt: "system mode",
      desc: "自动",
      active: false
    }
  ]);

  const data1 = [
    { color: "#1890ff", desc: "蓝色" },
    { color: "#f5222d", desc: "红色" },
    { color: "#52c41a", desc: "绿色" },
    { color: "#fa8c16", desc: "橙色" },
    { color: "#722ed1", desc: "紫色" },
    { color: "#13c2c2", desc: "青色" }
  ];

  const changeStyleMode = (selectedItem: any) => {
    console.log(selectedItem);
    setData((prevData) =>
      prevData.map((item) => {
        return item.desc === selectedItem.desc
          ? { ...item, active: true }
          : { ...item, active: false };
      })
    );
  };
  return (
    <>
      <RList>
        <RListItem
          title="外观"
          action={
            <>
              <div className="flex gap-4 items-center justify-end">
                {data.map((item) => {
                  return (
                    <StyleMode
                      key={item.id}
                      item={item}
                      onClick={changeStyleMode}
                    />
                  );
                })}
              </div>
            </>
          }
        ></RListItem>
        <RListItem
          title="主题色"
          action={
            <>
              <div className="flex gap-4 items-center justify-end">
                {data1.map((item) => {
                  return (
                    <ColorCircle
                      key={item.color}
                      color={item.color}
                      desc={item.desc}
                    />
                  );
                })}
              </div>
            </>
          }
        ></RListItem>
      </RList>
    </>
  );
}

export default function SettingsMenu() {
  const [visible, setVisible] = useState(false);
  const [radioValue, setRadioValue] = useState<1 | 2 | 3 | 4>(1);

  /** 打开设置菜单 */
  const openSettingsMenu = () => {
    setVisible(true);
  };

  /** 关闭设置菜单 */
  const handleCancel = () => {
    setVisible(false);
  };

  /** 切换单选 */
  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <>
      <IconButton
        icon={<IconSetting size="large" />}
        onClick={openSettingsMenu}
      />
      <SideSheet title="Settings" visible={visible} onCancel={handleCancel}>
        <RadioGroup
          type="button"
          defaultValue={1}
          direction="horizontal"
          aria-label="单选组合示例"
          buttonSize="large"
          name="demo-radio-group-pureCard"
          onChange={handleChange}
        >
          <Radio value={1} style={{ width: 100 }}>
            外观
          </Radio>
          <Radio value={2} style={{ width: 100 }}>
            布局
          </Radio>
          <Radio value={3} style={{ width: 100 }}>
            快捷键
          </Radio>
          <Radio value={4} style={{ width: 100 }}>
            通用
          </Radio>
        </RadioGroup>
        {COMPONENT_MAP[radioValue]}
      </SideSheet>
    </>
  );
}
