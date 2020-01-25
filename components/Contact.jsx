import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import {HOST} from "../src/config";
export default class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  saveContact() {
    const { firstName, lastName, website, phoneNumber } = this.state;
    let { information } = this.props;
    information = JSON.stringify(information);
    axios.post(`http://${HOST}}/api/contact`, {
      firstName,
      lastName,
      website,
      phoneNumber,
      information
    });
    alert("درخواست شما ثبت و همکاران ما به زودی با شما تماس خواهند گرفت .");
    this.setState({ modal: false });
  }

  render() {
    const { modal } = this.props;
    return (
      <div className="rtl">
        <Modal isOpen={modal} toggle={this.props.toggleModal}>
          <ModalHeader toggle={this.toggleModal} className="ml-auto">
            فرم درخواست مشاوره رایگان
          </ModalHeader>
          <ModalBody className="rtl">
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column justify-content-start text-right">
                <label htmlFor="firstName" className="text-right">
                  نام
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="d-flex flex-column justify-content-start text-right">
                <label htmlFor="lastName" className="text-right">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column justify-content-start text-right">
                <label htmlFor="website" className="text-right">
                  سایت شما ( اختیاری )
                </label>
                <input
                  type="text"
                  id="website"
                  className="form-control"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="d-flex flex-column justify-content-start text-right">
                <label htmlFor="phoneNumber" className="text-right">
                  شماره تماس
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="form-control"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.props.toggleModal}
              onClick={this.saveContact}
            >
              با من تماس بگیرید
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleModal}>
              لغو
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
