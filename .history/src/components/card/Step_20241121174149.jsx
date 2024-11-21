// Step.js
import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

// Reusable Step Component
const Step = ({ numberImage, arrowImage, title, description }) => {
  return (
    <Col lg={3} className="mb-4">
      <Row className="d-flex align-items-center justify-content-center mb-2">
        <Col lg={4} className="d-flex justify-content-center">
          <Image src={numberImage} fluid />
        </Col>
        <Col lg={8} className="d-flex justify-content-center">
          <Image src={arrowImage} fluid />
        </Col>
      </Row>
      <Row className="d-flex justify-content-start">
        <Card.Body>
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
              font: "DM Sans",
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(52, 61, 72, 1)",
            }}
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Row>
    </Col>
  );
};

export default Step;
