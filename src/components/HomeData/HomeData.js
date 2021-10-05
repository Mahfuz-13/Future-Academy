import React from "react";
const HomeData = (props) => {
  const { img, name, Price } = props.course;
  return (
    <div className="container">
      <div className="card">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Price:${Price}</h6>
          <button className="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
