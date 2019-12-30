import React, { Component } from "react";
import "../styles/index.scss";

export default class Layout extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}
