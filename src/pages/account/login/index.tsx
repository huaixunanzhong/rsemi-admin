import { Button, Dropdown, Form, Typography } from "@douyinfe/semi-ui";
import { IconLanguage } from "@douyinfe/semi-icons";

const { Text } = Typography;
export default function Login() {
  return (
    <div className="w-full h-dvh flex box-border">
      <div className="relative box-border w-[65vw] h-full p-[15px] overflow-hidden bg-blue">BandImg</div>

      <div className="relative flex-auto h-full">
        <div className="fixed top-[23px] right-[30px] z-100 flex items-center justify-end">
          <Dropdown
            render={
              <Dropdown.Menu>
                <Dropdown.Item style={{ borderRadius: "var(--semi-border-radius-medium)" }} onClick={() => {}}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => {}}>简体中文</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Button
              theme="borderless"
              icon={<IconLanguage size="large" />}
              onClick={() => {}}
              className="semi-color-text-2 mr-3"
            />
          </Dropdown>
        </div>
        <div className="hidden">
          Logo
          <br />
          systemName
        </div>
        <div className="absolute inset w-[440px] h-[610px] px-[5px] m-a overflow-hidden bg-cover rounded-[5px] opacity translate-x-[30px] animate-[slideInRight_0.6s_cubic-bezier(0.25, 0.46, 0.45, 0.94)_forwards]">
          <div className="box-border h-full w-full py-[40px]">
            <h3 className="ml-[-2px] text-[34px] font-600 color-[#071437]">title</h3>
            <p className="mt-[10px] text-[14px] color-[#99a1b7]">subTitle</p>
            <Form onValueChange={values => console.log(values)} className="w-full">
              <Form.Select size="large" field="Role" label="角色" className="w-full">
                <Form.Select.Option value="admin">管理员</Form.Select.Option>
                <Form.Select.Option value="user">普通用户</Form.Select.Option>
                <Form.Select.Option value="guest">访客</Form.Select.Option>
              </Form.Select>
              <Form.Input size="large" field="UserName" label="用户名" />
              <Form.Input size="large" field="Password" label="密码" className="w-full" />
              <div className="flex items-center justify-between mt-[10px] text-[14px] color-[#99a1b7]">
                <Form.Checkbox>
                  <Text link>remenberPwd</Text>
                </Form.Checkbox>
                <Text link={{ href: "/account/register" }}>忘记密码</Text>
              </div>
              <div className="mt-[30px]">
                <Button block className="h-[40px]" theme="solid" type="primary" loading={false}>
                  登录
                </Button>
              </div>
              <div className="mt-[20px] text-[14px] color-[#252f4a]">
                <p>
                  <Text>还没有账号？</Text>
                  <Text link={{ href: "/account/register" }}>注册</Text>
                </p>
              </div>
            </Form>
          </div>
        </div>
        LoginForm
      </div>
    </div>
  );
}
