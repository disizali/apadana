import React, { Component } from "react";
import _ from "lodash";
import persianJs from "persianjs";
import { Row, Col } from "reactstrap";

const personalArray = [
  { icon: "globe", text: "دامنه رایگان", active: true },
  { icon: "server", text: "سرور رایگان", active: true },
  { icon: "ad", text: "10 لیر ترکیه تبلیغ رایگان در گوگل", active: true },
  {
    icon: "lock-alt",
    text: "SSL",
    active: false,
    price: 400000
  },
  {
    icon: "palette",
    text: "قالب اختصاصی",
    active: false,
    price: 1500000
  },
  {
    icon: "shopping-bag",
    text: "فروشگاه",
    active: false,
    price: 500000
  },
  {
    icon: "users",
    text: "باشگاه مشتریان",
    active: false,
    price: 1000000
  },
  {
    icon: "chart-line",
    text: "سئو سالانه",
    active: false,
    price: 7000000
  }
];
const organisationArray = [
  { icon: "globe", text: "دامنه رایگان", active: true },
  { icon: "server", text: "سرور رایگان", active: true },
  { icon: "ad", text: "50 لیر ترکیه تبلیغ رایگان در گوگل", active: true },
  { icon: "lock-alt", text: "SSL رایگان", active: true },
  { icon: "palette", text: "قالب اختصاصی", active: false, price: 3000000 },
  { icon: "shopping-bag", text: "فروشگاه", active: false, price: 4000000 },
  { icon: "users", text: "باشگاه مشتریان", active: false, price: 4000000 },
  { icon: "chart-line", text: "سئو", active: false, price: 5000000 },
  { icon: "mobile", text: "اپلیکیشن موبایل", active: false, price: 10000000 }
];
const customizeArray = [
  { icon: "globe", text: "دامنه رایگان", active: true },
  { icon: "server", text: "سرور رایگان", active: true },
  { icon: "ad", text: "200 لیر ترکیه تبلیغ رایگان در گوگل", active: true },
  { icon: "lock-alt", text: "SSL", active: true },
  { icon: "palette", text: "قالب اختصاصی", active: true },
  { icon: "shopping-bag", text: "فروشگاه", active: true },
  { icon: "users", text: "باشگاه مشتریان", active: true },
  { icon: "chart-line", text: "سئو رایگان", active: true },
  { icon: "mobile", text: "اپلیکیشن موبایل", active: true },
  { icon: "project-diagram", text: "CRM", active: true },
  { icon: "clipboard-list", text: "سیستم رزرواسیون", active: true },
  {
    icon: "smile-wink",
    text: "و هر چیزی که شما نیاز داشته باشید ...",
    active: true
  }
];

export default class Develop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [],
      personalPrice: 2000000,
      organizationPrice: 4000000,
      organization: []
    };
    this.selectFeature = this.selectFeature.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }
  selectFeature(plan, data, price) {
    if (_.findIndex(this.state[plan], { data }) == -1) {
      return this.setState({ [plan]: [...this.state[plan], { data, price }] });
    }
    this.setState({
      [plan]: this.state[plan].filter(item => item.data != data)
    });
  }
  getTotalPrice(plan) {
    const totalSelectedPlan = this.state[plan].reduce((total, current) => {
      return total + current.price;
    }, 0);
    return (+this.state[`${plan}Price`] + +totalSelectedPlan).toLocaleString();
  }
  render2() {
    return (
      <Row className="plans2 bg-dark h-100 w-100">
        <Col className="plan">
          <img src="/images/plan-personal-2.png" alt="" />
          <div className="square w-100 h-25 bg-dark"></div>
        </Col>
        <Col className="plan">
          <img src="/images/plan-standard-2.png" alt="" />
          <div className="square w-100 h-25 bg-dark"></div>
        </Col>
        <Col className="plan">
          <img src="/images/plan-customize-2.png" alt="" />
          <div className="square w-100 h-25 bg-dark"></div>
        </Col>
      </Row>
    );
  }
  render() {
    return (
      <div className="develop h-100">
        <Row className="plans flex-column">
          <Col className="plan w-100 d-flex justify-content-start align-items-center p-3">
            <img src="/images/plan-personal-2.png" alt="" />
            <div className="circle"></div>
            <div className="square"></div>
            <div className="title">
              <h2>پلن شخصی</h2>
              <strong className="text-success">
                {persianJs(this.getTotalPrice("personal"))
                  .englishNumber()
                  .toString()}{" "}
                تومان
              </strong>
            </div>
            <div className="d-flex flex-column body">
              <p className="text-dark">
                <b>طراحی سایت برای افراد با هزینه کم و اقتصادی</b>
              </p>
              <ul className="features d-flex">
                {personalArray
                  .filter(item => item.active)
                  .map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`feature rounded d-flex align-items-center ml-2 active`}
                      >
                        <i className={`fal fa-${item.icon} mx-1`} />
                        <span className="mx-1">{item.text}</span>
                      </li>
                    );
                  })}
              </ul>
              <p className="text-dark mt-3 description">
                <span className="text-dark">امکانات سفارشی</span>
                <span className="text-muted mr-1">
                  ( در صورت نیاز کلیک کنید )
                </span>
              </p>
              <ul className="features d-flex">
                {personalArray
                  .filter(item => !item.active)
                  .map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`feature rounded d-flex align-items-center ml-2 deactive ${_.findIndex(
                          this.state.personal,
                          { data: item.text }
                        ) != -1 && "bg-success text-white selected"}`}
                        onClick={() =>
                          this.selectFeature("personal", item.text, item.price)
                        }
                        key={index}
                      >
                        <i className={`fal fa-${item.icon} mx-1`} />
                        <span className="mx-1">{item.text}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <button
              className="order btn d-flex"
              onClick={() => this.props.toggleModal({ develop: "personal" })}
            >
              <div className="d-flex">
                <i className="fal fa-rocket mx-1"></i>
                <div className="wind" />
              </div>
              <span>شروع کشوری شدن</span>
            </button>
            <button className="description btn d-flex">
              <span className="mx-1">توضیحات</span>
              <i className="fas fa-sort-down"></i>
            </button>
          </Col>
          <Col className="plan w-100 d-flex justify-content-start align-items-center p-3">
            <img src="/images/plan-standard-2.png" alt="" />
            <div className="circle"></div>
            <div className="square"></div>
            <div className="title">
              <h2>پلن شرکتی</h2>
              <strong className="text-success">
                {persianJs(this.getTotalPrice("organization"))
                  .englishNumber()
                  .toString()}{" "}
                تومان
              </strong>
            </div>
            <div className="d-flex flex-column body">
              <p className="text-dark">
                <b>طراحی سایت برای شرکت ها و سازمان های کوچک</b>
              </p>
              <ul className="features d-flex flex-column">
                {_.chunk(
                  organisationArray.filter(item => item.active),
                  3
                ).map((item, index) => {
                  return (
                    <ul className="d-flex pb-1" key={index}>
                      {item.map((feature, index) => {
                        return (
                          <li
                            key={index}
                            className={`feature rounded d-flex align-items-center ml-2 active`}
                          >
                            <i className={`fal fa-${feature.icon} mx-1`} />
                            <span className="mx-1">{feature.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </ul>
              <p className="text-dark mt-3 description">
                <span className="text-dark">امکانات سفارشی</span>
                <span className="text-muted mr-1">
                  ( در صورت نیاز کلیک کنید )
                </span>
              </p>
              <ul className="features d-flex">
                {organisationArray
                  .filter(item => !item.active)
                  .map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`feature rounded d-flex align-items-center ml-2 deactive ${_.findIndex(
                          this.state.organization,
                          { data: item.text }
                        ) != -1 && "bg-success text-white selected"}`}
                        onClick={() =>
                          this.selectFeature(
                            "organization",
                            item.text,
                            item.price
                          )
                        }
                      >
                        <i className={`fal fa-${item.icon} mx-1`} />
                        <span className="mx-1">{item.text}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <button
              className="order btn d-flex"
              onClick={() => this.props.toggleModal({ develop: "company" })}
            >
              <div className="d-flex">
                <i className="far fa-rocket mx-1"></i>
                <div className="wind" />
              </div>
              <span className="mx-1">شروع جهانی شدن</span>
            </button>
            <button className="description btn d-flex">
              <span className="mx-1">توضیحات</span>
              <i className="fas fa-sort-down"></i>
            </button>
          </Col>
          <Col className="plan w-100 d-flex justify-content-start align-items-center p-3">
            <img src="/images/plan-customize-2.png" alt="" />
            <div className="circle"></div>
            <div className="square"></div>
            <div className="title">
              <h2 className="gold">پلن اختصاصی</h2>
              <strong className="text-success">تماس بگیرید </strong>
            </div>
            <div className="d-flex flex-column body">
              <p className="text-dark">
                <b>طراحی سایت برای شرکت ها اشخاص با امکانات کاملا سفارشی</b>
              </p>
              <ul className="features d-flex flex-column">
                {_.chunk(
                  customizeArray.filter(item => item.active),
                  3
                ).map((item, index) => {
                  return (
                    <ul className="d-flex pb-1" key={index}>
                      {item.map((feature, index) => {
                        return (
                          <li
                            className={`feature rounded d-flex align-items-center ml-2 active`}
                            key={index}
                          >
                            <i className={`fal fa-${feature.icon} mx-1`} />
                            <span className="mx-1">{feature.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </ul>
              <ul className="features d-flex">
                {customizeArray
                  .filter(item => !item.active)
                  .map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`feature rounded d-flex align-items-center ml-2 deactive ${_.findIndex(
                          this.state.organization,
                          { data: item.text }
                        ) != -1 && "bg-success text-white selected"}`}
                        onClick={() =>
                          this.selectFeature(
                            "organization",
                            item.text,
                            item.price
                          )
                        }
                      >
                        <i className={`fal fa-${item.icon} mx-1`} />
                        <span className="mx-1">{item.text}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <button
              className="order btn d-flex"
              onClick={() => this.props.toggleModal({ develop: "customize" })}
            >
              <div className="d-flex">
                <i className="far fa-space-shuttle mx-1"></i>
                <div className="wind" />
              </div>
              <span className="mx-1">شروع کهکشانی شدن</span>
            </button>
            <button className="description btn d-flex">
              <span className="mx-1">توضیحات</span>
              <i className="fas fa-sort-down"></i>
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}
