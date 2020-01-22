import React, { Component } from "react";
import Sky from "./Sky";

export default class Apadana extends Component {
  render() {
    return (
      <div className="apadana">
        <Sky title="ویرا وب آپادانا" />
        <div className="d-flex rtl mt-5 flex-column flex-md-row">
          <div className="text-right w-100">
            <h5 className="my-3">آنچه از ما باید بدانید</h5>
            <ul>
              <li className="my-3">
                <i className="fal fa-map-marker-alt ml-1 text-orange" />
                <span className="text-orange mx-1">آدرس : </span>
                <span className="text-muted mr-1">
                  مرزداران خیابان ابراهیمی برج الوند طبقه ۷ جنوبی واحد ۷۰۷
                </span>
              </li>
              <li className="my-3">
                <i className="fal fa-building ml-1 text-orange" />
                <span className="text-orange mx-1">شماره ثبت : </span>
                <span className="text-muted mr-1">531911</span>
              </li>
            </ul>
            <h5 className="my-3">راه های ارتباطی</h5>
            <ul>
              <li className="my-3">
                <i className="fal fa-user-astronaut ml-1 text-orange" />
                <span className="text-orange mx-1">تلفن پشتیبانی : </span>
                <span className="text-muted mr-1">۴۴۲۵۹۶۸۸-۰۲۱</span>
              </li>
              <li className="my-3">
                <i className="fal fa-phone ml-1 text-orange" />
                <span className="text-orange mx-1">تلفن مشاوره : </span>
                <span className="text-muted mr-1">۴۴۲۵۹۶۱۱-۰۲۱</span>
              </li>
              <li className="my-3">
                <i className="fab fa-instagram ml-1 text-orange" />
                <span className="text-orange mx-1">اینستاگرام ما : </span>
                <span className="text-muted mr-1">
                  <a href="http://instagram.com/virawebapadana">
                    @virawebapadana
                  </a>
                </span>
              </li>
            </ul>
            <h5 className="my-3">امور مالی</h5>
            <ul>
              <li className="my-3">
                <i className="fal fa-credit-card ml-1 text-orange" />
                <span className="text-orange mx-1">
                  پرداخت مستقیم با زرین پال :{" "}
                </span>
                <span className="text-muted mr-1 bg-warning px-3 py-2 rounded">
                  <a href="http://zarinp.al/apweb.ir" className="text-white">
                    پرداخت
                  </a>
                </span>
              </li>
            </ul>
            <h5 className="my-3">نماد ها</h5>
            <ul className="d-flex">
              <li className="rounded bg-white shadow mx-1 d-flex flex-column border">
                <img src="/images/enamad.png" alt="enamad" width="50" />
              </li>
              <li className="rounded bg-white shadow mx-1 d-flex flex-column border">
                <img src="/images/samandehi.png" alt="samandehi" width="50" />
              </li>
              <li className="rounded bg-white shadow mx-1 d-flex flex-column border">
                <img src="/images/zarinpal.png" alt="zarinpal" width="50" />
              </li>
              <li>
                <div id="iwmf-certificate"></div>
              </li>
            </ul>
          </div>
          <div className="w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.699251699539!2d51.34322471561307!3d35.73361433470401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfdcbf217f9b7%3A0xe3bc68f13b54059f!2z2YjbjNix2Kcg2YjYqCDYotm-2KfYr9in2YbYpw!5e0!3m2!1sen!2suk!4v1579678335188!5m2!1sen!2suk"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
