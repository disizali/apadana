import React, { Component } from "react";
const countOfStars = 200;
const countOfMeteors = 10;

export default class SkyBanner extends Component {
  render() {
    return (
      <div className="sky">
        {[...Array(countOfStars).keys()].map(item => {
          return <div className={`star star-${item}`} />;
        })}
        {[...Array(countOfMeteors).keys()].map(item => {
          return <div className={`meteor meteor-${item}`} />;
        })}
        <h1 className="text-white h-100 align-items-center d-flex justify-content-center">
          <span>{this.props.title}</span>
        </h1>
      </div>
    );
  }
}
