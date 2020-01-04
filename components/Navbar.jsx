import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="d-flex justify-content-between">
        <div className="d-flex">
          <img src="/images/logo_full.png" width="150" />
        </div>
        <div className="d-flex">
          <button className="btn btn-light">
            <i className="fas fa-user-astronaut mx-1" />
            <span className="mx-1">مشاوره رایگان</span>
          </button>
          <div className="d-flex numbers text-left align-items-center">
            <i className="fal fa-satellite-dish mx-1 justify-content-around" />
            <div className="d-flex flex-column">
              <strong className="mx-1">۰۲۱-۴۴۲۵۹۶۸۸</strong>
              <strong className="mx-1">۰۲۱-۴۴۲۵۹۶۱۱</strong>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
