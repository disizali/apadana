import React, { Component } from "react";
import "../styles/index.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <main>
        <Navbar />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}
