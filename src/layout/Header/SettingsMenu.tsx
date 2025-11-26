import { IconSetting } from "@douyinfe/semi-icons";
import { Radio, RadioGroup, SideSheet } from "@douyinfe/semi-ui-19";
import { useState } from "react";

import IconButton from "@/components/IconButton";
import RList from "@/components/r-list";
import RListItem from "@/components/r-list-item";

const COMPONENT_MAP = {
  1: <Appearance />,
  2: <div>布局设置</div>,
  3: <div>快捷键设置</div>,
  4: <div>通用设置</div>
} as const;

function Appearance() {
  return (
    <>
      <RList>
        <RListItem></RListItem>
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
