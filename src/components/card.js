import React from "react";

const Card = () => {
  return (
    <>
      <div className="card">
        <img
          className="card-img"
          src="/images/birthday.JPG"
          alt=""
          width="150"
          height="80"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a className="btnCheckIn" href="#" className="btn btn-primary">
            CHECK IN
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
