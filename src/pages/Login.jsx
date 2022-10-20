import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const style = {
  padding: "20px",
  width: "300px",
  border: "solid 2px #1890ff",
};
const sort = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
};
const USERNAME_KEY = "username";
const USERPASSWORD_KEY = "password";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // 예비로 저장
    localStorage.setItem(USERNAME_KEY, values.username);
    localStorage.setItem(USERPASSWORD_KEY, values.password);
  };

  return (
    <div style={sort}>
      <Form
        name="normal_login"
        className="login-form"
        style={style}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2>Wellcome Study be Happy</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <br />
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
