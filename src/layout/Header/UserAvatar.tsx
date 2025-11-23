import {
  IconExit,
  IconUserStroked,
  IconSettingStroked
} from "@douyinfe/semi-icons";
import { Avatar, Button, Dropdown, Typography } from "@douyinfe/semi-ui-19";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
function DropdownRender() {
  const navigate = useNavigate();

  const itemCLS = "rounded-[var(--semi-border-radius-medium)] mx-2 mt-1 mb-2";
  return (
    <>
      <Dropdown.Menu className="w-60">
        <Dropdown.Item className={itemCLS}>
          <Avatar color="orange" size="small">
            Lion
          </Avatar>
          <div className="ml-2 inline-block align-middle">
            <Title heading={6}>lion</Title>
            <Text type="tertiary" size="small">
              前端开发工程师
            </Text>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className={itemCLS} onClick={() => navigate("/profile")}>
          <IconUserStroked className="!text-[20px]" />
          <Text className="text-[0.9375rem]">My Profile</Text>
        </Dropdown.Item>
        <Dropdown.Item className={itemCLS}>
          <IconSettingStroked className="!text-[20px]" />
          <Text className="text-[0.9375rem]">Settings</Text>
        </Dropdown.Item>
        <Dropdown.Item className={itemCLS}>
          <Button
            icon={<IconExit />}
            block
            theme="solid"
            type="primary"
            iconPosition="right"
          >
            Logout
          </Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </>
  );
}
export default function UserAvatar() {
  return (
    <>
      <Dropdown
        trigger="click"
        keepDOM
        position="bottomRight"
        render={<DropdownRender />}
      >
        <span>
          <Avatar color="orange" size="small">
            Lion
          </Avatar>
        </span>
      </Dropdown>
    </>
  );
}
