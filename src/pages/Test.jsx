import React, { Component } from "react";
import { baseUrl } from "utils/cdnConfig";
import file from "../../static/file/horse.ogg";
export default class Test extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <audio controls>
          <source src={file} type="audio/ogg" />
          您的浏览器不支持 audio 元素。
        </audio>
      </div>
    );
  }
}
