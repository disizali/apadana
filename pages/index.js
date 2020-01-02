import React, { Component } from "react";
import Earth from "../components/Earth";
import Layout from "../components/Layout";
import Apadana from "../components/Apadana";
import Seo from "../components/Seo";
import Develop from "../components/Develop";
import Head from "next/head";
import Ads from "../components/Ads";
import Samples from "../components/Samples";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 4 };
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab(tab) {
    this.setState({ tab });
  }
  getContent() {
    const { tab } = this.state;
    switch (tab) {
      case 1:
        return <Apadana />;
      case 2:
        return <Seo />;
      case 3:
        return <Develop />;
      case 4:
        return <Ads />;
      case 5:
        return <Samples />;
    }
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>ویرا وب آپادانا</title>
        </Head>
        <Earth changeTab={this.changeTab} tab={this.state.tab} />
        <div className="content">{this.getContent()}</div>
      </Layout>
    );
  }
}
