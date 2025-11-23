import { IconLanguage } from "@douyinfe/semi-icons";
import { Dropdown, Form, Typography, Toast } from "@douyinfe/semi-ui-19";
import { useState } from "react";

import { register } from "@/api/account.ts";
import Dashboard from "@/assets/svg/dashboard.svg?react";
import Logo from "@/assets/svg/logo.svg?react";
import { PButton } from "@/components/semi-design-plus";
import Settings from "@/config/settings.ts";
import "./index.scss";
import { noop } from "@/utils/function.ts";
import { useNavigate } from "react-router-dom";

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
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const onChange = (values: any) => {
    setFormData({ ...formData, ...values });
  };

  const registerUser = async () => {
    try {
      const userInfo = {
        email: formData.email,
        username: formData.username,
        password: formData.password
      };

      await register(userInfo);

      Toast.success({
        content: "注册成功!即将跳转到登录界面",
        duration: 3
      });
      navigate("/login");
    } catch (error) {
      console.error("Register failed:", error);
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
          <h3 className="form-title">创建账号</h3>
          <p className="form-subtitle">欢迎加入我们，请填写一下信息完成注册</p>
          <Form initValues={formData} onValueChange={onChange}>
            <Form.Input field="email" size="large" label="邮箱" />
            <Form.Input size="large" field="username" label="用户名" />
            <Form.Input
              mode="password"
              size="large"
              field="password"
              label="密码"
            />
            <Form.Input
              mode="password"
              size="large"
              field="confirmPassword"
              label="确认密码"
            />
            <div className="login-btn-wrap">
              <PButton
                block
                theme="solid"
                type="primary"
                onlyLoading={true}
                onClick={registerUser}
              >
                注册
              </PButton>
            </div>
            <div className="form-footer">
              <p>
                <Text>已有账号？</Text>
                <Text link={{ href: "/login" }}>登录</Text>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <div className="login">
      <Left />
      <Right />
    </div>
  );
}
