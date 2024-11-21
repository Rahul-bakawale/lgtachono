import React from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StartRatting";
import { FaEye } from "react-icons/fa";

function CustomCard({
  rating,
  title,
  subTitle,
  imgSrc,
  customStyle, // Prop for passing dynamic inline styles
  watchedStudent,
}) {
  const defaultStyle = {
    borderRadius: "10px", // Border radius to match your requirements
    overflow: "hidden", // Ensure the image doesn't overflow
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: adds shadow
  };

  return (
    <Card style={{ ...defaultStyle, ...customStyle }}>
      {" "}
      {/* Merge default and custom styles */}
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <StarRating starColor="yellow" />
        <Card.Title>{title}</Card.Title>
        <Card.Text
          style={{
            display: "flex,",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <FaEye style={{ color: "green", fontSize: "1.5rem" }} />
          <div style={{ paddingLeft: "10px" }}>
            {watchedStudent} student watched
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;

// background - repeat: no - repeat;
// background - image: url(/static/media / pp.aeaf571….jpg);
// padding-left: -123px;
// background-position-x: right;
// background-position-x: right;
