import React, { Component } from "react";
import Sky from "./Sky";
import _ from "lodash";
import persianJs from "persianjs";
import axios from "axios";
import { Button } from "reactstrap";
import {HOST} from "../src/config";

export class Seo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      keyword: "",
      currentPosition: 5,
      targetPosition: 1,
      features: [],
      loading: false
    };
    this.addNewKeyword = this.addNewKeyword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.selectFeatures = this.selectFeatures.bind(this);
    this.removeKeyword = this.removeKeyword.bind(this);
    this.nativeToggleModal = this.nativeToggleModal.bind(this);
  }

  async addNewKeyword(e) {
    const { keywords } = this.state;
    const query = e.target.value;
    if (e.key == "Enter" && query && !_.includes(keywords, query)) {
      this.setState({ loading: true });
      const { data } = await axios.get(
        `${HOST}/api/google/${encodeURI(query)}`
      );
      const count = data < 300000 ? 300000 : data * 2;
      this.setState({
        keywords: [{ query: query, count }, ...keywords],
        keyword: "",
        loading: false
      });
    }
  }

  removeKeyword(target) {
    const { keywords } = this.state;
    this.setState({ keywords: keywords.filter(item => item != target) });
  }
  getTotalPrice() {
    const { keywords, currentPosition, targetPosition, features } = this.state;
    let totalPrice = 0;
    totalPrice = keywords.reduce((total, current) => {
      return total + current.count / (current.count > 10000000 ? 10 : 1);
    }, 0);
    const newPercents = {
      1: [0.5, 0],
      2: [0.8, 0.6],
      3: [1, 0.7],
      4: [1.2, 0.9],
      5: [1.5, 1]
    };
    totalPrice = totalPrice * newPercents[currentPosition][targetPosition];
    if (_.includes(features, 1)) totalPrice += 400000;
    if (_.includes(features, 2)) totalPrice += 2000000;
    totalPrice = totalPrice ? totalPrice : 0;
    return [
      persianJs(Math.floor(totalPrice).toLocaleString())
        .englishNumber()
        .toString(),
      totalPrice
    ];
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  selectFeatures(feature) {
    const { features } = this.state;
    if (_.includes(features, feature)) {
      return this.setState({
        features: features.filter(item => {
          return item !== feature;
        })
      });
    }
    return this.setState({ features: [...features, feature] });
  }

  nativeToggleModal() {
    const { toggleModal: parentToggleModal } = this.props;
    parentToggleModal({
      seo: { ...this.state, price: this.getTotalPrice()[1] }
    });
  }

  render() {
    const {
      keywords,
      keyword,
      currentPosition,
      targetPosition,
      features,
      loading
    } = this.state;
    const totalPrice = this.getTotalPrice();
    return (
      <div className="seo">
        <Sky title="سئو و تولید محتوا" />
        <div className="seo-container d-flex flex-column w-100 mt-5 rtl text-right">
          <div className="d-flex">
            <div className="w-50 mx-2">
              <label htmlFor="keyword">
                کلمه کلیدی مورد نظر خود را وارد کنید و enter بزنید
              </label>
              <div className="d-flex flex-column align-items-center">
                <input
                  type="text"
                  className="form-control"
                  id="keyword"
                  name="keyword"
                  onKeyPress={this.addNewKeyword}
                  onChange={this.handleChange}
                  value={keyword}
                  autoComplete="false"
                />
                <span
                  className={`spinner-border spinner-border-sm my-1 ${
                    loading ? `active` : `deactive`
                  }`}
                  role="status"
                  aria-hidden="true"
                ></span>
              </div>
              <ul className="keywoards">
                {keywords.map((item, index) => {
                  return (
                    <li key={index} className="my-3">
                      <span className="p-1">
                        <i
                          className="far fa-times-circle ml-1 remove"
                          onClick={() => this.removeKeyword(item)}
                        ></i>
                        {item.query}
                        <span className="text-muted">
                          {" "}
                          <i className="fas fa-sort-down point" />{" "}
                          {persianJs(
                            (
                              item.count / (item.count > 10000000 ? 10 : 1)
                            ).toLocaleString()
                          )
                            .englishNumber()
                            .toString()}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-white w-50 mx-2 d-flex flex-column justify-content-between">
              <div>
                <label htmlFor="current-position">
                  سایتت الان صفحه چندمه ؟
                </label>
                <ul className="list-selector d-flex p-0" id="current-position">
                  <li
                    className={`mx-1 p-2 border rounded ${
                      currentPosition === 1
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.setState({ currentPosition: 1 })}
                  >
                    اول
                  </li>
                  <li
                    className={`mx-1 p-2 border rounded ${
                      currentPosition === 2
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.setState({ currentPosition: 2 })}
                  >
                    دوم
                  </li>
                  <li
                    className={`mx-1 p-2 border rounded ${
                      currentPosition === 3
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.setState({ currentPosition: 3 })}
                  >
                    سوم
                  </li>
                  <li
                    className={`mx-1 p-2 border rounded ${
                      currentPosition === 4
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.setState({ currentPosition: 4 })}
                  >
                    چهارم
                  </li>
                  <li
                    className={`mx-1 p-2 border rounded ${
                      currentPosition === 5
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.setState({ currentPosition: 5 })}
                  >
                    پنجم یا بیشتر
                  </li>
                </ul>

                <label htmlFor="target-position">
                  میخوای کجای صفحه اول باشی ؟
                </label>
                <ul
                  className="list-selector d-flex p-0 w-100"
                  id="target-position"
                >
                  <li
                    className={`mx-1 p-2 border rounded w-50 ${
                      targetPosition === 0
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.setState({ targetPosition: 0 })}
                  >
                    سه تای اول
                  </li>
                  <li
                    className={`mx-1 p-2 border rounded w-50 ${
                      targetPosition === 1
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.setState({ targetPosition: 1 })}
                  >
                    مهم نیست
                  </li>
                </ul>

                <label htmlFor="target-position">
                  چه امکانات دیگه ای لازم دارید ؟
                </label>
                <ul
                  className="list-selector d-flex p-0 w-100"
                  id="target-position"
                >
                  <li
                    className={`mx-1 p-2 border rounded w-50 ${
                      _.includes(features, 1)
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.selectFeatures(1)}
                  >
                    گوگل مپ
                  </li>
                  <li
                    className={`mx-1 p-2 border rounded w-50 ${
                      _.includes(features, 2)
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    onClick={() => this.selectFeatures(2)}
                  >
                    حال خوب کن سایت
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted">قیمت تخمینی</span>
                <span className="text-primary">
                  {totalPrice[1] == 0 ? (
                    <span>
                      <i className="fas fa-laugh-squint"></i>
                      <span>تا اینجاش که رایگانه</span>
                    </span>
                  ) : (
                    <div>
                      <span className="row-price ml-2">{totalPrice[0]}</span>
                      <span>تومان</span>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column discounts">
            <span className="text-success mr-1">
              <i className="fas fa-gift" />
              هدیه ها
            </span>
            <ul className="d-flex justify-content-between unstyled p-0  mx-3">
              <li>
                <span className="discount-title">با ۱۰ میلیون تومان خرید</span>
                <b className="bg-light p-1 rounded discount-title border mx-1 text-primary">
                  <i className="fas fa-check mx-1" />
                  ۴۰۰ لیر تبلیغ در گوگل
                </b>{" "}
                <span className="discount-title">از ما هدیه بگیرید</span>
              </li>
              <li className="discount-status">
                {this.getTotalPrice()[1] >= 10000000 ? (
                  <span className="text-success">
                    <i className="fas fa-grin-hearts ml-1"></i>
                    شما شامل این هدیه ها هستید
                  </span>
                ) : (
                  <span className="text-muted">
                    شما هنوز شامل این تخفیف نشدید
                  </span>
                )}
              </li>
            </ul>
            <ul className="d-flex justify-content-between unstyled p-0  mx-3">
              <li className="d-flex">
                <span className="discount-title">
                  با ۱۵ تومان خرید از ما موارد رو به رو را به صورت سالانه بگیرید
                  :
                </span>
                <ul className="d-flex p-0 items mx-1">
                  <li className="bg-light p-1 rounded border mx-1 text-primary">
                    <i className="fas fa-check mx-1" />
                    SSL
                  </li>
                  <li className="bg-light p-1 rounded border mx-1 text-primary">
                    <i className="fas fa-check mx-1" />
                    سرور
                  </li>
                  <li className="bg-light p-1 rounded border mx-1 text-primary">
                    <i className="fas fa-check mx-1" />
                    دامنه
                  </li>
                </ul>
              </li>
              <li className="discount-status">
                {this.getTotalPrice()[1] >= 15000000 ? (
                  <span className="text-success">
                    <i className="fas fa-grin-hearts ml-1"></i>
                    شما شامل این هدیه ها هستید
                  </span>
                ) : (
                  <span className="text-muted">
                    شما هنوز شامل این تخفیف نشدید
                  </span>
                )}
              </li>
            </ul>
            <ul className="d-flex justify-content-between unstyled p-0 mx-3">
              <li className="d-flex">
                <span className="discount-title">
                  با ۳۰ تومان خرید ٬ یک مورد را به انتخاب خود هدیه بگیرید :
                </span>
                <ul className="d-flex p-0 items mx-1">
                  <li className="bg-light p-1 rounded border mx-1 text-primary">
                    <i className="fas fa-check mx-1" />
                    طراحی وب سایت
                  </li>
                  <span> یا </span>
                  <li className="bg-light p-1 rounded border mx-1 text-primary">
                    <i className="fas fa-check mx-1" />
                    طراحی اپلیکیشن
                  </li>
                </ul>
              </li>
              <li className="discount-status">
                {this.getTotalPrice()[1] >= 30000000 ? (
                  <span className="text-success">
                    <i className="fas fa-grin-hearts ml-1"></i>
                    شما شامل این هدیه ها هستید
                  </span>
                ) : (
                  <span className="text-muted">
                    شما هنوز شامل این تخفیف نشدید
                  </span>
                )}
              </li>
            </ul>
          </div>
          <Button color="success" onClick={this.nativeToggleModal}>
            درخواست مشاوره رایگان
          </Button>
        </div>
      </div>
    );
  }
}
export default Seo;
