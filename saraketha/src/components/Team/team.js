import React from "react";
import "./objectives.css";
import ObjectiveCards from "./ObjectiveCards";
import { TopLine } from "../InfoSection/InfoElements";
import dilshan from "../../images/Pics/Dilshan Sir.png";
import samith from "../../images/Pics/samitha sir.png";
import ishara from "../../images/Pics/Ishara.png";
import sadeesha from "../../images/Pics/Sadeesha.png";
import thamal from "../../images/Pics/Thamal.png";
import upeka from "../../images/Pics/Upeka.png";
import sara from "../../images/Pics/Sarathchandra.png"

const Team = () => {
  return (
    <div style={{ margin: "auto", padding: "3rem" }} id="about">
      <center>
        <h1 className="destTitle" style={{ fontSize: "50px" }}>
          Meet Our Team
        </h1>
      </center>

      <div
        className="offerCardContainer"
        style={{
          display: "grid",
          grid: "auto/ auto auto auto",

          padding: "10px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <div
            data-aos="fade-up"
            className="offerCard"
            style={{ padding: "2px" }}
          >
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={dilshan}
            ></img>
            <p></p>
            <h3 className="offerTitle">Dr Dilshan de silva</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Supervisor</TopLine>
            </div>
            <p className="offerDescription">✉ suriyaa.k@sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="offerCard"
            style={{ padding: "2px" }}
          >
            <img
              className="offerImg"
              style={{ height: "300px", objectFit: "cover" }}
              alt=""
              src={samith}
            ></img>
            <p></p>
            <h3 className="offerTitle">MR. Samitha Widanarachchi</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Co-Supervisor</TopLine>
            </div>
            <p className="offerDescription">✉ ravi.s@sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="offerCard"
            style={{ padding: "2px" }}
          >
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={sara}
            ></img>
            <p></p>
            <h3 className="offerTitle">Dr S R Sarathchandra</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Supervisor</TopLine>
            </div>
            <p className="offerDescription">✉ suriyaa.k@sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
      </div>

      <div
        className="offerCardContainer"
        style={{
          display: "grid",
          grid: "auto/ auto auto auto auto",

          padding: "10px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={ishara}
            ></img>
            <p></p>
            <h3 className="offerTitle">Ishara Wanninayake</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19106816@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={sadeesha}
            ></img>
            <p></p>
            <h3 className="offerTitle">Wikum Bambaranda</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19106816@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={thamal}
            ></img>
            <p></p>
            <h3 className="offerTitle">Thamal Wickramarachchi</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19166452@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
        <div>
          <div data-aos="fade-up" className="offerCard">
            <img
              className="offerImg"
              alt=""
              style={{ height: "300px", objectFit: "cover" }}
              src={upeka}
            ></img>
            <p></p>
            <h3 className="offerTitle">Upeka Pathirana</h3>
            <div style={{ padding: "20px" }}>
              <TopLine>Group Member</TopLine>
            </div>
            <p className="offerDescription">✉ it19111698@my.sliit.lk</p>
            <p className="offerPrice"></p>
            {/* <button className="offerButton">View Details</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
