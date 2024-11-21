import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Reusable Card Component
function CustomCard({
  title,
  text,
  imgSrc,
  buttonText,
  buttonVariant,
  onButtonClick,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
