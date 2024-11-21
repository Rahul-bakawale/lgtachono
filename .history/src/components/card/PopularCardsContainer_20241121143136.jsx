import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Importing Bootstrap Button
import { FaEye } from "react-icons/fa";
import StarRating from "./StartRatting";

function PopularCardSection({
  rating,
  title,
  subTitle,
  additionalText, // New prop for the additional text
  imgSrc,
  customStyle,
  watchedStudent,
  buttonLabel, // Default button label
  onButtonClick, // Custom onClick handler for the button
}) {
  const defaultStyle = {
    borderRadius: "10px", // Border radius to match your requirements
    overflow: "hidden", // Ensure the image doesn't overflow
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: adds shadow
  };

  return (
    <Card style={{ ...defaultStyle, ...customStyle }}>
      <Card.Img src={imgSrc} />
      <Card.Body>
        {/* Star Rating Component */}
        <StarRating starColor="yellow" />

        {/* Watched Students Section */}
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
              fontSize: "1.2rem",
              color: "rgba(52, 61, 72, 1)",
            }}
          />
          <span style={{ padding: "10px" }}>
            {watchedStudent} students watched
          </span>
        </div>

        {/* Title */}
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

        {/* Subtitle */}
        <Card.Text
          style={{
            font: "DM Sans",
            fontSize: "16px",
            lineHeight: "24px",
            color: "rgba(52, 61, 72, 1)",
          }}
        >
          {subTitle}
        </Card.Text>

        {/* Additional Text */}
        {additionalText && (
          <Card.Text
            style={{
              font: "DM Sans",
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(100, 100, 100, 1)", // Lighter color for additional text
            }}
          >
            {additionalText}
          </Card.Text>
        )}

        {/* Custom Button */}
        <Button
          variant="primary" // Bootstrap variant
          style={{
            backgroundColor: "#007BFF", // Custom button color
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            font: "DM Sans",
            fontSize: "16px",
          }}
          onClick={onButtonClick} // Trigger the custom click handler
        >
          {buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PopularCardSection;
