import { IconLanguage } from "@douyinfe/semi-icons";
import { Dropdown, Form, Typography, Notification } from "@douyinfe/semi-ui-19";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, getProfile } from "@/api/account.ts";
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

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "test@example.com",
    username: "Tom",
    password: "123456"
  });

  const onChange = (values: any) => {
    setFormData({ ...formData, ...values });
  };

  const singIn = async () => {
    try {
      const res = await login(formData);
      const { data } = res.data;
      const token = data.accessToken;
      const res2 = await getProfile(token);
      Notification.success({
        title: "登录成功",
        content: "欢迎回来，" + "Chen",
        duration: 3
      });
      navigate("/dashboard");
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
          <span>
            <PButton
              theme="borderless"
              icon={<IconLanguage size="large" />}
              onClick={noop}
            />
          </span>
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
            <Form.Input field="email" size="large" label="邮箱" />
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
                <Text link={{ href: "/register" }}>注册</Text>
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
