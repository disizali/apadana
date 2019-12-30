import React, { Component } from "react";
import Earch from "../components/Earth";
import Layout from "../components/Layout";
import Apadana from "../components/Apadana";

export default class index extends Component {
  render() {
    return (
      <Layout>
        <Earch />
        <div className="content">
          <Apadana />
        </div>
      </Layout>
    );
  }
}
