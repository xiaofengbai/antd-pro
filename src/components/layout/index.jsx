import { Layout } from "antd";
import React, { Component } from "react";
import SiderMenu from "./SiderMenu";
import TopMenu from "./TopMenu";
import Breadcrumb from "./Breadcrumb";
import { connect } from "react-redux";
import { withRouter, Redirect, Route } from "react-router-dom";
import { findItemByPath } from "utils/tool";
const { Header, Content, Sider } = Layout;

class Index extends Component {
  readerContent = () => {
    const { pathname } = this.props.location;
    const { routers } = this.props;
    const item = findItemByPath(routers, pathname);
    if (item && item.redirect) {
      return (
        <Route
          render={() => (
            <Redirect
              to={{
                pathname: item.redirect,
              }}
            />
          )}
        ></Route>
      );
    } else {
      return <Route render={() => this.props.children} />;
    }
  };
  render() {
    const { collapsed } = this.props;
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <TopMenu />
        </Header>
        <Layout>
          <Sider
            collapsed={collapsed}
            width={200}
            collapsedWidth={65}
            className="site-layout-background"
          >
            <SiderMenu />
          </Sider>
          <Layout>
            <Breadcrumb></Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.readerContent()}
              {/* {this.props.children} */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(
  connect(({ global }) => {
    return { ...global };
  })(Index)
);
