import React, { Component } from "react";

export default class Test extends Component {
  componentDidMount() {}
  render() {
    return <div>PropTypes.bool, {this.props.children}</div>;
  }
}
