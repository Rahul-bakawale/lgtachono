import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ ratting, title, subTitle, imgSrc, onButtonClick }) {
  return (
    <Card style={{ width: "447px", height: "309" }}>
      <Card.Img variant="bottom" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{ratting}</Card.Text>
        <Card.Text>{subTitle}</Card.Text>
        <Button onClick={onButtonClick}></Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
