import React, { Component } from "react";
import Sky from "./Sky";
export default class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      title: "ویرا وب آپادانا",
      description: "متن توضیحات منتخب شما",
      link: "https://apweb.ir"
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e) {
    let targetState = e.target.id.replace("ad-", "");
    this.setState({ [targetState]: e.target.value });
  }
  render() {
    const { title, link, description, position } = this.state;
    return (
      <div className="ads">
        <Sky title="تبلیغات در گوگل" />
        <div className="d-flex mt-5 rtl">
          <div className="google-results w-50 ml-5">
            {[...Array(10).keys()].map((item, index) => {
              if (index == position) {
                return (
                  <div className="result target" key={index}>
                    <h3 className="text-primary bg-white text-right mb-3">
                      {title}
                    </h3>
                    <p className="link bg-transparent text-success text-right my-3">
                      {link}
                    </p>
                    <p className="description text-muted bg-transparent text-right mt-3">
                      {description}
                    </p>
                  </div>
                );
              }
              return (
                <div className="result" key={index}>
                  <h3 />
                  <p className="link" />
                  <p className="description" />
                </div>
              );
            })}
          </div>
          <div className="google-target d-flex flex-column justify-content-between w-50 mr-5 rtl">
            <div>
              <label htmlFor="ad-title" className="w-100 text-right">
                سربرگ وب سایت
              </label>
              <input
                type="text"
                className="form-control"
                id="ad-title"
                onChange={this.changeHandler}
              />
              <label htmlFor="ad-link" className="w-100 text-right">
                لینک سایت
              </label>
              <input
                type="text"
                className="form-control"
                id="ad-link"
                onChange={this.changeHandler}
              />
              <label htmlFor="ad-description" className="w-100 text-right">
                توضیحات
              </label>
              <textarea
                className="form-control"
                id="ad-description"
                onChange={this.changeHandler}
              ></textarea>
              <label htmlFor="ad-position" className="w-100 text-right">
                موقعیت
              </label>
              <input
                className="form-control"
                id="ad-position"
                onChange={this.changeHandler}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted">قیمت تخمینی</span>
              <strong className="text-success display-4">۱۰۰٬۰۰۰</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
