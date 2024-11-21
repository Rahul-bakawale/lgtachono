import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({
  title,
  subTitle,
  imgSrc,
  buttonText,
  buttonVariant,
  onButtonClick,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="bottom" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{subTitle}</Card.Text>
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
