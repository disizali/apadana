import React, { Component } from "react";
export default class Earth extends Component {
  componentDidMount() {
    require("../src/earth.js");
    const earthHeight = document.getElementById("earth").height;

    const dot1 = document.getElementsByClassName("dot-1")[0];
    const dot2 = document.getElementsByClassName("dot-2")[0];
    const dot3 = document.getElementsByClassName("dot-3")[0];
    const dot4 = document.getElementsByClassName("dot-4")[0];
    const dot5 = document.getElementsByClassName("dot-5")[0];
    dot1.style.right = `${earthHeight / 4.6}px`;
    dot2.style.right = `${earthHeight / 3.65}px`;
    dot3.style.right = `${earthHeight / 3.45}px`;
    dot4.style.right = `${earthHeight / 3.89}px`;
    dot5.style.right = `${earthHeight / 5.9}px`;

    window.addEventListener("resize", e => {
      const earthHeight = document.getElementById("earth").height;
      dot1.style.right = `${earthHeight / 4.6}px`;
      dot2.style.right = `${earthHeight / 3.65}px`;
      dot3.style.right = `${earthHeight / 3.45}px`;
      dot4.style.right = `${earthHeight / 3.89}px`;
      dot5.style.right = `${earthHeight / 5.9}px`;
    });
  }
  render() {
    const { changeTab, tab } = this.props;
    return (
      <div className="earth">
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
