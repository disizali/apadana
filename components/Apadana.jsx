import React, { Component } from "react";
import Sky from "./Sky";

export default class Apadana extends Component {
  render() {
    return (
      <div className="apadana">
        <Sky title="ویرا وب آپادانا" />
        <div className="d-flex rtl mt-5 flex-column flex-md-row">
          <div className="w-50 text-right">
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
          <div className="w-50">
            <div className="mapouter rounded">
              <div className="gmap_canvas rounded">
                <img
                  src="/images/map.png"
                  width="480"
                  height="460"
                  className="rounded"
                />
                {/* <iframe
                  width="100%"
                  height="500"
                  className="rounded"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=%D8%A8%D8%B1%D8%AC%20%D8%A7%D9%84%D9%88%D9%86%D8%AF&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                ></iframe> */}
              </div>
              <style jsx>{`
                .mapouter {
                  position: relative;
                  text-align: right;
                  height: 500px;
                  width: 600px;
                }
                .gmap_canvas {
                  overflow: hidden;
                  background: none !important;
                  height: 500px;
                  width: 600px;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
