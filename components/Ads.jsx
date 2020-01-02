import React, { Component } from "react";
import Sky from "./Sky";
export default class Ads extends Component {
  render() {
    return (
      <div className="ads">
        <Sky title="تبلیغات در گوگل" />
        <div className="google-results">
          {[...Array(10).keys()].map(item => {
            return (
              <div className="result">
                <h3 />
                <p className="link" />
                <p className="description" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}