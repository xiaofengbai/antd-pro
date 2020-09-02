import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory as createHistory } from "history";
import dva from "dva";
import model from "../model/index";
import RouterConfig from "./router";
import "./global.scss";

const app = dva({ history: createHistory() });

model.forEach((m) => {
  app.model(m);
});

app.router(() => {});
app.start();

const store = app._store;

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.getElementById("root")
);


// ReactDOM.render(<App />, document.getElementById("root"));
