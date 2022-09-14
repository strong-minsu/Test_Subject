import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import React from "react";
const { Header, Content, Footer } = Layout;

const style = {
  textAlign: "right",
};
const margin10 = {
  margin: "6px",
};
export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />
          <div style={style}>
            <Button style={margin10} type="primary">
              <Link to="/login"> Signin </Link>
            </Button>
            <Button style={margin10} type="primary">
              <Link to="/register"> Signup </Link>
            </Button>
          </div>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-content"
            style={{
              height: "619px",
            }}
          >
            Content/ This is HOME
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
