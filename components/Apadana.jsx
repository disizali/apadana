import React, { Component } from "react";
export class Apadana extends Component {
  render() {
    return (
      <div className="apadana">
        <div className="plans d-flex flex-column">
          <div className="plan d-flex justify-content-start align-items-center">
            <img src="/images/plan-personal-2.png" alt="" />
            <div className="circle"></div>
            <div className="square"></div>
            <div className="title">
              <h2>پلن شخصی</h2>
              <strong>۲٬۰۰۰٬۰۰۰ تومان</strong>
            </div>
            <div className="body">
              در ویرا وب آپادانا پشتیبانی مشتری رایگان است. شما میتوانید از طریق
              فرم های تماس با ما و یا سامانه مشتریان اقدام به تماس نمایید .
            </div>
            <button className="btn px-4 d-flex">
              <div className="d-flex">
                <i className="fal fa-rocket mx-1"></i>
                <div className="wind" />
              </div>
              <span className="mx-1">شروع کشوری شدن</span>
            </button>
          </div>
          <div className="plan d-flex justify-content-start align-items-center">
            <img src="/images/plan-standard-2.png" alt="" />
            <div className="circle"></div>
            <div className="square"></div>
            <div className="title">
              <h2>پلن شرکتی</h2>
              <strong>۴٬۰۰۰٬۰۰۰ تومان</strong>
            </div>
            <div className="body">
              در ویرا وب آپادانا پشتیبانی مشتری رایگان است. شما میتوانید از طریق
              فرم های تماس با ما و یا سامانه مشتریان اقدام به تماس نمایید .
            </div>
            <button className="btn float-left mr-auto mt-auto px-4 d-flex">
            <div className="d-flex">
                <i className="far fa-rocket mx-1"></i>
                <div className="wind" />
              </div>
              <span className="mx-1">شروع جهانی شدن</span>
            </button>
          </div>
          <div className="plan d-flex justify-content-start align-items-center">
            <img src="/images/plan-customize-2.png" alt="" />
            <div className="circle"></div>
            <div className="square"></div>
            <div className="title">
              <h2 className="gold">پلن اختصاصی</h2>
              <strong>تماس بگیرید </strong>
            </div>
            <div className="body">
              در ویرا وب آپادانا پشتیبانی مشتری رایگان است. شما میتوانید از طریق
              فرم های تماس با ما و یا سامانه مشتریان اقدام به تماس نمایید .
            </div>
            <button className="btn float-left mr-auto mt-auto px-4 d-flex">

            <div className="d-flex">
                <i className="far fa-space-shuttle mx-1"></i>
                <div className="wind" />
              </div>
              <span className="mx-1">شروع کهکشانی شدن</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Apadana;
