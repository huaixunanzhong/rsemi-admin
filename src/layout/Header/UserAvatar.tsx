import { Avatar, Button, Dropdown, Typography } from '@douyinfe/semi-ui'
import {
  IconExit,
  IconUserStroked,
  IconSettingStroked,
} from '@douyinfe/semi-icons'
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography
function DropdownRender() {
  const navigate = useNavigate()
  return (
    <>
      <Dropdown.Menu className="w-60">
        <Dropdown.Item>
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
        <Dropdown.Item onClick={() => navigate('/profile')}>
          <IconUserStroked className="!text-[20px]" />
          <Text className="text-[0.9375rem]">My Profile</Text>
        </Dropdown.Item>
        <Dropdown.Item>
          <IconSettingStroked className="!text-[20px]" />
          <Text className="text-[0.9375rem]">Settings</Text>
        </Dropdown.Item>
        <Dropdown.Item>
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
  )
}
export default function UserAvatar() {
  return (
    <>
      <Dropdown
        trigger="click"
        keepDOM={true}
        position="bottomRight"
        render={<DropdownRender />}
      >
        <Avatar color="orange" size="small">
          Lion
        </Avatar>
      </Dropdown>
    </>
  )
}
