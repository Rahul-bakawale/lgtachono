import React from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StartRatting";
import { FaEye } from "react-icons/fa";

function PopularCards({
  rating,
  title,
  subTitle,
  imgSrc,
  customStyle,
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
        <div
          style={{
            font: "DM Sans",
            fontSize: "18px",
            lineHeight: "28px",
            color: "rgba(52, 61, 72, 1)",
          }}
        >
          <FaEye
            style={{
              font: "DM Sans",
              color: "background: rgba(52, 61, 72, 1)",
            }}
          />
          <span style={{ padding: "10px" }}>
            {watchedStudent} students watched
          </span>
        </div>
        <Card.Title
          style={{
            font: "DM Sans",
            fontSize: "20px",
            lineHeight: "30px",
            color: "rgba(15, 33, 55, 1)",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text
          style={{
            display: "flex,",
            alignItems: "center",
            alignContent: "center",
          }}
        ></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PopularCards;
