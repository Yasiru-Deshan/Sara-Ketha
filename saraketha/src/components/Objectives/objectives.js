import React from "react";
import "./objectives.css";
import Cards from "../Cards/cards";

const experianceCards = [
  {
    img: "https://cropaia.com/wp-content/uploads/Identification-of-pests.jpg",
    type: "Rooms & Suites",
    text: "Real - time detection and classification of  Rice Thrips Damage and Rice Blast Disease",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://lvivity.com/wp-content/uploads/2020/04/iot-in-agriculture.jpg",
    type: "Rooms & Suites",
    text: "Develop smart IoT device and Spray the recommended pesticide",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://eos.com/wp-content/uploads/2021/12/septoria-leaf-spot-on-tomato.jpg",
    type: "Rooms & Suites",
    text: "Predict the disease dispersion and crowdsourcing for information sharing",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://www.irri.org/sites/default/files/files/climate-smart%20rice/climate-change-ready-about.jpg",
    type: "Rooms & Suites",
    text: "Rice yield prediction and Recommend most suitable rice variety",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
];

const Objectives = () => {
  return (
    <div
      style={{
        margin: "auto",
        padding: "20px",
        paddingTop: "50px",
        height: "600px",
        backgroundColor: "#82EC2F",
      }}
      id="scope"
    >
      <center>
        {" "}
        <h1 style={{ fontSize: "40px", color: "white" }}>Objectives</h1>
      </center>

      <div className="cardContainer" style={{ marginTop: "80px" }}>
        {experianceCards.map((card) => {
          return <Cards key={card.img} image={card.img} text={card.text} />;
        })}
      </div>
    </div>
  );
};

export default Objectives;
