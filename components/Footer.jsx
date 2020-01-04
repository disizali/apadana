import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <img src="/images/footer.jpeg" />
        <div className="text-dark text-right rtl mr-3">
          <p>
            کلیه حقوق مادی و معنوی متعلق به شرکت ویرا وب آپادانا می باشد
          </p>
          <p>
            <i className="fal fa-copyright" />
            copyright 2020
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
