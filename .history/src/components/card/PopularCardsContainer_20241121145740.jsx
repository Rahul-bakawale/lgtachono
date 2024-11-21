import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Importing Bootstrap Button
import { FaEye } from "react-icons/fa";
import StarRating from "./StartRatting";

function PopularCardSection({
  rating,
  title,
  subTitle,
  additionalText,
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
      <div
        style={{
          display: "flex",
        }}
      >
        <Card.Img src={imgSrc} />
        <Card.Body>
          {/* Star Rating Component */}
          <div style={{ display: "flex" }}>
            <StarRating starColor="yellow" />

            {/* Watched Students Section */}

            <FaEye
              style={{
                fontSize: "1.2rem",
                color: "rgba(52, 61, 72, 1)",
                border: "1px  rgba(243, 244, 245, 1)",
                position: "relative",
                left: "20px",
                top: "4px",
              }}
            />
            <span
              style={{
                paddingLeft: "40px",
                font: "DM Sans",
                fontSize: "15px",
                lineHeight: "25px",
                color: "rgba(52, 61, 72, 1)",
              }}
            >
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
              width: "205px",
              background: " rgba(63, 219, 177, 1)",
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
      </div>
    </Card>
  );
}

export default PopularCardSection;
