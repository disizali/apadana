import React, { Component } from "react";
import Sky from "./Sky";
import persianJs from "persianjs";
import _ from "lodash";
import { Button, Row, Col } from "reactstrap";

const newPositions = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 6, 6: 7, 7: 8, 8: 9 };
export default class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      targetPosition: 0,
      title: "ویرا وب آپادانا",
      description: "توضیحات وب سایت",
      link: "https://apweb.ir",
      sliding: true,
      price: 100000,
      keywords: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.changePositionHandler = this.changePositionHandler.bind(this);
    this.addKeyword = this.addKeyword.bind(this);
    this.nativeToggleModal = this.nativeToggleModal.bind(this);
  }

  changeHandler(e) {
    let targetState = e.target.id.replace("ad-", "");
    this.setState({ [targetState]: e.target.value });
  }
  changePositionHandler(e) {
    const currentPosition = e.target.value;
    this.setState({
      targetPosition: newPositions[currentPosition],
      position: currentPosition,
      price:
        currentPosition < 5 ? currentPosition * 100000 : currentPosition * 10000
    });
  }
  addKeyword(e) {
    const { keywords } = this.state;
    if ((e.key == "Enter") & !_.includes(keywords, e.target.value)) {
      let newKeywords = keywords;
      newKeywords.push(e.target.value);
      e.target.value = "";
      this.setState({ keywords: newKeywords });
    }
  }
  removeKeyword(target) {
    let { keywords } = this.state;
    let newKeywords = keywords;
    _.pull(newKeywords, target);
    this.setState({
      keywords: newKeywords
    });
  }

  nativeToggleModal() {
    const { toggleModal: parentToggleModal } = this.props;
    parentToggleModal({ ads: this.state });
  }

  render() {
    const {
      title,
      link,
      description,
      position,
      targetPosition,
      price,
      keywords
    } = this.state;
    return (
      <div className="ads w-100">
        <Sky title="تبلیغات در گوگل" />
        <div className="d-flex mt-5 rtl">
           <div className="google-results w-50 ml-5">
            {[...Array(10).keys()].map((item, index) => {
              if (index == targetPosition) {
                return (
                  <div className="result target" key={index}>
                    <h3 className="text-primary bg-white text-right mb-4">
                      {title}
                    </h3>
                    <p className="link bg-transparent text-success text-right my-4">
                      {link}
                      <span className="rounded ml-1 px-1 border border-success text-success">
                        Ad
                      </span>
                    </p>
                    <p className="description text-muted bg-transparent text-right mt-4">
                      {description}
                    </p>
                  </div>
                );
              }
              return (
                <div className="result" key={index}>
                  <h3 />
                  <p className="link" />
                  <p className="description" />
                </div>
              );
            })}
          </div> 
          {/* <Row className="flex-column w-50">
            {[...Array(10).keys()].map((item, index) => {
              if (index == targetPosition) {
                return (
                  <Col className="result target" key={index} sm={12}>
                    <h3 className="text-primary bg-white text-right mb-4">
                      {title}
                    </h3>
                    <p className="link bg-transparent text-success text-right my-4">
                      {link}
                      <span className="rounded ml-1 px-1 border border-success text-success">
                        Ad
                      </span>
                    </p>
                    <p className="description text-muted bg-transparent text-right mt-4">
                      {description}
                    </p>
                  </Col>
                );
              }
              return (
                <Col className="result" key={index} sm={12}>
                  <h3>--</h3>
                  <p className="link" />
                  <p className="description" />
                </Col>
              );
            })}
          </Row> */}
          <div className="google-target d-flex flex-column justify-content-around w-50 mr-5 rtl">
            <div>
              <label htmlFor="ad-title" className="w-100 text-right">
                سربرگ وب سایت
              </label>
              <input
                type="text"
                className="form-control"
                id="ad-title"
                value={title}
                onChange={this.changeHandler}
              />
              <label htmlFor="ad-link" className="w-100 text-right">
                لینک سایت
              </label>
              <input
                type="text"
                className="form-control"
                id="ad-link"
                value={link}
                onChange={this.changeHandler}
              />
              <label htmlFor="ad-description" className="w-100 text-right">
                توضیحات
              </label>
              <textarea
                className="form-control"
                id="ad-description"
                value={description}
                onChange={this.changeHandler}
              ></textarea>
              <label htmlFor="ad-description" className="w-100 text-right">
                کلمات کلیدی
              </label>
              <ul className="d-flex p-0 keywords-list py-2">
                {keywords.map((item, index) => {
                  return (
                    <li className="bg-success text-light rounded mx-1 border p-2">
                      <i
                        className="far fa-times-circle ml-1 remove"
                        onClick={() => this.removeKeyword(item)}
                      ></i>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <input
                type="text"
                className="form-control"
                placeholder="کلمه کلیدی مورد نظر را وارد کرده و Enter بزنید"
                onKeyDown={this.addKeyword}
              />
              <label htmlFor="ad-position" className="w-100 text-right">
                موقعیت
              </label>
              <input
                className="form-control slider"
                type="range"
                id="ad-position"
                min={1}
                max={8}
                value={position}
                onChange={this.changePositionHandler}
              />
              <div className="d-flex w-100">
                <hr className="w-50 bg-muted mx-1" />
                <hr className="w-50 bg-muted mx-1" />
              </div>
              <div className="d-flex w-100 text-center mb-2">
                <span className="text-muted w-50">چهار تای بالا</span>
                <span className="text-muted w-50">چهار تای پایین</span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted">درخواست مشاوره رایگان</span>
              <Button color="success" onClick={this.nativeToggleModal}>
                درخواست
              </Button>
              {/* <strong className="text-success display-4">
                {persianJs(price.toLocaleString())
                  .englishNumber()
                  .toString()}
              </strong> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
