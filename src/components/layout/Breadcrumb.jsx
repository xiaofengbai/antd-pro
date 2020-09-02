import React, { Component } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "../index.scss";

class Breadcrumb extends Component {
  handChange = () => {
    const { collapsed, dispatch } = this.props;
    dispatch({
      type: "global/changeLayoutCollapsed",
      collapsed: !collapsed,
    });
  };
  render() {
    const { collapsed } = this.props;
    return (
      <header>
        <div onClick={this.handChange} className={styles.bread}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div>{this.props.children}</div>
      </header>
    );
  }
}
export default withRouter(
  connect(({ global }) => {
    return { collapsed: global.collapsed };
  })(Breadcrumb)
);
