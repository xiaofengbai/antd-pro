import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

function mapRouteMethod(routers) {
  return routers.map(({ path, children, component, redirect }, index) => {
    if (children) {
      return (
        <Route
          key={index}
          path={path}
          render={(props) => {
            const Component = component;
            return <Component {...props}>{mapRouteMethod(children)}</Component>;
          }}
        />
      );
    }
    return <Route key={index} path={path} component={component} />;
  });
}

function RouterConfig(props) {
  const { routers } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "global/changeRoutersByPath",
      pathname: location.pathname,
    });
  }, []);
  return (
    <BrowserRouter>
      <Switch>{mapRouteMethod(routers)}</Switch>
    </BrowserRouter>
  );
}

export default connect(({ global }) => {
  return { topMenuMaps: global.topMenuMaps, routers: global.routers };
})(RouterConfig);
