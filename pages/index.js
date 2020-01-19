import React, { Component } from "react";
import Earth from "../components/Earth";
import Layout from "../components/Layout";
import Apadana from "../components/Apadana";
import Seo from "../components/Seo";
import Develop from "../components/Develop";
import Head from "next/head";
import Ads from "../components/Ads";
import Samples from "../components/Samples";
import Contact from "../components/Contact";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1, modal: false, information: {} };
    this.changeTab = this.changeTab.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(information) {
    this.setState({ modal: !this.state.modal, information });
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
        return <Seo toggleModal={this.toggleModal} />;
      case 3:
        return <Develop toggleModal={this.toggleModal} />;
      case 4:
        return <Ads toggleModal={this.toggleModal} />;
      case 5:
        return <Samples />;
    }
  }
  render() {
    const { modal, information } = this.state;
    return (
      <Layout>
        <Head>
          <title>ویرا وب آپادانا</title>
        </Head>
        <Contact
          modal={modal}
          toggleModal={this.toggleModal}
          information={information}
        />
        <Earth changeTab={this.changeTab} tab={this.state.tab} />
        <div className="content">{this.getContent()}</div>
      </Layout>
    );
  }
}
