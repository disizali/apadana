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
    this.state = { tab: 2, modal: false, information: {} };
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
          <title>برنامه نویسی و طراحی ویرا وب آپادانا</title>
          <meta
            name="description"
            content="تیم ویرا وب آپادانا با تیم جوان و خلاق ایده های شما را به واقعیت تبدیل خواهد کرد | خدمات ما شامل طراحی سایت ٬برنامه نویسی اختصاصی ٬ ساخت اپلیکیشن ٬ سئو و پشتیبانی شبکه های اجتماعی و تبلیغات در گوگل می باشد"
          />
          <meta
            name="keywords"
            content="bootstrap,node,node.js,react,vue,angular,front-end,back-end,seo,php,wordpress,ads,google ads,application ,mobile application ,mobile app,HTML,CSS,XML,JavaScript,طراحی,طراحی سایت,برنامه نویسی,سئو,شبکه اجتماعی,برنامه نویسی سایت,ساخت سایت,تبلیغات در گوگل,گوگل ادوردز,تیزر,قالب اختصاصیوقالب آماده,سایت وردپرسی"
          ></meta>
        </Head>
        <Contact
          modal={modal}
          toggleModal={this.toggleModal}
          information={information}
          className="w-100"
        />
        <div className="d-flex flex-column p-5">
          <Earth changeTab={this.changeTab} tab={this.state.tab} />
          <div className="content">{this.getContent()}</div>
        </div>
      </Layout>
    );
  }
}
