import React from "react";
import dva, { connect } from "dva";
import { Provider } from "react-redux";
import model from "../../model/index";

const __DVA_STORE__ = "__DVA_STORE__";

function createDvaStore(initialState) {
  let app;
  if (initialState) {
    app = dva({
      initialState,
    });
  } else {
    app = dva({});
  }
  model.forEach((m) => {
    app.model(m);
  });
  app.router(() => {});
  app.start();
  const store = app._store;
  return store;
}

function getOrCreateStore(initialState) {
  if (!window[__DVA_STORE__]) {
    window[__DVA_STORE__] = createDvaStore(initialState);
  }
  return window[__DVA_STORE__];
}

export default function withDva(...args) {
  return function CreateNextPage(Component) {
    const ComponentWithDva = (props = {}) => {
      const { store, initialProps, initialState } = props;
      const ConnectedComponent = connect(...args)(Component);
      return React.createElement(
        Provider,
        {
          store:
            store && store.dispatch ? store : getOrCreateStore(initialState),
        },
        React.createElement(ConnectedComponent, initialProps)
      );
    };
    // ComponentWithDva.getInitialProps = async (props = {}) => {
    //   const store = getOrCreateStore(props.req);
    //   const initialProps = Component.getInitialProps
    //     ? await Component.getInitialProps({ ...props, store })
    //     : {};
    //   return {
    //     store,
    //     initialProps,
    //     initialState: store.getState(),
    //   };
    // };
    return ComponentWithDva;
  };
}
