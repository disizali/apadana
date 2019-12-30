import React, { Component } from "react";

export class Apadana extends Component {
  render() {
    return (
      <div className="apadana">
        <h1>ویرا وب آپادانا</h1>
        <div className="plans d-flex flex-column">
          <div className="plan d-flex justify-content-start align-items-center">
            <img src="/images/plan-personal-2.png" alt="" />
            <div className="circle"></div>
            <div className="square"></div>
            <div className="title">
              <h2>پلن شخصی</h2>
              <strong>۲٬۰۰۰٬۰۰۰ تومان</strong>
            </div>
            <div className="mr-auto w-50 body">
              در ویرا وب آپادانا پشتیبانی مشتری رایگان است. شما میتوانید از طریق
              فرم های تماس با ما و یا سامانه مشتریان اقدام به تماس نمایید .
            </div>
            <button className="btn btn-warning float-left mr-auto mt-auto px-4">
              خرید
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

            <div className="mr-auto w-50 body">
              در ویرا وب آپادانا پشتیبانی مشتری رایگان است. شما میتوانید از طریق
              فرم های تماس با ما و یا سامانه مشتریان اقدام به تماس نمایید .
            </div>
            <button className="btn btn-warning float-left mr-auto mt-auto px-4">
              خرید
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

            <div className="mr-auto w-50 body">
              در ویرا وب آپادانا پشتیبانی مشتری رایگان است. شما میتوانید از طریق
              فرم های تماس با ما و یا سامانه مشتریان اقدام به تماس نمایید .
            </div>
            <button className="btn btn-warning float-left mr-auto mt-auto px-4">
              خرید
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Apadana;
