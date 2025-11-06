import { IconLanguage } from "@douyinfe/semi-icons";
import { Dropdown, Form, Typography } from "@douyinfe/semi-ui";

import Dashboard from "@/assets/svg/dashboard.svg?react";
import Logo from "@/assets/svg/logo.svg?react";
import Settings from "@/config/settings.ts";
import "./index.scss";
import { noop } from "@/utils/function.ts";
import { PButton } from "@/components/semi-design-plus";

const { Text } = Typography;

function Left() {
  return (
    <div className="login-left">
      <Dashboard className="left-bg-svg" />
    </div>
  );
}

function Right() {
  const dropdownItemStyle = {
    borderRadius: "var(--semi-border-radius-medium)"
  };

  const login = async () => {
    await new Promise(resolve => {
      const timer = setTimeout(() => {
        resolve(true);
        timer && clearTimeout(timer);
      }, 1000);
    });
  };
  return (
    <div className="login-right">
      <div className="top-toolbar">
        <Dropdown
          render={
            <Dropdown.Menu>
              <Dropdown.Item style={dropdownItemStyle} onClick={noop}>
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={noop}>简体中文</Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <PButton
            theme="borderless"
            icon={<IconLanguage size="large" />}
            onClick={noop}
          />
        </Dropdown>
      </div>
      <div className="logo">
        <Logo />
        <Text>{Settings.base.appName}</Text>
      </div>
      <div className="login-wrap">
        <div className="form-container">
          <h3 className="form-title">欢迎回来</h3>
          <p className="form-subtitle">登录Rsemi Admin账户</p>
          <Form onValueChange={noop}>
            <Form.Select size="large" field="Role" label="角色">
              <Form.Select.Option value="admin">管理员</Form.Select.Option>
              <Form.Select.Option value="user">普通用户</Form.Select.Option>
              <Form.Select.Option value="guest">访客</Form.Select.Option>
            </Form.Select>
            <Form.Input size="large" field="UserName" label="用户名" />
            <Form.Input
              mode="password"
              size="large"
              field="Password"
              label="密码"
            />
            <div className="forget-password ">
              <Form.Checkbox>
                <Text link>记住我</Text>
              </Form.Checkbox>
              <Text link={{ href: "/account/register" }}>忘记密码</Text>
            </div>
            <div className="login-btn-wrap">
              <PButton
                block
                theme="solid"
                type="primary"
                onlyLoading={true}
                onClick={login}
              >
                登录
              </PButton>
            </div>
            <div className="form-footer">
              <p>
                <Text>还没有账号？</Text>
                <Text link={{ href: "/account/register" }}>注册</Text>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="login">
      <Left />
      <Right />
    </div>
  );
}
