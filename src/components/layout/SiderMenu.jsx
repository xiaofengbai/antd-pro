import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import { connect } from "react-redux";
import { findOpenKeys } from "utils/tool";
const { SubMenu } = Menu;

class SiderMenu extends PureComponent {
  state = {
    selectedKeys: [],
  };
  menuDataRender = (menuList) => {
    return menuList.map((item) => {
      const localItem = {
        ...item,
        children: item.children ? menuDataRender(item.children) : undefined,
      };
      return Authorized.check(item.authority, localItem, null);
    });
  };
  handClick = ({ item, key }) => {
    this.setState({
      selectedKeys: key,
    });
  };
  onOpenChange = (openKeys) => {
    const { dispatch, collapsed } = this.props;
    dispatch({ type: "global/changeOpenKeys", openKeys });
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    this.ininByPath(pathname);
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.location.pathname !== this.props.location.pathname) {
      this.ininByPath(nextprops.location.pathname, false);
    }
  }
  ininByPath(path, changeOpenKey = true) {
    const { routers, dispatch } = this.props;
    const { openKeys, selectedKeys } = findOpenKeys(routers, path);

    changeOpenKey && dispatch({ type: "global/changeOpenKeys", openKeys });
    this.setState({
      selectedKeys,
    });
  }
  generateMenus = (routers) => {
    const generateMenu = function (data) {
      return data.map((item) => {
        if (item.children) {
          return (
            <SubMenu
              key={item.name}
              title={
                <React.Fragment>
                  {item.icon && item.icon}
                  <span>{item.name}</span>
                </React.Fragment>
              }
            >
              {generateMenu(item.children)}
            </SubMenu>
          );
        }
        if (item.path === "*") {
          return null;
        }
        if (item?.hidden) {
          return null;
        }
        return (
          <Menu.Item key={item.name}>
            <Link to={item.path || "#"}>
              {item.icon && item.icon}
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        );
      });
    };
    return routers.reduce((pre, item) => {
      if (item.children) {
        pre.push(generateMenu(item.children));
      }
      return pre;
    }, []);
  };

  render() {
    let { routers, openKeys, collapsed } = this.props;
    const { selectedKeys } = this.state;
    const menuProps = collapsed
      ? {}
      : {
          openKeys,
        };
    return (
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        onOpenChange={this.onOpenChange}
        onClick={this.handClick}
        inlineIndent={20}
        {...menuProps}
        selectedKeys={selectedKeys}
      >
        {this.generateMenus(routers)}
      </Menu>
    );
  }
}

export default withRouter(
  connect(({ global }) => {
    return { ...global };
  })(SiderMenu)
);
