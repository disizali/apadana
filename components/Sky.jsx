import React, { Component } from "react";
import Particles from "react-particles-js";

export default class SkyBanner extends Component {
  render() {
    return (
      <div className="sky d-flex jsutifu-content-center align-items-center w-100">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 25
              },
              size: {
                value: 3
              },
              line_linked: {
                color: "#ddd"
              },
              color: { value: "#ddd" }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
          <Particles
          className="particles-second"
          params={{
            particles: {
              number: {
                value: 15
              },
              size: {
                value: 3
              },
              line_linked: {
                color: "#f1f1f1"
              },
              color: { value: "#FF6E1B" }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
        <h1 className="text-white h-100 align-items-center d-flex justify-content-center">
          <span>{this.props.title}</span>
        </h1>
      </div>
    );
  }
}
