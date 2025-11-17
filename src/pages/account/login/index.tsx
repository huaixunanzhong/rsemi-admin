import { IconLanguage } from "@douyinfe/semi-icons";
import { Dropdown, Form, Typography } from "@douyinfe/semi-ui";
import { useState } from "react";

import { login, getProfile } from "@/apis/account.ts";
import Dashboard from "@/assets/svg/dashboard.svg?react";
import Logo from "@/assets/svg/logo.svg?react";
import { PButton } from "@/components/semi-design-plus";
import Settings from "@/config/settings.ts";
import "./index.scss";
import { noop } from "@/utils/function.ts";

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

  const [formData, setFormData] = useState({
    username: "Test Admin",
    password: "admin123"
  });
  const onChange = (values: any) => {
    setFormData({ ...formData, ...values });
  };

  const singIn = async () => {
    try {
      const res = await login(formData);
      const { data } = res.data;
      const token = data.access_token;
      const res2 = await getProfile(token);
      console.log("getProfile", res2);
      console.log("Login successful:", res);
    } catch (error) {
      console.error("Login failed:", error);
    }
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
          <Form initValues={formData} onValueChange={onChange}>
            <Form.Select size="large" field="role" label="角色">
              <Form.Select.Option value="admin">管理员</Form.Select.Option>
              <Form.Select.Option value="user">普通用户</Form.Select.Option>
              <Form.Select.Option value="guest">访客</Form.Select.Option>
            </Form.Select>
            <Form.Input size="large" field="username" label="用户名" />
            <Form.Input
              mode="password"
              size="large"
              field="password"
              label="密码"
            />
            <div className="forget-password ">
              <Form.Checkbox field="rememberMe">
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
                onClick={singIn}
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
