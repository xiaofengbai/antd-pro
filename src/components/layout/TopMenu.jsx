import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Menu } from "antd";
import { findOpenKeys } from "utils/tool";

export const TopMenu = (props) => {
  const dispatch = useDispatch();
  const {
    topMenuMaps,
    selectedKeys,
    location,
    topMenuSelectedKey,
    routers,
  } = props;

  useEffect(() => {
    const curRouters = topMenuMaps.find((item) => {
      return location.pathname.indexOf(item.path) > -1;
    });
    dispatch({
      type: "global/changeTopMenuSelectedKey",
      topMenuSelectedKey: curRouters?.key,
    });
  }, []);

  const ininByPath = (path, changeOpenKey = true) => {
    const { openKeys } = findOpenKeys(routers, path);
    changeOpenKey && dispatch({ type: "global/changeOpenKeys", openKeys });
  };

  useEffect(() => {
    topMenuSelectedKey;
    const { pathname } = location;
    ininByPath(pathname);
  }, [topMenuSelectedKey]);

  const handClick = ({ item, key }) => {
    dispatch({
      type: "global/changeTopMenuSelectedKey",
      topMenuSelectedKey: key,
    });
  };

  return (
    <Menu
      theme="light"
      mode="horizontal"
      onClick={handClick}
      selectedKeys={selectedKeys}
    >
      {topMenuMaps.map((item, index) => {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.path || "#"}>
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

const mapStateToProps = ({ global }) => ({
  topMenuMaps: global.topMenuMaps,
  selectedKeys: [global.topMenuSelectedKey],
  topMenuSelectedKey: global.topMenuSelectedKey,
  routers: global.routers,
});

export default withRouter(connect(mapStateToProps)(TopMenu));
