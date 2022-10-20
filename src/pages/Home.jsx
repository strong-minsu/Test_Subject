import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
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
  //   const [writing, setWriting] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("/api/writing")
  //       .then((response) => setWriting(response.data))
  //       .cathc((error) => console.log(error));
  //   }, []);

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
            padding: "70px 50px 9px",
          }}
        >
          <h3>게시판</h3>
          <div
            className="site-layout-content"
            style={{
              height: "540px",
            }}
          >
            게시판
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Study Be Happy ©2022 Created by CAPJJANG
        </Footer>
      </Layout>
    </>
  );
}
