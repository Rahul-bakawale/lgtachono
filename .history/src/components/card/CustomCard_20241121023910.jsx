import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CustomCard.css"; // Import custom CSS for styling

function CustomCard({
  rating,
  title,
  subTitle,
  imgSrc,
  buttonText,
  buttonVariant,
  onButtonClick,
  // customClass,
}) {
  return (
    <Card className={`custom-card ${"customClass"}`} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-rating">{rating}</Card.Text>
        <Card.Text>{subTitle}</Card.Text>
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
