import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";
export default class Index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <Link to="/a">Hello</Link>
        <div style={{ background: "pink" }} className="wrap">
          <div>1</div>
          <div>222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</div>
        </div>
      </div>
    );
  }
}
