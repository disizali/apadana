import React, { Component } from "react";
import Sky from "./Sky";
const countOfStars = 400;
import { Row, Col } from "reactstrap";
const samples = [
  {
    title: "چلیپا کابل پویا",
    link: "chalipacable.ir",
    image: "chalipa",
    technologies: [
      { name: "Node.js", image: "nodejs" },
      { name: "React.js", image: "react" },
      { name: "Next.js", image: "nextjs" }
    ]
  },  {
    title: "سپاهان لوله",
    link: "sepahangroup.com",
    image: "sepahangroup",
    technologies: [
      { name: "Node.js", image: "nodejs" },
      { name: "React.js", image: "react" },
      { name: "Next.js", image: "nextjs" }
    ]
  },  {
    title: "چاپ رز",
    link: "chaperose.com",
    image: "chaperose",
    technologies: [
      { name: "Wordpress", image: "wordpress" },
      { name: "Elementor", image: "elementor" },
      { name: "Next.js", image: "nextjs" }
    ]
  }
];
export default class Samples extends Component {
  render() {
    return (
      <div className="samples">
        <Sky title="نمونه کارها" />
        {[...Array(countOfStars).keys()].map(item => {
          return <div className={`star sample-star-${item}`} key={item} />;
        })}
        <ul className="rtl mx-2 samples-list">
          {samples.map(item => {
            return (
              <li className="mb-4">
                <Row className="d-flex justify-content-between">
                  <Col
                    className="d-flex align-items-center justify-content-center flex-column text-right"
                    sm={3}
                  >
                    <div className="sample-title">
                      <div className="title-line-top">
                        <i className="parent" />
                        <i className="child-1" />
                        <i className="child-2" />
                        <i className="child-3" />
                        <i className="child-4" />
                        <i className="child-5" />
                      </div>
                      <div className="first-top-border" />
                      <div className="second-top-border" />
                      <div className="top-border-circle" />
                      <h5 className="text-white">{item.title}</h5>
                      <div className="first-bottom-border" />
                      <div className="second-bottom-border" />
                      <div className="bottom-border-circle" />
                      <div className="title-line-bottom">
                        <i className="parent" />
                        <i className="child-1" />
                        <i className="child-2" />
                        <i className="child-3" />
                        <i className="child-4" />
                        <i className="child-5" />
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="sample-screen">
                      <div className="frame d-flex flex-column justify-content-center align-items-center">
                        <span>{item.link}</span>
                      </div>
                      <img
                        src={`/images/samples/${item.image}.png`}
                        alt={item.title}
                      />
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="d-flex flex-column">
                      {item.technologies.map(technology => {
                        return (
                          <div className="d-flex align-items-center justify-content-around">
                            <img
                              src={`/images/technologies/${technology.image}.png`}
                              alt={technology.name}
                              className="technology-icon my-2"
                            />
                            <span className="text-light">
                              {technology.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
