import React, { Component } from "react";
export default class Earth extends Component {
  componentDidMount() {
    require("../src/earch.js");
  }
  render() {
    const { changeTab, tab } = this.props;
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js" />
        <canvas id="earth"></canvas>
        <div className="dots">
          <div
            className={`dot-1 d-flex align-items-center ${tab == 1 &&
              "active"}`}
            onClick={() => changeTab(1)}
          >
            <i />
            <div className="line" />
            <div className="background" />
            <span>ویرا وب آپادانا</span>
          </div>
          <div
            className={`dot-2 d-flex align-items-center ${tab == 2 &&
              "active"}`}
            onClick={() => changeTab(2)}
          >
            <i />
            <div className="line" />
            <div className="background" />
            <span>سئو و تولید محتوا</span>
          </div>
          <div
            className={`dot-3 d-flex align-items-center ${tab == 3 &&
              "active"}`}
            onClick={() => changeTab(3)}
          >
            <i />
            <div className="line" />
            <div className="background" />
            <span>طراحی سایت و اپلیکیشن</span>
          </div>
          <div
            className={`dot-4 d-flex align-items-center ${tab == 4 &&
              "active"}`}
            onClick={() => changeTab(4)}
          >
            <i />
            <div className="line" />
            <div className="background" />
            <span>تبلیغات در گوگل</span>
          </div>
          <div
            className={`dot-5 d-flex align-items-center ${tab == 5 &&
              "active"}`}
            onClick={() => changeTab(5)}
          >
            <i />
            <div className="line" />
            <div className="background" />
            <span>نمونه کار ها</span>
          </div>
        </div>
      </div>
    );
  }
}
