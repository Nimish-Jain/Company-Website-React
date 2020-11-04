import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Android Development" imgsrc={img1} />
              <Card title="Web Development" imgsrc={img2} />
              <Card title="Database Management" imgsrc={img3} />
              <Card title="Business Analytics" imgsrc={img4} />
              <Card title="Digital Marketing" imgsrc={img5} />
              <Card title="Video Creation" imgsrc={img6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
