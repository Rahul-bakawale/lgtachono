import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({
  rating,
  title,
  subTitle,
  imgSrc,
  onButtonClick,
  customStyle, // Prop for passing dynamic inline styles
  buttonText,
}) {
  const defaultStyle = {
    width: "447px",
    height: "447px",
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
        <Card.Title>{title}</Card.Title>
        <Card.Text>{rating}</Card.Text>
        <Card.Text>{subTitle}</Card.Text>
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
