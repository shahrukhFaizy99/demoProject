import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={props.img} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a
            className="btnCheckIn"
            href="https://www.youtube.com/watch?v=rrwycJ08PSA"
            className="btn btn-primary"
          >
            WATCH NOW
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
