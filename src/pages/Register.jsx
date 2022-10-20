import { Button, Checkbox, Input } from "antd";
import Form from "antd/lib/form";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const style2 = {
  padding: "20px",
  width: "430px",
  border: "solid 2px #1890ff",
};
const sort = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
};

const StyledForm = styled(Form)`
  .ant-form-item .ant-form-item-label {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: left;
  }
  .ant-input {
    width: 380px;
  }
  .ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 380px;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
    display: inline-flex;
  }
  .ant-form-item-control-input-content {
    flex: auto;
    max-width: 380px;
  }
  .ant-col.ant-form-item-control.ant-col-xs-24.ant-col-xs-offset-0.ant-col-sm-16.ant-col-sm-offset-8 {
    margin: 0px;
  }
`;

const HIDDEN_CLASSNAME = "hidden";

const Register = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const Finish = (values) => {
    const data = {
      userId: values.nickname,
      password: values.password,
      email: values.email,
    };
    axios
      .post("/register", JSON.stringify(data))
      .then(function (response) {
        console.log("응답!");
      })
      .catch(function (error) {
        console.log("오류!");
        // console.log(JSON.stringify(data));
      });

    //fetch로 보내기
    // fetch("/register", {
    //   method: "post",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   // 응답이 돌아오면 실행
    //   // http 응답 코드에 따른 메세지 출력
    //   const msg = response.ok ? "댓글이 등록되었습니다." : "댓글 등록 실패..";
    //   alert(msg);

    //   // 현재 페이지 새로고침
    //   window.location.reload();
    // });

    navigate("/login");
  };

  return (
    <div>
      <div style={sort}>
        <StyledForm
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={Finish}
          scrollToFirstError
          style={style2}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="intro"
            label="Intro"
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            {/* 주소 수정하기 */}
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </StyledForm>
      </div>
    </div>
  );
};

export default Register;
