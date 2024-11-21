import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CustomCard from "../card/CustomCard";

const TutorialSection = () => {
  const handleButtonClick = () => {};
  return (
    <>
      <Container>
        <Row>
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Body style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title>Quality features</Card.Title>
                <Card.Text>Tutorials that people love most</Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col lg={4}>
              {" "}
              <CustomCard
                title="Product 1"
                rating="4.5/5"
                subTitle="Great product for daily use"
                imgSrc="https://via.placeholder.com/150"
                buttonText="Buy Now"
                buttonVariant="primary"
                onButtonClick={handleButtonClick}
                customClass="featured-card" // Optional custom CSS class
              />
            </Col>
            <Col lg={4}>
              {" "}
              <CustomCard
                title="Product 1"
                rating="4.5/5"
                subTitle="Great product for daily use"
                imgSrc="https://via.placeholder.com/150"
                buttonText="Buy Now"
                buttonVariant="primary"
                onButtonClick={handleButtonClick}
                customClass="featured-card" // Optional custom CSS class
              />
            </Col>
            <Col lg={4}>
              {" "}
              <CustomCard
                title="Product 1"
                rating="4.5/5"
                subTitle="Great product for daily use"
                imgSrc="https://via.placeholder.com/150"
                buttonText="Buy Now"
                buttonVariant="primary"
                onButtonClick={handleButtonClick}
                customClass="featured-card" // Optional custom CSS class
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default TutorialSection;
