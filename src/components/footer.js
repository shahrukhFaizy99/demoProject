import React from "react";

const Footer = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container1">
          <a className="navbar-brand" href="#">
            <img
              className="tafseer"
              src="/images/tafseerAL.PNG"
              alt=""
              width="80"
              height="80"
            ></img>
            AL Tafseer Solution Pvt Ltd.
          </a>
        </div>
        <div className="footer1">
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Downloads</p>
          <p>Product Registration</p>
        </div>

        <div className="footer2">
          <h4>Services</h4>
          <p>Web Development</p>
          <p>Testing</p>
          <p>App Development</p>
          <p>Ui Ux Designing</p>
        </div>
        <div class="email">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </nav>
    </div>
  );
};

export default Footer;
