import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Test extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Link to={"/pa1/pb2"}>
          <span style={{ marginRight: "10px" }}></span>
          tttt
        </Link>
      </div>
    );
  }
}
