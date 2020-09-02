import React, { Component } from "react";
import "./App.scss";
import { Button } from "antd";

class App extends Component {
  static async getInitialProps(props) {
    return {
      pathname,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Button>1111</Button>
      </div>
    );
  }
}
export default App;
