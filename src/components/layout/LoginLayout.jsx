import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect, Route } from "react-router-dom";
import { findItemByPath } from "utils/tool";
const { Content } = Layout;

class LoginLayout extends Component {
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
    return (
      <Layout>
        <Content>{this.readerContent()}</Content>
      </Layout>
    );
  }
}
export default withRouter(
  connect(({ global }) => {
    return { ...global };
  })(LoginLayout)
);
